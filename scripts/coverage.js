/*
 * Prints the README's state coverage table from js/authorities.js and js/admission.js.
 * Run with: npm run coverage
 */
var A = require("../js/authorities.js");
var AD = require("../js/admission.js");
var J = require("../js/jurisdictions.js");

function remote(s) {
  if (s.remote) {
    var tag = s.remote.level === "risk" ? "**No** (rejects Op. 495): " : s.remote.level === "caution" ? "Limited: " : "Yes: ";
    return tag + s.remote.cite;
  }
  if (s.remoteNone) return "No guidance found (" + s.remoteNone + ")" + (s.remoteNote ? "; " + s.remoteNote.cite : "");
  return "";
}

function inHouse(s) {
  if (!s.inHouse) return "Model Rule 5.5(d)(1) assumed";
  if (s.inHouse.noInHouseException) return "**No in-house exception**";
  return s.inHouse.cite + (s.inHouse.noRegistration ? " (no registration)" : "") + (s.inHouse.deadline ? " (within " + s.inHouse.deadline + ")" : "");
}

function temporary(s) {
  if (!s.temp) return "Model Rule 5.5(c)";
  if (Array.isArray(s.temp.harbors) && s.temp.harbors.length === 0) return "**No general safe harbor**";
  if (s.temp.verified === false) return "Verify";
  if (Array.isArray(s.temp.harbors)) return "Limited: " + s.temp.harbors.map(function (h) { return "(" + h.replace("c", "c)(") + ")"; }).join(", ");
  if (s.temp.clientBased) return "Client-based";
  return "State conditions";
}

function admission(code) {
  var a = AD.ADMISSION[code];
  if (!a) return "";
  var parts = [];
  parts.push(a.aom === "yes" ? "On motion: " + a.years + (a.recip ? " (reciprocal)" : "") : a.aom === "limited" ? "On motion: limited" : "No admission on motion");
  if (a.ube) parts.push("UBE " + a.ube.min + "+");
  return parts.join("; ");
}

var rows = J.JURISDICTIONS.filter(function (j) { return A.STATES[j.code]; }).map(function (j) {
  var s = A.STATES[j.code];
  return "| " + [j.name, remote(s), inHouse(s), temporary(s), s.phv ? s.phv.cite : "", admission(j.code)].join(" | ") + " |";
});

console.log("| Jurisdiction | Remote work from the state | In-house counsel | Temporary practice | Pro hac vice | Full admission |");
console.log("| --- | --- | --- | --- | --- | --- |");
console.log(rows.join("\n"));
