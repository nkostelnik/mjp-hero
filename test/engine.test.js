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
  var r = analyze(withBase({ residence: "CO", workLocations: ["CO"] }));
  assert.strictEqual(section(r, "CO").level, "caution");
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

var failed = 0;
tests.forEach(function (t) {
  try { t[1](); console.log("ok   " + t[0]); }
  catch (e) { failed++; console.log("FAIL " + t[0] + "\n     " + e.message); }
});
console.log("\n" + (tests.length - failed) + "/" + tests.length + " passed");
process.exit(failed ? 1 : 0);
