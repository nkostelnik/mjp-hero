/*
 * MJP Hero: paths to full admission, from the NCBE Comprehensive Guide to Bar Admission
 * Requirements (published with the ABA Section of Legal Education), checked 2026-10-01.
 *
 *   aom    admission on motion: "yes", "no", or "limited" (only for narrow categories)
 *   years  practice required for admission on motion, as NCBE states it ("5 of past 7")
 *   recip  true if admission on motion is limited to lawyers from jurisdictions that
 *          offer it in return (reciprocity); null if NCBE gives no answer
 *   ube    transferred Uniform Bar Exam score: { min: minimum score, age: maximum age }
 *          or null if the jurisdiction does not accept transferred UBE scores
 */
(function (root) {
  var SOURCES = {
    aom: "https://reports.ncbex.org/charts/chart-14/",
    recip: "https://reports.ncbex.org/charts/chart-15/",
    ube: "https://reports.ncbex.org/charts/chart-5/"
  };
  var CHECKED = "2026-10-01";

  function a(aom, years, recip, ubeMin, ubeAge) {
    return { aom: aom, years: years || "", recip: recip, ube: ubeMin ? { min: ubeMin, age: ubeAge } : null };
  }

  var ADMISSION = {
    AL: a("yes", "5 of past 6", true, "260", "36 months"),
    AK: a("yes", "3 of past 5", false, "270", "5 years"),
    AZ: a("yes", "3 of past 5", true, "270", "5 years"),
    AR: a("yes", "3 of past 5", true, "270", "36 months"),
    CA: a("no"),
    CO: a("yes", "3 of past 5", false, "270", "3 or 5 years"),
    CT: a("yes", "5 of past 10", true, "266", "5 years"),
    DE: a("no"),
    DC: a("yes", "3", false, "266", "5 years"),
    FL: a("no"),
    GA: a("yes", "5 of past 7", true),
    HI: a("limited", "", null),
    ID: a("yes", "3 of past 5", false, "266", "37 months"),
    IL: a("yes", "3 of past 5", false, "266", "4 years"),
    IN: a("yes", "3 of past 5", false, "264", "5 years"),
    IA: a("yes", "5 of past 7", false, "260 or 266", "2 or 5 years"),
    KS: a("yes", "5 of past 7", false, "266", "60 months"),
    KY: a("yes", "5 of past 7", true, "266", "5 years"),
    LA: a("no"),
    ME: a("yes", "3 of past 5", false, "270", "3 years"),
    MD: a("yes", "3 of past 5, or 10 total", false, "266", "3 years"),
    MA: a("yes", "5 of past 7", false, "270", "5 years"),
    MI: a("yes", "3 of past 5", false, "268", "3 years"),
    MN: a("yes", "3 of past 5", false, "260", "36 months"),
    MS: a("yes", "5", null),
    MO: a("yes", "5 of past 10", true, "260", "5 years"),
    MT: a("yes", "5 of past 7", false, "266", "3 years"),
    NE: a("yes", "3 of past 5", false, "270", "5 years"),
    NV: a("no"),
    NH: a("yes", "5 of past 7 (or the past 3)", true, "270", "3 or 5 years"),
    NJ: a("yes", "5 of past 7", true, "266", "36 months"),
    NM: a("yes", "5 of past 7", true, "260", "60 months"),
    NY: a("yes", "5 of past 7", true, "266", "3 years"),
    NC: a("yes", "4 of past 6", true, "270", "3 years"),
    ND: a("yes", "4 of past 5", false, "260", "2 or 5 years"),
    OH: a("yes", "5 of past 7", false, "270", "5 years"),
    OK: a("yes", "3 of past 5", true, "260", "3 years"),
    OR: a("yes", "2 of past 4", false, "270", "36 months"),
    PA: a("yes", "5 of past 7", true, "270", "30 months"),
    RI: a("no", "", null, "270", "2 years"),
    SC: a("limited", "", null, "266", "3 years"),
    SD: a("yes", "3 of past 5", true),
    TN: a("yes", "5 of past 7", false, "270", "3 or 5 years"),
    TX: a("yes", "5 of past 7", false, "270", "5 years"),
    UT: a("yes", "3 of past 5", true, "260", "36 months"),
    VT: a("yes", "5 of past 10 (or the past 3)", false, "270", "5 years"),
    VA: a("yes", "3 of past 5", true),
    WA: a("yes", "1 of past 3", false, "260", "40 months"),
    WV: a("yes", "5 of past 7", true, "270", "3 years"),
    WI: a("yes", "3 of past 5", false, "260", "36 months"),
    WY: a("yes", "5 of past 7", false, "270", "3 or 5 years"),
    PR: a("no"),
    VI: a("yes", "5 of past 7", true, "266", "3 years"),
    GU: a("limited", "", null),
    MP: a("limited", "", null)
  };

  var api = { ADMISSION: ADMISSION, ADMISSION_SOURCES: SOURCES, ADMISSION_CHECKED: CHECKED };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else { root.MJP = root.MJP || {}; Object.assign(root.MJP, api); }
})(this);
