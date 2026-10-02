/*
 * Prints the README's state coverage table from js/authorities.js.
 * Run with: npm run coverage
 */
var A = require("../js/authorities.js");
var J = require("../js/jurisdictions.js");

function remote(s) {
  if (s.remote) {
    var tag = s.remote.level === "risk" ? "**No** (rejects Op. 495): " : s.remote.level === "caution" ? "Limited: " : "Yes: ";
    return tag + s.remote.cite;
  }
  if (s.remoteNone) return "No guidance found (" + s.remoteNone + ")";
  return "";
}

function inHouse(s) {
  if (!s.inHouse) return "Model Rule 5.5(d)(1) assumed";
  if (s.inHouse.noInHouseException) return "**No in-house exception**";
  return s.inHouse.cite + (s.inHouse.noRegistration ? " (no registration)" : "");
}

var rows = J.JURISDICTIONS.filter(function (j) { return A.STATES[j.code]; }).map(function (j) {
  var s = A.STATES[j.code];
  return "| " + [j.name, remote(s), inHouse(s), s.phv ? s.phv.cite : ""].join(" | ") + " |";
});

console.log("| Jurisdiction | Remote work from the state | In-house counsel | Pro hac vice |");
console.log("| --- | --- | --- | --- |");
console.log(rows.join("\n"));
