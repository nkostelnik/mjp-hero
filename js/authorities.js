/*
 * MJP Hero: citation library.
 *
 * ABA entries paraphrase the ABA Model Rules of Professional Conduct and formal opinions.
 * State entries are the adopted-rule and court-rule citations for the ten covered states.
 * Every state entry carries verified:false until someone checks it against the current
 * official source; the UI shows a "verify" tag on anything unverified.
 */
(function (root) {
  var ABA = {
    "5.5(a)": {
      cite: "ABA Model Rule 5.5(a)",
      text: "A lawyer may not practice law in a jurisdiction in violation of that jurisdiction's regulation of the legal profession, or help someone else do so."
    },
    "5.5(b)(1)": {
      cite: "ABA Model Rule 5.5(b)(1)",
      text: "A lawyer not admitted in a jurisdiction may not establish an office or other systematic and continuous presence there for the practice of law, except as authorized by the Rules or other law."
    },
    "5.5(b)(2)": {
      cite: "ABA Model Rule 5.5(b)(2)",
      text: "A lawyer not admitted in a jurisdiction may not hold out to the public or otherwise represent that the lawyer is admitted there."
    },
    "5.5(c)": {
      cite: "ABA Model Rule 5.5(c)",
      text: "A lawyer admitted in another U.S. jurisdiction, and not disbarred or suspended anywhere, may provide legal services on a temporary basis if one of four safe harbors in (c)(1) to (c)(4) applies."
    },
    "5.5(c)(1)": {
      cite: "ABA Model Rule 5.5(c)(1)",
      text: "Temporary services undertaken in association with a locally admitted lawyer who actively participates in the matter."
    },
    "5.5(c)(2)": {
      cite: "ABA Model Rule 5.5(c)(2)",
      text: "Temporary services in or reasonably related to a pending or potential proceeding before a tribunal, if the lawyer (or a person the lawyer assists) is authorized, or reasonably expects to be authorized, to appear."
    },
    "5.5(c)(3)": {
      cite: "ABA Model Rule 5.5(c)(3)",
      text: "Temporary services in or reasonably related to an arbitration, mediation, or other ADR proceeding, if the services arise out of or reasonably relate to the lawyer's home-jurisdiction practice and the forum does not require pro hac vice admission."
    },
    "5.5(c)(4)": {
      cite: "ABA Model Rule 5.5(c)(4)",
      text: "Other temporary services that arise out of or are reasonably related to the lawyer's practice in a jurisdiction where the lawyer is admitted."
    },
    "5.5(d)(1)": {
      cite: "ABA Model Rule 5.5(d)(1)",
      text: "A lawyer admitted elsewhere may provide services through an office or systematic presence to the lawyer's employer or its organizational affiliates (not services requiring pro hac vice admission)."
    },
    "5.5(d)(2)": {
      cite: "ABA Model Rule 5.5(d)(2)",
      text: "A lawyer admitted elsewhere may provide services the lawyer is authorized by federal or other law or rule to provide in the jurisdiction."
    },
    "5.5 cmt4": {
      cite: "ABA Model Rule 5.5, cmt. [4]",
      text: "Presence may be systematic and continuous even if the lawyer is not physically present in the jurisdiction."
    },
    "5.5 cmts": {
      cite: "ABA Model Rule 5.5, comments",
      text: "Lawyers practicing under 5.5(d)(1) may be subject to local registration, client-protection-fund, and CLE requirements; lawyers must not hold out as locally admitted."
    },
    "8.5(a)": {
      cite: "ABA Model Rule 8.5(a)",
      text: "A lawyer admitted in a jurisdiction is subject to its disciplinary authority wherever the conduct occurs. A lawyer not admitted is also subject to a jurisdiction's discipline if the lawyer provides or offers to provide legal services there."
    },
    "8.5(b)(1)": {
      cite: "ABA Model Rule 8.5(b)(1)",
      text: "For conduct connected with a matter pending before a tribunal, the rules of the jurisdiction where the tribunal sits apply, unless the tribunal's rules provide otherwise."
    },
    "8.5(b)(2)": {
      cite: "ABA Model Rule 8.5(b)(2)",
      text: "For other conduct, the rules of the jurisdiction where the conduct occurred apply, or, if the predominant effect is elsewhere, that jurisdiction's rules. A lawyer who reasonably believes the predominant effect will occur in a particular jurisdiction and conforms to its rules is not subject to discipline."
    },
    "7.1": {
      cite: "ABA Model Rule 7.1 & cmts.",
      text: "Communications about a lawyer's services, including letterhead, websites, and firm names, must not be false or misleading, including about where the lawyer is admitted."
    },
    "1.1": {
      cite: "ABA Model Rule 1.1",
      text: "A lawyer must provide competent representation, including the legal knowledge reasonably necessary for the matter, which matters when another jurisdiction's law is involved."
    },
    "Op 495": {
      cite: "ABA Formal Op. 495 (2020), Lawyers Working Remotely",
      text: "A lawyer may practice the law of a jurisdiction where the lawyer is licensed while physically located in a jurisdiction where the lawyer is not licensed, if the local jurisdiction has not said otherwise and the lawyer does not hold out as admitted there, advertise or offer services there, or establish a local office."
    },
    "Op 498": {
      cite: "ABA Formal Op. 498 (2021), Virtual Practice",
      text: "Virtual practice is permitted but carries duties of competence, confidentiality, and supervision, and does not relax the jurisdictional limits of Rule 5.5."
    },
    "Sperry": {
      cite: "Sperry v. Florida ex rel. Florida Bar, 373 U.S. 379 (1963)",
      text: "A state may not prohibit a practitioner authorized by federal law (there, patent practice before the USPTO) from performing that federally authorized practice within the state."
    }
  };

  /*
   * Per-state data. Fields (all optional):
   *   rule      adopted version of Rule 5.5
   *   upl       statute or court rule defining unauthorized practice
   *   temp      temporary or registered practice by out-of-state lawyers
   *   inHouse   in-house counsel registration
   *   phv       pro hac vice admission
   *   adr       out-of-state counsel in arbitration
   *   remote    guidance on remote work from within the state for out-of-state matters
   *   residency requirements on licensed lawyers who live elsewhere
   *   notes     extra warnings (strings)
   */
  function a(cite, text) { return { cite: cite, text: text || "", verified: false }; }

  var STATES = {
    CA: {
      rule: a("Cal. R. Prof. Conduct 5.5", "California's version departs from the Model Rule and does not adopt the 5.5(c) and (d) safe harbors in rule text; those are handled by court rules."),
      upl: a("Cal. Bus. & Prof. Code §§ 6125, 6126", "Practicing law in California without active State Bar membership is prohibited and can be a crime."),
      temp: a("Cal. Rules of Court 9.47, 9.48", "Out-of-state lawyers may provide temporary litigation-related (9.47) or non-litigation (9.48) services only under the conditions those rules set."),
      inHouse: a("Cal. Rules of Court 9.46", "Registered in-house counsel program."),
      phv: a("Cal. Rules of Court 9.40", "Pro hac vice admission in California state courts."),
      adr: a("Cal. Rules of Court 9.43; Cal. Code Civ. Proc. § 1282.4", "Out-of-state attorney arbitration counsel must file a certificate and meet conditions."),
      notes: [
        "Birbrower, Montalbano, Condon & Frank v. Superior Court, 17 Cal. 4th 119 (1998): advising a California client on California matters can be practice \"in California\" even without being physically present."
      ]
    },
    NY: {
      rule: a("N.Y. Rules of Prof. Conduct 5.5"),
      upl: a("N.Y. Judiciary Law §§ 476-a, 478"),
      temp: a("22 NYCRR Part 523", "Temporary practice in New York by out-of-state and foreign lawyers."),
      inHouse: a("22 NYCRR Part 522", "Registered in-house counsel."),
      phv: a("22 NYCRR § 520.11", "Pro hac vice admission."),
      residency: a("N.Y. Judiciary Law § 470; Schoenefeld v. State of New York, 25 N.Y.3d 22 (2015)", "A New York-admitted lawyer who does not reside in New York must maintain a physical office in New York to practice there. Confirm the current status of this requirement.")
    },
    TX: {
      rule: a("Tex. Disciplinary R. Prof'l Conduct 5.05", "Texas numbers its unauthorized-practice rule 5.05 rather than 5.5 and its text differs from the Model Rule."),
      upl: a("Tex. Gov't Code §§ 81.101, 81.102"),
      phv: a("Rules Governing Admission to the Bar of Texas, Rule XIX", "Participation by non-resident attorneys in Texas proceedings."),
      inHouse: a("Rules Governing Admission to the Bar of Texas (registration of in-house counsel)", "Texas has a registration path for in-house counsel; confirm the current rule and deadlines.")
    },
    FL: {
      rule: a("R. Regulating Fla. Bar 4-5.5"),
      phv: a("Fla. R. Gen. Prac. & Jud. Admin. 2.510; R. Regulating Fla. Bar 1-3.10", "Florida limits how many pro hac vice appearances an out-of-state lawyer may make."),
      inHouse: a("R. Regulating Fla. Bar ch. 17", "Authorized house counsel."),
      remote: a("Fla. Bar re Advisory Op. - Out-of-State Attorney Working Remotely from Florida Home, 318 So. 3d 538 (Fla. 2021)", "An out-of-state lawyer working remotely from a Florida home on matters of the lawyer's licensing jurisdiction, without a Florida public presence or holding out, is not engaged in unlicensed practice of Florida law.")
    },
    IL: {
      rule: a("Ill. R. Prof'l Conduct 5.5"),
      inHouse: a("Ill. S. Ct. R. 716", "Limited admission of house counsel."),
      phv: a("Ill. S. Ct. R. 707", "Out-of-state attorney appearances in Illinois proceedings.")
    },
    DC: {
      rule: a("D.C. R. Prof'l Conduct 5.5"),
      upl: a("D.C. Ct. App. R. 49", "D.C.'s unauthorized-practice rule, with its own list of exceptions (including limited in-house, federal, and pro hac vice practice)."),
      remote: a("D.C. Comm. on Unauthorized Practice of Law Op. 24-20 (2020)", "A lawyer not admitted in D.C. may work from a D.C. home on non-D.C. matters without violating Rule 49 if the lawyer does not hold out as D.C.-admitted, does not have a D.C. office, and the presence is not primarily for practicing law in D.C.")
    },
    NJ: {
      rule: a("N.J. R. Prof'l Conduct 5.5", "New Jersey's version has its own list of permitted multijurisdictional practice."),
      phv: a("N.J. Ct. R. 1:21-2"),
      inHouse: a("N.J. Ct. R. 1:27-2", "In-house counsel limited license."),
      remote: a("N.J. Comm. on the Unauthorized Practice of Law Op. 59 / Advisory Comm. on Prof'l Ethics Op. 742 (2021)", "Out-of-state lawyers may work remotely from New Jersey on non-New Jersey matters if they do not hold out or maintain a public New Jersey presence.")
    },
    PA: {
      rule: a("Pa. R. Prof'l Conduct 5.5"),
      phv: a("Pa. Bar Admission R. 301"),
      inHouse: a("Pa. Bar Admission R. 302", "Limited in-house corporate counsel license.")
    },
    MA: {
      rule: a("Mass. R. Prof. C. 5.5 (S.J.C. Rule 3:07)")
    },
    VA: {
      rule: a("Va. R. Prof'l Conduct 5.5"),
      phv: a("Va. Sup. Ct. R. 1A:4"),
      inHouse: a("Va. Sup. Ct. R. 1A:5", "Corporate counsel registration.")
    }
  };

  var api = { ABA: ABA, STATES: STATES };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else { root.MJP = root.MJP || {}; Object.assign(root.MJP, api); }
})(this);
