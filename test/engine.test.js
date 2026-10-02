/* Run with: node test/engine.test.js */
var assert = require("assert");
var analyze = require("../js/engine.js").analyze;

var tests = [];
function test(name, fn) { tests.push([name, fn]); }

function section(r, code) { return r.sections.filter(function (s) { return s.jurisdiction === code; })[0]; }
function cited(r, text) { return r.citations.some(function (c) { return c.cite.indexOf(text) >= 0; }); }

var base = {
  residence: "NY", workLocations: ["NY"], licensed: ["NY"], clientLocations: ["NY"],
  practiceType: "private", matterLaw: ["NY"], duration: "ongoing", holdOutIn: [],
  disclosesLimits: true, proceeding: "none", phv: "na", localCounsel: "no"
};
function withBase(o) { return Object.assign({}, base, o); }

test("all in one licensed state is ok", function () {
  var r = analyze(base);
  assert.strictEqual(r.overall, "ok");
});

test("remote from Florida on NY matters is ok with Florida authority", function () {
  var r = analyze(withBase({ residence: "FL", workLocations: ["FL"] }));
  var fl = section(r, "FL");
  assert.strictEqual(fl.level, "ok");
  assert.ok(cited(r, "Formal Op. 495"));
  assert.ok(cited(r, "318 So. 3d 538"));
});

test("remote from a state without data is caution", function () {
  var r = analyze(withBase({ residence: "KY", workLocations: ["KY"] }));
  assert.strictEqual(section(r, "KY").level, "caution");
});

test("office in unlicensed state is risk", function () {
  var r = analyze(withBase({ residence: "FL", workLocations: ["FL"], holdOutIn: ["FL"] }));
  assert.strictEqual(r.overall, "risk");
  assert.ok(cited(r, "5.5(b)(2)"));
});

test("ongoing work from FL for FL clients on FL law is risk", function () {
  var r = analyze(withBase({ residence: "FL", workLocations: ["FL"], clientLocations: ["FL"], matterLaw: ["FL"] }));
  assert.strictEqual(section(r, "FL").level, "risk");
});

test("temporary work with local counsel is caution under 5.5(c)(1)", function () {
  var r = analyze(withBase({ clientLocations: ["NJ"], matterLaw: ["NJ"], duration: "temporary", localCounsel: "yes" }));
  assert.strictEqual(section(r, "NJ").level, "caution");
  assert.ok(cited(r, "5.5(c)(1)"));
});

test("temporary work with no safe harbor is risk", function () {
  var r = analyze(withBase({ clientLocations: ["NJ"], matterLaw: ["NJ"], duration: "temporary" }));
  assert.strictEqual(section(r, "NJ").level, "risk");
});

test("in-house in unlicensed state is caution with registration cite", function () {
  var r = analyze(withBase({ residence: "IL", workLocations: ["IL"], clientLocations: ["IL"], matterLaw: ["IL"], practiceType: "inhouse" }));
  assert.strictEqual(section(r, "IL").level, "caution");
  assert.ok(cited(r, "5.5(d)(1)"));
  assert.ok(cited(r, "R. 716"));
});

test("federal practitioner on federal law is ok, but not on state law", function () {
  var ok = analyze(withBase({ residence: "TX", workLocations: ["TX"], clientLocations: ["TX"], matterLaw: ["FED"], practiceType: "federal" }));
  assert.notStrictEqual(section(ok, "TX").level, "risk");
  assert.ok(cited(ok, "Sperry"));
  var bad = analyze(withBase({ residence: "TX", workLocations: ["TX"], clientLocations: ["TX"], matterLaw: ["TX"], practiceType: "federal" }));
  assert.strictEqual(section(bad, "TX").level, "risk");
});

test("court in unlicensed state without phv or counsel is risk", function () {
  var r = analyze(withBase({ proceeding: "court", proceedingIn: "PA", phv: "no", duration: "temporary" }));
  assert.strictEqual(section(r, "PA").level, "risk");
});

test("court with phv pending is caution", function () {
  var r = analyze(withBase({ proceeding: "court", proceedingIn: "PA", phv: "will_seek", duration: "temporary" }));
  assert.strictEqual(section(r, "PA").level, "caution");
});

test("California client flags Birbrower", function () {
  var r = analyze(withBase({ clientLocations: ["CA"] }));
  assert.ok(cited(r, "Birbrower"));
});

test("NY lawyer living in NJ gets Judiciary Law 470 flag", function () {
  var r = analyze(withBase({ residence: "NJ", workLocations: ["NY"] }));
  assert.ok(cited(r, "470"));
});

test("suspended lawyer is risk", function () {
  var r = analyze(withBase({ goodStanding: false }));
  assert.strictEqual(r.overall, "risk");
});

test("no licenses is risk", function () {
  var r = analyze(withBase({ licensed: [] }));
  assert.strictEqual(r.overall, "risk");
});

test("foreign residence adds out-of-scope section", function () {
  var r = analyze(withBase({ residence: "FOREIGN", workLocations: ["FOREIGN"] }));
  assert.ok(section(r, "FOREIGN"));
});

test("no output text contains em or en dashes", function () {
  var r = analyze(withBase({ residence: "CA", workLocations: ["CA"], clientLocations: ["CA", "FOREIGN"], matterLaw: ["CA", "FED"], holdOutIn: ["CA"], proceeding: "adr", proceedingIn: "CA", duration: "temporary" }));
  var s = JSON.stringify(r);
  assert.ok(!/[–—]/.test(s));
});

test("disclosure N/A: no missing-disclosure flag, forward-looking recommendation", function () {
  var r = analyze(withBase({ residence: "CO", workLocations: ["CO"], disclosesLimits: "na" }));
  assert.ok(r.recommendations.some(function (x) { return x.indexOf("If you later create") === 0; }));
  var fed = analyze(withBase({ residence: "TX", workLocations: ["TX"], holdOutIn: ["TX"], matterLaw: ["FED"], practiceType: "federal", disclosesLimits: "na" }));
  assert.strictEqual(section(fed, "TX").level, "caution");
  var no = analyze(withBase({ residence: "TX", workLocations: ["TX"], holdOutIn: ["TX"], matterLaw: ["FED"], practiceType: "federal", disclosesLimits: "no" }));
  assert.strictEqual(section(no, "TX").level, "risk");
});

test("Texas in-house: no registration required", function () {
  var r = analyze(withBase({ residence: "TX", workLocations: ["TX"], clientLocations: ["TX"], matterLaw: ["NY"], practiceType: "inhouse" }));
  var txt = section(r, "TX").findings.map(function (x) { return x.text; }).join(" ");
  assert.ok(txt.indexOf("does not require in-house counsel to register") >= 0);
});

test("remote work: MA, NY-style rules ok; DC narrower guidance is caution", function () {
  var ma = analyze(Object.assign({}, base, { licensed: ["CT"], clientLocations: ["CT"], matterLaw: ["CT"], residence: "MA", workLocations: ["MA"] }));
  assert.strictEqual(section(ma, "MA").level, "ok");
  assert.ok(cited(ma, "cmt. [4A]"));
  var ny = analyze(Object.assign({}, base, { licensed: ["NJ"], clientLocations: ["NJ"], matterLaw: ["NJ"], residence: "NY", workLocations: ["NY"] }));
  assert.strictEqual(section(ny, "NY").level, "ok");
  assert.ok(cited(ny, "523.5"));
  var dc = analyze(withBase({ residence: "DC", workLocations: ["DC"] }));
  assert.strictEqual(section(dc, "DC").level, "caution");
});

test("verified state citations carry a source URL", function () {
  var A = require("../js/authorities.js");
  Object.keys(A.STATES).forEach(function (k) {
    Object.keys(A.STATES[k]).forEach(function (f) {
      var c = A.STATES[k][f];
      if (c && c.verified) assert.ok(c.url.indexOf("https://") === 0, k + "." + f + " is verified but has no source URL");
    });
  });
});

test("in-house with many states' law is ok under 5.5(d)(1) and adds no state sections", function () {
  var r = analyze(withBase({ practiceType: "inhouse", matterLaw: ["MULTI"] }));
  assert.strictEqual(r.overall, "ok");
  assert.ok(cited(r, "5.5(d)(1)"));
  assert.ok(!section(r, "MULTI"));
});

test("many states' law without in-house practice is caution", function () {
  var r = analyze(withBase({ practiceType: "private", matterLaw: ["MULTI"] }));
  assert.strictEqual(section(r, null).level, "caution");
});

test("no public presence overrides any listed office", function () {
  var r = analyze(withBase({ residence: "FL", workLocations: ["FL"], holdOutIn: ["FL"], noPublicPresence: true }));
  assert.notStrictEqual(section(r, "FL").level, "risk");
});

test("fractional counsel is analyzed as outside counsel, not in-house", function () {
  var r = analyze(withBase({ practiceType: "fractional", residence: "FL", workLocations: ["FL"], clientLocations: ["FL"], matterLaw: ["FL"] }));
  assert.strictEqual(section(r, "FL").level, "risk");
  assert.ok(cited(r, "88-356"));
  var inhouse = analyze(withBase({ practiceType: "inhouse", residence: "FL", workLocations: ["FL"], clientLocations: ["FL"], matterLaw: ["FL"] }));
  assert.strictEqual(section(inhouse, "FL").level, "caution");
});

function recs(r, text) { return r.recommendations.some(function (x) { return x.indexOf(text) >= 0; }); }

test("Missouri rejects Op. 495: remote work from Missouri is risk", function () {
  var r = analyze(withBase({ residence: "MO", workLocations: ["MO"] }));
  assert.strictEqual(section(r, "MO").level, "risk");
  assert.ok(cited(r, "2024-03"));
});

test("Missouri: in-house lawyer serving a Missouri company remotely is risk", function () {
  var r = analyze(withBase({ practiceType: "inhouse", clientLocations: ["MO"] }));
  assert.strictEqual(section(r, "MO").level, "risk");
  assert.ok(cited(r, "2024-02"));
});

test("Minnesota remote work is ok but requires client notice", function () {
  var r = analyze(withBase({ residence: "MN", workLocations: ["MN"] }));
  assert.strictEqual(section(r, "MN").level, "caution");
  assert.ok(recs(r, "not licensed in Minnesota"));
});

test("licensing state's own remote guidance appears when working elsewhere", function () {
  var r = analyze(Object.assign({}, base, { licensed: ["IL"], clientLocations: ["IL"], matterLaw: ["IL"], residence: "UT", workLocations: ["UT"] }));
  assert.ok(cited(r, "ISBA Advisory Op. 22-03"));
  assert.strictEqual(section(r, "UT").level, "ok");
});

test("Washington lawyer living elsewhere gets resident-agent flag", function () {
  var r = analyze(Object.assign({}, base, { licensed: ["WA"], clientLocations: ["WA"], matterLaw: ["WA"], residence: "OR", workLocations: ["OR"] }));
  assert.ok(section(r, "WA").findings.some(function (x) { return x.text.indexOf("resident agent") >= 0; }));
});

test("Op. 495, 498, and 504 recommendations appear for remote work", function () {
  var r = analyze(withBase({ residence: "FL", workLocations: ["FL"] }));
  assert.ok(recs(r, "by appointment only"));
  assert.ok(recs(r, "ABA Op. 498"));
  assert.ok(recs(r, "ABA Op. 504"));
  assert.ok(cited(r, "Formal Op. 504"));
});

test("all-in-one-state practice gets no remote recommendations", function () {
  var r = analyze(base);
  assert.ok(!recs(r, "ABA Op. 498") && !recs(r, "ABA Op. 504"));
});

var failed = 0;
tests.forEach(function (t) {
  try { t[1](); console.log("ok   " + t[0]); }
  catch (e) { failed++; console.log("FAIL " + t[0] + "\n     " + e.message); }
});
console.log("\n" + (tests.length - failed) + "/" + tests.length + " passed");
process.exit(failed ? 1 : 0);
