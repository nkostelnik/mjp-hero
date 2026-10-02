/* MJP Hero: jurisdiction list. Works in the browser (window.MJP) and in Node (module.exports). */
(function (root) {
  var JURISDICTIONS = [
    ["AL", "Alabama"], ["AK", "Alaska"], ["AZ", "Arizona"], ["AR", "Arkansas"], ["CA", "California"],
    ["CO", "Colorado"], ["CT", "Connecticut"], ["DE", "Delaware"], ["DC", "District of Columbia"],
    ["FL", "Florida"], ["GA", "Georgia"], ["HI", "Hawaii"], ["ID", "Idaho"], ["IL", "Illinois"],
    ["IN", "Indiana"], ["IA", "Iowa"], ["KS", "Kansas"], ["KY", "Kentucky"], ["LA", "Louisiana"],
    ["ME", "Maine"], ["MD", "Maryland"], ["MA", "Massachusetts"], ["MI", "Michigan"], ["MN", "Minnesota"],
    ["MS", "Mississippi"], ["MO", "Missouri"], ["MT", "Montana"], ["NE", "Nebraska"], ["NV", "Nevada"],
    ["NH", "New Hampshire"], ["NJ", "New Jersey"], ["NM", "New Mexico"], ["NY", "New York"],
    ["NC", "North Carolina"], ["ND", "North Dakota"], ["OH", "Ohio"], ["OK", "Oklahoma"], ["OR", "Oregon"],
    ["PA", "Pennsylvania"], ["RI", "Rhode Island"], ["SC", "South Carolina"], ["SD", "South Dakota"],
    ["TN", "Tennessee"], ["TX", "Texas"], ["UT", "Utah"], ["VT", "Vermont"], ["VA", "Virginia"],
    ["WA", "Washington"], ["WV", "West Virginia"], ["WI", "Wisconsin"], ["WY", "Wyoming"],
    ["PR", "Puerto Rico"], ["VI", "U.S. Virgin Islands"], ["GU", "Guam"], ["MP", "Northern Mariana Islands"]
  ].map(function (p) { return { code: p[0], name: p[1] }; });

  // Pseudo-jurisdictions used by some questions only.
  var FOREIGN = { code: "FOREIGN", name: "Outside the United States" };
  var FEDERAL = { code: "FED", name: "U.S. federal law" };
  var MULTI = { code: "MULTI", name: "Many states (in-house contracts)" };

  var byCode = {};
  JURISDICTIONS.concat([FOREIGN, FEDERAL, MULTI]).forEach(function (j) { byCode[j.code] = j; });

  function nameOf(code) { return byCode[code] ? byCode[code].name : code; }

  var api = { JURISDICTIONS: JURISDICTIONS, FOREIGN: FOREIGN, FEDERAL: FEDERAL, MULTI: MULTI, nameOf: nameOf };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else { root.MJP = root.MJP || {}; Object.assign(root.MJP, api); }
})(this);
