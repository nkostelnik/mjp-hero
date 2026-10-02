/*
 * MJP Hero: citation library.
 *
 * ABA entries paraphrase the ABA Model Rules of Professional Conduct and formal opinions.
 * State entries are the adopted-rule and court-rule citations for the ten covered states.
 * State entries record whether they were checked against a source (verified, checked,
 * url). The UI shows a "verify" tag on anything unchecked.
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
      text: "A lawyer may practice the law the lawyer's licensing jurisdiction authorizes (including temporary practice and other law permitted by Rule 5.5(c) and (d)) while physically in a jurisdiction where the lawyer is not licensed, if that jurisdiction has not determined otherwise and the lawyer is \"for all intents and purposes invisible as a lawyer\" there: no local address on websites, letterhead, business cards, or advertising; no holding out as locally admitted; and no legal services for matters subject to the local jurisdiction. The opinion suggests listing the licensing-jurisdiction address with a note such as \"by appointment only\" or \"for mail delivery.\"",
      url: "https://www.lawnext.com/wp-content/uploads/2021/09/aba-formal-opinion-495.pdf"
    },
    "Op 498": {
      cite: "ABA Formal Op. 498 (2021), Virtual Practice",
      text: "Virtual practice is permitted but does not relax Rule 5.5. Lawyers must keep up with technology risks (Rule 1.1), protect confidential information (Rule 1.6) with strong passwords, security updates, secure Wi-Fi, vetted vendors, secure storage of recordings, and smart speakers or assistants disabled during client work, and supervise lawyers and staff working remotely (Rules 5.1, 5.3). It suggests discussing technology use in the engagement letter.",
      url: "https://www.hklaw.com/en/insights/publications/2021/03/aba-offers-general-guidance-for-virtual-law-practices"
    },
    "Op 504": {
      cite: "ABA Formal Op. 504 (2023), Choice of Rule",
      text: "Explains Rule 8.5(b). Before a tribunal, the tribunal's rules apply. Otherwise, look to where the conduct's predominant effect is, considering the client's location, where the transaction occurs, which law governs, the lawyer's principal office and admission, where other parties are, and which jurisdiction has the greatest interest. Rule 8.5(b)'s safe harbor protects a lawyer who reasonably relies on one jurisdiction as the predominant-effect jurisdiction.",
      url: "https://lalegalethics.org/aba-issues-opinion-on-model-rule-8-5-choice-of-law/"
    },
    "Op 88-356": {
      cite: "ABA Formal Op. 88-356 (1988), Temporary Lawyers",
      text: "Lawyers placed with firms or clients through a placement agency raise conflict-of-interest, confidentiality, and fee-arrangement questions. Whether the lawyer is associated with the firm or client depends on a functional analysis of the relationship.",
      url: "https://www.americanbar.org/products/ecd/chapter/219921/"
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
   *   inHouse   in-house counsel registration (noRegistration: true if none is required;
   *             noInHouseException: true if the state has no in-house exception at all)
   *   phv       pro hac vice admission
   *   adr       out-of-state counsel in arbitration
   *   remote    guidance on remote work from within the state for out-of-state matters
   *             (level: "caution" when the guidance is narrower than ABA Op. 495)
   *   residency requirements on licensed lawyers who live elsewhere
   *   away     the state's own guidance that its licensed lawyers may practice its law from elsewhere
   *   virtualInHouse  authority requiring a local license for in-house lawyers who serve a company
   *            in this state remotely from another state
   *   clientNotice    true if the state requires telling clients the lawyer is not licensed there
   *   remoteNone      date of a search that found no remote-work rule or opinion for the state
   *   temp      { harbors: allowed 5.5(c) safe harbors (c1..c4), clientBased: (c)(3)/(c)(4) require a client
   *             of the lawyer's admitted jurisdiction }
   *   remote.localClientsOk  true if the state's remote rule allows local clients on non-local law
   *   remoteNote      related development (pending rule, informal opinion) shown with remoteNone
   *
   * remote.level: "ok" (default), "caution" (narrower than Op. 495), or "risk" (state says remote
   * practice from the state is unauthorized).
   *   notes     extra warnings (strings)
   *
   * v(...) marks a citation confirmed against the source URL on the date in CHECKED.
   * u(...) marks one not yet confirmed; the UI shows a "verify" tag on these.
   */
  var CHECKED = "2026-09-26";
  // Mass. Board of Bar Overseers survey of remote-practice rules in New England states (updated Mar. 2024).
  var MASS_BBO = "https://bbopublic.massbbo.org/web/f/(UpdatedMarch%202024)%20What%20you%20should%20know%20about%20Cross%20Border%20Remote%20Practice.pdf";
  function v(cite, text, source, extra) {
    return Object.assign({ cite: cite, text: text || "", verified: true, checked: CHECKED, url: source || "" }, extra || {});
  }
  function w(cite, text, source, extra) { return v(cite, text, source, Object.assign({ checked: "2026-10-01" }, extra || {})); }
  var NONE_FOUND = "2026-10-01"; // date of the search that found no remote-work rule or opinion
  function br(slug, page) { return "https://barreciprocity.com/" + slug + "-" + page + "/"; }
  // Citations whose only source is BarReciprocity.com are flagged secondary in the UI.
  function isSecondary(c) { return c && typeof c.url === "string" && c.url.indexOf("barreciprocity.com") >= 0; }
  function u(cite, text, extra) { return Object.assign({ cite: cite, text: text || "", verified: false }, extra || {}); }

  var STATES = {
    CA: {
      rule: u("Cal. R. Prof. Conduct 5.5", "California's version differs from the Model Rule; its exceptions for out-of-state lawyers are in the California Rules of Court."),
      upl: w("Cal. Bus. & Prof. Code §§ 6125, 6126", "Practicing law in California without active State Bar membership, or holding out as entitled to, is a misdemeanor and can bar recovery of fees.", "https://www.sfbar.org/wp-content/uploads/2021/08/BASF-Ethics-Opinion-re-UPLMJP-8.2.21-Final-002.pdf"),
      temp: v("Cal. Rules of Court 9.47, 9.48", "Out-of-state lawyers may provide temporary litigation-related (9.47) or non-litigation (9.48) services only under the conditions those rules set; under 9.48 a material aspect of the matter must take place outside California in a jurisdiction where the lawyer is licensed. These rules are not available to lawyers who live in California.", "https://courts.ca.gov/cms/rules/index/nine"),
      inHouse: v("Cal. Rules of Court 9.46", "Registered in-house counsel. The employer must have a California office and meet other qualifying-institution requirements.", "https://www.courts.ca.gov/cms/rules/index/nine/rule9_46"),
      phv: w("Cal. Rules of Court 9.40", "Pro hac vice admission in California state courts. Lawyers who live in California are not eligible.", "https://www.sfbar.org/wp-content/uploads/2021/08/BASF-Ethics-Opinion-re-UPLMJP-8.2.21-Final-002.pdf"),
      remote: w("Bar Ass'n of S.F. Ethics Op. 2021-1", "A San Francisco bar opinion concludes that a lawyer licensed elsewhere does not violate California law by working remotely from California, if the lawyer does not hold out as a California lawyer, establish a California office, or represent California persons or entities. It is a local bar opinion, not binding on the State Bar or courts.", "https://www.sfbar.org/wp-content/uploads/2021/08/BASF-Ethics-Opinion-re-UPLMJP-8.2.21-Final-002.pdf", { level: "caution" }),
      adr: v("Cal. Rules of Court 9.43", "Out-of-state attorney arbitration counsel must meet the rule's conditions to appear in a California arbitration.", "https://courts.ca.gov/cms/rules/index/nine/rule9_43"),
      notes: [
        "Birbrower, Montalbano, Condon & Frank v. Superior Court, 17 Cal. 4th 119 (1998): advising a California client on California matters can be practice \"in California\" even without being physically present.",
        "Cal. State Bar Formal Op. 2023-208: this remote-work opinion addresses California lawyers' duties and does not approve remote practice from California by lawyers licensed only elsewhere. California has no statewide rule or State Bar opinion equivalent to ABA Op. 495."
      ]
    },
    NY: {
      rule: u("N.Y. Rules of Prof. Conduct 5.5"),
      upl: u("N.Y. Judiciary Law §§ 476-a, 478"),
      temp: v("22 NYCRR Part 523", "Temporary practice in New York by out-of-state and foreign lawyers, with four safe harbors. Lawyers registered under Part 522 may not also use Part 523.", "https://www.nycourts.gov/ctapps/523rules.htm"),
      inHouse: v("22 NYCRR Part 522", "Registered in-house counsel. Registrants may not appear before a tribunal without pro hac vice admission.", "https://www.nycourts.gov/ctapps/522rules11.htm"),
      phv: v("22 NYCRR § 520.11", "Pro hac vice admission requires association with a New York lawyer who is attorney of record.", "https://www.law.cornell.edu/regulations/new-york/22-NYCRR-520.11"),
      remote: v("22 NYCRR § 523.5 (Working From Home)", "Lawyers not admitted in New York may practice remotely from a New York location subject to the rule's conditions, including a broad ban on holding out and a duty to correct anyone who mistakenly believes the lawyer is admitted in New York.", "https://www.nycourts.gov/ctapps/523rules.htm"),
      residency: v("N.Y. Judiciary Law § 470; Schoenefeld v. State of New York, 25 N.Y.3d 22 (2015)", "A New York-admitted lawyer who lives outside New York must maintain a physical office in New York (not just a mailing address or virtual office) to practice in New York.", "https://www.nycourts.gov/REPORTER/3dseries/2015/2015_02674.htm")
    },
    TX: {
      temp: w("Tex. Disciplinary R. Prof'l Conduct 5.05 (as amended eff. Oct. 1, 2024)", "Texas Rule 5.05 has no counterpart to the Model Rule's 5.5(c) temporary-practice safe harbors. Out-of-state lawyers rely on pro hac vice (Rule XIX), the in-house provision (5.05(c)), the remote-practice provision (5.05(d)), or Texas co-counsel; whether other temporary work is allowed depends on Texas unauthorized-practice law.", "https://www.txcourts.gov/media/1459056/249054.pdf", {"official":true,"harbors":[]}),
      rule: v("Tex. Disciplinary R. Prof'l Conduct 5.05 (amended eff. Oct. 1, 2024)", "Texas numbers its rule 5.05. The 2024 amendments added express in-house (5.05(c)) and remote-practice (5.05(d)) provisions.", "https://www.legalethicstexas.com/resources/rules/texas-disciplinary-rules-of-professional-conduct/unauthorized-practice-of-law/"),
      upl: u("Tex. Gov't Code §§ 81.101, 81.102"),
      phv: v("Rules Governing Admission to the Bar of Texas, Rule XIX; Tex. Gov't Code § 82.0361", "Participation by nonresident attorneys in a particular Texas case, on motion with a Texas attorney and a per-cause fee.", "https://ble.texas.gov/non-resident-attorney-fee-info"),
      inHouse: v("Tex. Disciplinary R. Prof'l Conduct 5.05(c)", "Lawyers licensed elsewhere may serve their employer or its affiliates in Texas. Texas does not require in-house counsel to register.", "https://www.texasbarpractice.com/law-practice-management/non-texas-lawyers/faqs-for-in-house-counsel-not-licensed-in-texas/", { noRegistration: true }),
      remote: w("Tex. Disciplinary R. Prof'l Conduct 5.05(d)", "Lawyers authorized elsewhere may practice from a temporary or permanent location in Texas if they do not hold out as authorized in Texas or as having a Texas office (in advertising, letterhead, websites, signage, cards, or email signatures), do not solicit or accept Texas residents as clients on matters they know primarily require Texas state or local law, and correct anyone who mistakenly believes they are authorized in Texas.", "https://www.txcourts.gov/media/1459056/249054.pdf", {"official":true,"localClientsOk":true})
    },
    FL: {
      adr: w("R. Regulating Fla. Bar 1-3.11 (per ABA MJP implementation chart, 2016)", "An out-of-state lawyer in a Florida domestic arbitration must file a statement with The Florida Bar and pay a $250 fee, and is limited to three domestic arbitrations in 365 days. International arbitrations are exempt.", "https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/recommendations.authcheckdam.pdf", {"official":true}),
      rule: v("R. Regulating Fla. Bar 4-5.5", "A 2022 comment amendment codified the remote-work advisory opinion.", "https://caselaw.findlaw.com/court/fl-supreme-court/2163013.html"),
      phv: v("R. Regulating Fla. Bar 1-3.10; Fla. R. Gen. Prac. & Jud. Admin. 2.510", "More than 3 pro hac vice appearances in separate cases within 365 days is presumed to be a general practice, which bars further appearances. A Florida Bar member must be associated as attorney of record.", "https://www.floridabar.org/rules/upl/upl002/"),
      inHouse: v("R. Regulating Fla. Bar ch. 17", "Authorized house counsel: lawyers licensed elsewhere working exclusively for a Florida business organization must be certified.", "https://www.floridabar.org/rules/upl/upl004/"),
      remote: v("Fla. Bar re Advisory Op. - Out-of-State Attorney Working Remotely from Florida Home, 318 So. 3d 538 (Fla. 2021)", "A lawyer licensed elsewhere who works remotely from Florida, even for an extended period, does not have a regular Florida presence if the lawyer works exclusively on non-Florida matters and neither the lawyer nor the firm holds out a Florida presence.", "https://law.justia.com/cases/florida/supreme-court/2021/sc20-1220.html")
    },
    IL: {
      rule: v("Ill. R. Prof'l Conduct 5.5", "", "https://www.isba.org/ethics/irpc/rule55"),
      remoteNone: NONE_FOUND,
      away: v("ISBA Advisory Op. 22-03 (2022)", "Illinois-licensed lawyers may practice Illinois law remotely from a jurisdiction where they are not licensed, if that jurisdiction does not prohibit it.", "https://www.isba.org/sites/default/files/ethicsopinions/Advisory%20Opinion%2022-03.pdf"),
      inHouse: w("Ill. S. Ct. R. 716 (amended eff. Jan. 1, 2026)", "Limited license for house counsel employed exclusively by a single entity and its affiliates. Since January 1, 2026, apply within 90 days of starting employment.", "https://ilcourtsaudio.blob.core.windows.net/antilles-resources/resources/2a4468d8-887c-4967-b57a-39d28db1eac8/060625.pdf", {"deadline":"90 days","official":true}),
      phv: v("Ill. S. Ct. R. 707", "An out-of-state attorney may appear in a particular Illinois proceeding after an Illinois attorney files an appearance and a verified statement is filed with the ARDC.", "https://registration.iardc.org/attyreg/Registration/regdept/popup_rule707overview.aspx")
    },
    DC: {
      inHouse: w("D.C. Ct. App. R. 49(c)(6)", "Lawyers not admitted in D.C. may serve their employer and its affiliates if the employer understands they are not D.C. Bar members. This does not cover appearing in any court or federal or D.C. agency.", "https://admissions.dcappeals.gov/getpdfform.action?id=900", { noRegistration: true }),
      phv: w("D.C. Ct. App. R. 49(c)(7)", "No more than five pro hac vice applications per calendar year, except for exceptional cause.", "https://admissions.dcappeals.gov/getpdfform.action?id=900"),
      rule: u("D.C. R. Prof'l Conduct 5.5"),
      upl: v("D.C. Ct. App. R. 49", "D.C.'s unauthorized-practice rule, with its own list of exceptions in Rule 49(c).", "https://www.dccourts.gov/sites/default/files/matters-docs/rule49.pdf"),
      remote: v("D.C. Ct. App. R. 49(c)(13); D.C. Comm. on Unauthorized Practice of Law Op. 24-20 (2020)", "Rule 49(c)(13) covers a lawyer who occasionally practices from a D.C. residence, but only if the lawyer maintains a law office in a jurisdiction where admitted, does not use a D.C. address or hold out as authorized in D.C., and does not regularly meet clients in D.C. Op. 24-20 applied this during the COVID-19 pandemic. Full-time remote work from D.C. is not clearly covered.", "https://www.dccourts.gov/sites/default/files/2020-03/CUPL-Opinion-24-20.pdf", { level: "caution" })
    },
    NJ: {
      temp: w("N.J. RPC 5.5(b) (per ABA MJP implementation chart, 2016)", "New Jersey requires most non-litigation work to arise directly out of representing an existing client in the lawyer's admitted jurisdiction, to be occasional, and to be done only when disengaging would cause substantial inefficiency, impracticality, or detriment to the client. Occasional practice with a designated New Jersey lawyer is also allowed.", "https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/recommendations.authcheckdam.pdf", {"official":true,"clientBased":true}),
      rule: v("N.J. R. Prof'l Conduct 5.5", "New Jersey lists its own permitted multijurisdictional practice in RPC 5.5(b). Occasional practice under 5.5(b)(3)(iv) requires associating a New Jersey lawyer who is designated and disclosed to all parties.", "https://www.njcourts.gov/sites/default/files/notices/2022/12/n221223a.pdf"),
      phv: v("N.J. Ct. R. 1:21-2", "Pro hac vice at the court's discretion; administratively ineligible attorneys may not appear.", "https://www.njcourts.gov/attorneys/mcl/prohacvice"),
      inHouse: v("N.J. Ct. R. 1:27-2", "Mandatory limited license for in-house counsel not admitted in New Jersey who work in New Jersey.", "https://www.njbarexams.org/ihc"),
      remote: v("N.J. Comm. on the Unauthorized Practice of Law Op. 59 / Advisory Comm. on Prof'l Ethics Op. 742 (2021)", "Lawyers not admitted in New Jersey may work remotely from a New Jersey home for out-of-state firms or employers if they have no outward manifestation of a New Jersey presence, such as a New Jersey office, advertising a New Jersey location, or receiving mail there.", "https://www.njcourts.gov/sites/default/files/notices/2021/10/n211007c.pdf")
    },
    PA: {
      remoteNote: w("Pa. Bar Ass'n informal ethics opinion", "The Pennsylvania Bar Association has advised, in an informal opinion, that a lawyer admitted elsewhere who moves to Pennsylvania and works remotely without practicing Pennsylvania law may do so under the ABA Op. 495 approach. Informal opinions are not formal published guidance.", "https://www.lawnext.com/2021/03/the-ethics-of-working-from-outside-your-state-pa-bars-adopt-aba-rule.html"),
      rule: u("Pa. R. Prof'l Conduct 5.5"),
      remoteNone: NONE_FOUND,
      away: v("Pa. Bar Ass'n & Phila. Bar Ass'n Joint Formal Op. 2021-100", "Pennsylvania-licensed lawyers may practice Pennsylvania law remotely from another jurisdiction if they take appropriate steps, including not holding out a local office, and the other jurisdiction does not prohibit it.", "https://www.lawnext.com/2021/03/the-ethics-of-working-from-outside-your-state-pa-bars-adopt-aba-rule.html"),
      phv: v("Pa. Bar Admission R. 301", "Pro hac vice requires a Pennsylvania attorney who agrees to act as attorney of record.", "https://www.pabarexam.org/bar_admission_rules/301.htm"),
      inHouse: v("Pa. Bar Admission R. 302", "Limited In-House Corporate Counsel License required for in-house lawyers working in Pennsylvania on more than a temporary basis or with an office or systematic presence there.", "https://www.pabarexam.org/bar_admission_rules/302.htm")
    },
    MA: {
      phv: w("Mass. Gen. Laws ch. 221, § 46A", "A Massachusetts lawyer must file the motion; the home state must grant reciprocal privileges. Trial-court admission does not extend to appellate courts.", "https://www.mass.gov/info-details/pro-hac-vice-procedures", {"official":true}),
      rule: v("Mass. R. Prof. C. 5.5 (S.J.C. Rule 3:07)", "", "https://bbopublic.massbbo.org/web/f/(UpdatedMarch%202024)%20What%20you%20should%20know%20about%20Cross%20Border%20Remote%20Practice.pdf"),
      inHouse: v("S.J.C. Rule 4:02(9)", "In-house lawyers not admitted in Massachusetts must register with the Board of Bar Overseers if their principal office is in Massachusetts or they otherwise have a systematic and continuous presence there.", "https://www.massbbo.org/s/attorney-registration"),
      remote: v("Mass. R. Prof. C. 5.5, cmt. [4A] (eff. Apr. 1, 2024)", "Lawyers not admitted in Massachusetts may remotely practice the law of their licensing jurisdictions while physically in Massachusetts if they do not hold out as admitted there, do not advertise a Massachusetts office, and do not provide or offer legal services in Massachusetts.", "https://bbopublic.massbbo.org/web/f/(UpdatedMarch%202024)%20What%20you%20should%20know%20about%20Cross%20Border%20Remote%20Practice.pdf")
    },
    VA: {
      rule: v("Va. R. Prof'l Conduct 5.5", "", "https://www.vsb.org/pro-guidelines/index.php/rules/law-firms-and-associations/rule5-5/"),
      phv: v("Va. Sup. Ct. R. 1A:4", "Out-of-state lawyers may apply to appear pro hac vice in a particular case before a Virginia court, board, or agency.", "https://www.vacourts.gov/static/courts/scv/forms/pro_hac_vice_rule_inst.pdf"),
      inHouse: v("Va. Sup. Ct. R. 1A:5", "Corporate counsel must be a Virginia State Bar member, hold a Corporate Counsel Certificate, or register under Part II of the rule.", "https://barexam.virginia.gov/vcc-rule1A-5"),
      remote: v("Va. Legal Ethics Op. 1896 (2021)", "A lawyer not licensed in Virginia may work from Virginia, even continuously, if the practice is limited to federal law or the law of the lawyer's licensing jurisdiction, with disclosure of the lack of a Virginia license where needed.", "https://www.vacourts.gov/static/courts/scv/amendments/leo_1896.pdf")
    },
    // Jurisdictions below have remote-work guidance only; the rest of their rules fall back to the ABA baseline.
    MO: {
      rule: w("Mo. Sup. Ct. R. 4-5.5", "Missouri's rule generally tracks the Model Rule, but Missouri reads \"systematic and continuous presence\" broadly (see its remote-work opinions).", "http://www.courts.mo.gov/page.jsp?id=707", {"official":true}),
      phv: w("Mo. Sup. Ct. R. 9.03", "Out-of-state lawyers must associate with Missouri counsel who enters an appearance; a fee applies for each case and tribunal.", br("missouri", "pro-hac-vice")),
      inHouse: w("Mo. S. Ct. R. 8.105", "Limited license for lawyers not admitted in Missouri who serve their employer or its affiliates.", "https://www.mble.org/appinfo.action?id=4", {"official":true}),
      remote: w("Mo. Informal Advisory Op. 2024-03 (2024)", "A lawyer licensed elsewhere who lives in Missouri and works from a Missouri home office for an out-of-state firm is establishing a systematic and continuous presence and must seek Missouri admission.", "https://mo-legal-ethics.org/informal-opinion/2024-03/", { level: "risk" }),
      virtualInHouse: w("Mo. Informal Advisory Op. 2024-02 (2024)", "A lawyer licensed elsewhere who works virtually from another state for a corporation located in Missouri must seek Missouri admission (for example, a Rule 8.105 limited license), because presence can be systematic and continuous without being physically in Missouri.", "https://mo-legal-ethics.org/informal-opinion/2024-02/")
    },
    CO: {
      rule: w("Colo. RPC 5.5", "Colorado handles out-of-state lawyers through Rule 5.5 and C.R.C.P. 204 to 205.6.", "http://www.cobar.org/rulesofprofessionalconduct", {"official":true}),
      inHouse: w("C.R.C.P. 204.1 (single-client counsel)", "Single-client certification for lawyers who declare Colorado domicile, limited to one client and its affiliates; certification comes before practice.", "https://www.coloradolegalregulation.com/wp-content/uploads/PDF/BLE/Limited%20Licensing/Rule%20204.1%20Single%20Client-Online%20Checklist.pdf", {"official":true}),
      phv: w("C.R.C.P. 205.3", "A verified motion to the trial court; association with Colorado counsel.", "https://www.coloradolegalregulation.com/wp-content/uploads/PDF/BLE/Limited%20Licensing/Rules%20205.3%20and%20205.4%20Pro%20Hac%20Application.pdf", {"official":true}),
      remote: w("Colo. RPC 5.5, cmt. [1] (amended Feb. 2024); C.R.C.P. 205.1", "Lawyers physically in Colorado who provide services under another jurisdiction's authority do not violate Rule 5.5 if they do not solicit or accept clients in Colorado for services performed in Colorado and do not hold out as authorized in Colorado. Colorado regulators caution that working for a Colorado law firm with a Colorado office likely requires a Colorado license unless the practice is exclusively federal or tribal law.", "https://cl.cobar.org/departments/practicing-from-a-remote-jurisdiction/")
    },
    OH: {
      rule: w("Ohio Prof. Cond. R. 5.5", "Ohio's rule generally tracks the Model Rule, plus its 2021 remote-practice provision in 5.5(d)(4).", "https://www.supremecourt.ohio.gov/docs/LegalResources/Rules/ProfConduct/profConductRules.pdf", {"official":true}),
      inHouse: w("Ohio Gov. Bar R. VI, § 3", "Out-of-state in-house lawyers employed in Ohio must register with the Supreme Court and renew every two years.", "https://www.supremecourt.ohio.gov/attorneys/attorney-registration/atty-registration-faqs/", {"official":true}),
      phv: w("Ohio Gov. Bar R. XII", "Ohio counsel must associate. No more than three proceedings a year, and lawyers who live or keep an office in Ohio generally are ineligible.", "https://www.supremecourt.ohio.gov/attorneys/pro-hac-vice-registration/", {"official":true}),
      remote: w("Ohio Prof. Cond. R. 5.5(d)(4) (eff. Sept. 1, 2021)", "Lawyers admitted elsewhere may practice their licensing jurisdiction's law remotely from Ohio if they do not solicit Ohio clients, appear in Ohio courts, or hold out as Ohio-admitted. If any Ohio location appears on letterhead, cards, websites, advertising, fee agreements, or signage, they must affirmatively state they are not admitted in Ohio.", "https://www.oblic.com/resources/oblic-news/09/07/2021/rule-5-5-amendments-allow-remote-practice/")
    },
    NC: {
      temp: w("N.C. RPC 5.5(c) (per ABA MJP implementation chart, 2016)", "North Carolina does not use the word \"temporary\" but requires the work to arise out of or relate to representing a client in a jurisdiction where the lawyer is admitted.", "https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/recommendations.authcheckdam.pdf", {"official":true,"clientBased":true}),
      rule: w("N.C. RPC 5.5", "North Carolina's rule generally tracks the Model Rule.", "https://www.ncbar.gov/for-lawyers/ethics/rules-of-professional-conduct/rule-55-unauthorized-practice-of-law/", {"official":true}),
      inHouse: w("N.C. RPC 5.5(d)(1)", "Lawyers admitted elsewhere may serve their employer or its affiliates under the in-house safe harbor without a separate registration. Court appearances still need pro hac vice. Public communications must disclose where the lawyer is licensed.", "https://www.ncbar.gov/for-lawyers/ethics/rules-of-professional-conduct/rule-55-unauthorized-practice-of-law/", {"noRegistration":true,"official":true}),
      phv: w("N.C. Gen. Stat. § 84-4.1", "The out-of-state lawyer must associate with a North Carolina-resident lawyer who appears. The home state must grant reciprocal privileges, and full disciplinary history must be disclosed.", br("north-carolina", "pro-hac-vice")),
      remote: w("N.C. RPC 5.5; N.C. State Bar, \"Home is Where the Heart Is\" (2021)", "Lawyers licensed elsewhere may work remotely from North Carolina for their own jurisdiction's clients if they do not suggest they are licensed in North Carolina and protect client confidentiality.", "https://www.ncbar.gov/for-lawyers/ethics/ethics-articles/home-is-where-the-heart-is/")
    },
    MN: {
      rule: w("Minn. RPC 5.5", "Minnesota's rule includes a 5.5(d) provision for federal, tribal, and licensed-state law practice from Minnesota.", "https://www.revisor.mn.gov/court_rules/pr/subtype/cond/id/5.5/"),
      inHouse: w("Minn. R. Admission to the Bar 9 (temporary), 10 (permanent)", "A limited in-house license is required, generally with 36 months of practice in the last 60. It ends when the employment ends.", "https://www.revisor.mn.gov/court_rules/pr/subtype/admi/id/10/", {"official":true}),
      phv: w("Minn. Gen. R. Prac. 5; Minn. R. Civ. App. P. 143.05", "Minnesota counsel must associate, sign pleadings, and attend hearings unless the court excuses it.", "https://www.revisor.mn.gov/court_rules/gp/id/5", {"official":true}),
      remote: w("Minn. RPC 5.5(d)", "Lawyers admitted elsewhere may provide services in Minnesota that exclusively involve federal law, tribal law, or the law of a jurisdiction where they are licensed, but must advise each client that they are not licensed in Minnesota.", "https://www.revisor.mn.gov/court_rules/pr/subtype/cond/id/5.5/"),
      clientNotice: true
    },
    AZ: {
      rule: w("Ariz. R. Sup. Ct. 42, ER 5.5", "", "https://www.azbar.org/for-lawyers/ethics/rules-of-professional-conduct/", {"official":true}),
      inHouse: w("Ariz. R. Sup. Ct. 38(a)", "In-house lawyers must obtain a Certificate of Registration of In-House Counsel within 90 days of starting work for an Arizona employer.", "https://azbar.org/licensing-compliance/admissions-membership/in-house-counsel", {"deadline":"90 days","official":true}),
      phv: w("Ariz. R. Sup. Ct. 39 (pro hac vice)", "Arizona counsel must associate. Lawyers who live, are regularly employed, or regularly do substantial business in Arizona are ineligible, and repeated appearances may be denied. Admission lasts one year.", "https://www.azcourts.gov/clerkofcourt/ProHacVice.aspx", {"official":true}),
      remote: u("Ariz. ER 5.5(d)", "Lawyers admitted elsewhere may provide services in Arizona that exclusively involve federal law, another jurisdiction's law, or tribal law, but must advise clients they are not admitted in Arizona and obtain informed consent."),
      clientNotice: true
    },
    CT: {
      temp: w("Conn. RPC 5.5 (per ABA MJP implementation chart, 2016)", "Connecticut requires temporary-practice lawyers to register, notify Statewide Bar Counsel, and pay a fee, applies reciprocity, and limits (c)(4) to services substantially related to an existing client.", "https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/recommendations.authcheckdam.pdf", {"official":true,"clientBased":true}),
      rule: w("Conn. RPC 5.5", "Connecticut's rule includes a 2023 remote-practice provision in 5.5(f).", "https://www.jud.ct.gov/lawjournal/Docs/Misc/2022/29/pblj_8402.pdf"),
      inHouse: w("Conn. Practice Book § 2-15A", "Authorized house counsel must register annually with the Statewide Grievance Committee and work only for an employer that does not practice law for others.", "https://ctbaradmissions.jud.ct.gov/appinfo.action?id=201", {"official":true}),
      phv: w("Conn. Practice Book § 2-16", "Pro hac vice requires association with Connecticut counsel.", "https://www.jud.ct.gov/sgc/faq_prohacvice.htm", {"official":true}),
      remote: w("Conn. RPC 5.5(f); Conn. Practice Book § 2-44A(c) (eff. Jan. 1, 2023)", "Remote practice from Connecticut that is authorized by a jurisdiction where the lawyer is admitted is not the practice of law in Connecticut. It does not allow holding out as authorized in Connecticut or serving Connecticut clients.", "https://www.jud.ct.gov/lawjournal/Docs/Misc/2022/29/pblj_8402.pdf")
    },
    NH: {
      rule: w("N.H. RPC 5.5", "New Hampshire's rule is more permissive than the Model Rule for lawyers who practice only the law of their licensing state.", "https://www.nhbar.org/working-remotely-under-nh-rule-5-5/"),
      inHouse: w("N.H. RPC 5.5(d)(1)", "Lawyers admitted elsewhere may serve their employer or its affiliates under the in-house safe harbor without a separate registration. Court appearances still need pro hac vice.", "http://www.courts.state.nh.us/rules/pcon/index.htm", {"noRegistration":true,"official":true}),
      phv: w("N.H. Sup. Ct. R. 33", "New Hampshire counsel must associate, remain lawyer of record, and attend oral argument.", "https://www.courts.nh.gov/rules-supreme-court-state-new-hampshire/rule-33-nonmember-new-hampshire-bar", {"official":true}),
      remote: w("N.H. RPC 5.5(d) & Ethics Committee cmt. 3", "Lawyers licensed elsewhere who do not practice New Hampshire law need not obtain a New Hampshire license merely because they are physically in New Hampshire, if they do not hold out as admitted there.", "https://www.nhbar.org/working-remotely-under-nh-rule-5-5/")
    },
    VT: {
      rule: w("Vt. RPC 5.5", "", "https://www.lexisnexis.com/hottopics/vtstatutesconstctrules/", {"official":true}),
      inHouse: w("Vt. RPC 5.5(d)(1)", "Lawyers admitted elsewhere may serve their employer or its affiliates under the in-house safe harbor without a separate registration. Court appearances still need pro hac vice.", "https://www.lexisnexis.com/hottopics/vtstatutesconstctrules/", {"noRegistration":true,"official":true}),
      phv: w("Vt. R. Admission to the Bar (pro hac vice)", "A pro hac vice license covers a single case; the lawyer must stay associated with a Vermont lawyer who signs all filings.", "https://www.vermontjudiciary.org/rulesofadmission", {"official":true}),
      remote: w("Vt. RPC 5.5, cmt. [22]", "Vermont added a comment expressly adopting ABA Op. 495 for remote practice from Vermont.", MASS_BBO)
    },
    RI: {
      rule: w("R.I. Sup. Ct. R. Art. V, RPC 5.5", "", "https://www.courts.ri.gov/PublicResources/disciplinaryboard/PDF/Article5.pdf", {"official":true}),
      inHouse: w("R.I. Sup. Ct. R. Art. II, R. 9(b)", "In-house counsel employed at a Rhode Island office must register; lawyers who failed the Rhode Island bar exam are ineligible.", "https://www.courts.ri.gov/attorney-resources/Pages/Nonresident-attorneys-(Article-II,-Rule-9).aspx", {"official":true}),
      phv: w("R.I. Sup. Ct. R. Art. II, R. 9(a)", "Limited to three cases in a five-year period; a Rhode Island lawyer with a Rhode Island office must sign all filings.", "https://www.courts.ri.gov/attorney-resources/Pages/Nonresident-attorneys-(Article-II,-Rule-9).aspx", {"official":true}),
      remote: w("R.I. RPC 5.5, cmt. [4]", "Lawyers not licensed in Rhode Island may work from a Rhode Island home under conditions, but may not hold in-person meetings in Rhode Island with clients or third parties unless another exception applies.", MASS_BBO)
    },
    ME: {
      temp: w("Me. RPC 5.5(c) (per ABA MJP implementation chart, 2016)", "Maine limits all temporary practice to services that arise out of or relate to representing an existing client.", "https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/recommendations.authcheckdam.pdf", {"official":true,"clientBased":true}),
      rule: w("Me. RPC 5.5", "", "http://www.mebaroverseers.org/regulation/maine_conduct_rules.html", {"official":true}),
      inHouse: w("Me. RPC 5.5(d)(1)", "Lawyers admitted elsewhere may serve their employer or its affiliates under the in-house safe harbor without a separate registration. Court appearances still need pro hac vice.", "http://www.mebaroverseers.org/regulation/maine_conduct_rules.html", {"noRegistration":true,"official":true}),
      phv: w("Me. Rev. Stat. tit. 4, § 802; Me. R. Civ. P. 89(b)", "A Maine Bar member must move the admission and stay actively associated throughout.", "https://www.mebaroverseers.org/attorney_services/registration/pro_hac_vice_admission.html", {"official":true}),
      remote: w("Me. Prof. Ethics Comm'n Op. 189 (2005)", "A lawyer who lives in Maine and works from home for an out-of-state firm and out-of-state clients, without a Maine office or holding out, is not engaged in unauthorized practice.", MASS_BBO)
    },
    UT: {
      rule: w("Utah Sup. Ct. R. Prof. Practice 3-5.5", "Utah renumbered its rules of professional conduct; Rule 3-5.5 includes an express remote-practice provision.", "https://legacy.utcourts.gov/rules/view.php?type=scrp&rule=3-5.5", {"official":true}),
      inHouse: w("Utah State Bar R. 14-719", "An in-house counsel license is required once the lawyer has a systematic and continuous Utah presence, such as Utah residence or a qualifying Utah employer.", "https://legacy.utcourts.gov/rules/view.php?type=ucja&rule=14-719", {"official":true}),
      phv: w("Utah Sup. Ct. R. 14-806", "Admission is discretionary. A non-Utah lawyer who lives in Utah needs a Practice Pending Admission Certificate first.", "https://legacy.utcourts.gov/rules/view.php?type=ucja&rule=14-806", {"official":true}),
      remote: w("Utah Sup. Ct. R. Prof. Practice 3-5.5(b)(3) (eff. May 1, 2022); Utah Ethics Advisory Op. 19-03 (2019)", "A lawyer not admitted in Utah may, while physically in Utah, provide legal services remotely to clients in a jurisdiction where the lawyer is admitted, if the lawyer does not establish a public-facing office in Utah or hold out as admitted in Utah.", "https://legacy.utcourts.gov/rules/view.php?type=scrp&rule=3-5.5", {"official":true}),
    },
    SC: {
      temp: w("S.C. RPC 5.5(c) (per ABA MJP implementation chart, 2016)", "South Carolina's (c)(4) covers only services related to representing an existing client. For arbitration or mediation under (c)(3), the lawyer must file a verified statement with the Office of Bar Admissions and a $250 fee, and may file no more than three such statements in 365 days.", "https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/recommendations.authcheckdam.pdf", {"official":true,"clientBased":true}),
      rule: w("S.C. App. Ct. R. 407, RPC 5.5", "", "https://www.sccourts.org/opinions-orders/court-orders/order-detail/?order=2023-03-15-02"),
      inHouse: w("S.C. App. Ct. R. 405", "In-house lawyers need a limited certificate of admission, work only for the South Carolina employer, and are subject to South Carolina CLE.", "https://www.sccourts.org/resources/judicial-community/court-rules/appellate/rule-405/", {"official":true}),
      phv: w("S.C. App. Ct. R. 404", "More than six pro hac vice applications in a calendar year is treated as regularly practicing in South Carolina.", "https://www.sccourts.org/resources/judicial-community/court-rules/appellate/rule-404/", {"official":true}),
      remote: w("S.C. RPC 5.5, cmt. [4] (amended Mar. 15, 2023)", "Remote work in South Carolina does not establish an office or systematic presence if the lawyer's services are limited to those authorized by a jurisdiction where the lawyer is admitted and the lawyer does not state, imply, or hold out that the lawyer is a South Carolina lawyer.", "https://www.sccourts.org/opinions-orders/court-orders/order-detail/?order=2023-03-15-02")
    },
    HI: {
      temp: w("Haw. RPC 5.5 (no temporary-practice safe harbors)", "Hawaii has not adopted the Model Rule's 5.5(c) temporary-practice safe harbors. Out-of-state lawyers generally need pro hac vice admission or Hawaii admission to work on Hawaii matters.", "https://www.acc.com/sites/default/files/resources/upload/ACC%20Guide%20to%20MJP.pdf", {"official":true,"harbors":[]}),
      rule: w("Haw. RPC 5.5", "Hawaii has not adopted the Model Rule's 5.5(d) in-house safe harbor.", "https://www.courts.state.hi.us/wp-content/uploads/2022/03/2022_hrpc5.5am_ada.pdf"),
      inHouse: w("Haw. RPC 5.5 (no in-house exception)", "Hawaii has no house-counsel registration and no Model Rule 5.5(d) safe harbor. A lawyer serving a Hawaii employer needs Hawaii admission or other authorization.", "https://reports.ncbex.org/charts/chart-16/", {"noInHouseException":true,"official":true}),
      phv: w("Haw. Sup. Ct. R. 1.9", "Lawyers who live in Hawaii are ineligible. A Hawaii Bar member must associate, and the Disciplinary Board fee must be paid within 10 days and yearly.", "https://www.courts.state.hi.us/wp-content/uploads/2024/04/2024_rsch1.9_1.9Aam_ada.pdf", {"official":true}),
      remote: w("Haw. RPC 5.5, cmt. [3] (eff. July 1, 2022)", "Lawyers licensed elsewhere may remotely practice that jurisdiction's law while in Hawaii if they do not hold out as licensed in Hawaii, advertise a Hawaii office, provide or offer Hawaii legal services, or do anything connected to practice in Hawaii beyond being physically present.", "https://www.courts.state.hi.us/wp-content/uploads/2022/03/2022_hrpc5.5am_ada.pdf"),
      away: w("Haw. RPC 5.5, cmt. [3]", "Hawaii-licensed lawyers may practice remotely from outside Hawaii if the jurisdiction where they are physically present does not prohibit it.", "https://www.courts.state.hi.us/wp-content/uploads/2022/03/2022_hrpc5.5am_ada.pdf")
    },
    MI: {
      rule: w("Mich. RPC 5.5", "", "http://courts.mi.gov/courts/michigansupremecourt/rules/documents/michigan%20rules%20of%20professional%20conduct.pdf", {"official":true}),
      inHouse: w("Mich. Bd. of Law Examiners R. 5(D)", "A special certificate is required to practice solely for the employer from a Michigan office; it ends with the employment.", "https://www.courts.michigan.gov/499c97/siteassets/rules-instructions-administrative-orders/rules-for-the-board-of-law-examiners/rules-for-the-board-of-law-examiners.pdf", {"official":true}),
      phv: w("MCR 8.126", "Michigan counsel must appear of record. No more than five pro hac vice cases in a 365-day period.", "https://www.michbar.org/professional/prohacvice", {"official":true}),
      remote: w("Mich. Ethics Op. RI-382 (2021)", "An out-of-state lawyer physically located in Michigan but practicing exclusively the law of a jurisdiction where the lawyer is licensed does not violate Michigan Rule 5.5.", "https://www.michbar.org/opinions/ethics/numbered_opinions/RI-382")
    },
    WI: {
      temp: w("Wis. SCR 20:5.5(c) (per ABA MJP implementation chart, 2016)", "Wisconsin uses \"occasional\" rather than \"temporary\" in its safe harbors.", "https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/recommendations.authcheckdam.pdf", {"official":true}),
      rule: w("Wis. SCR 20:5.5", "", "https://www.wicourts.gov/sc/rules/chap20a.pdf", {"official":true}),
      inHouse: w("Wis. SCR 10.03(4)(f)", "In-house lawyers employed exclusively by a qualifying employer must register with the Board of Bar Examiners within 60 days of starting.", "https://www.wisbar.org/newspublications/wisconsinlawyer/pages/article.aspx?Volume=81&Issue=10&ArticleID=1471", {"deadline":"60 days","official":true}),
      phv: w("Wis. SCR 10.03(4)(b), (d)", "The nonresident lawyer must appear with an active Wisconsin lawyer who participates in the matter.", "https://www.wicourts.gov/sc/rulhear/DisplayDocument.html?content=html&seqNo=33576", {"official":true}),
      remote: w("Wis. Formal Ethics Op. EF-21-02 (2021)", "Wisconsin's rule does not prohibit an out-of-state lawyer from representing clients of the licensing state from a private location in Wisconsin.", "https://www.wisbar.org/NewsPublications/WisconsinLawyer/Pages/Article.aspx?ArticleID=28330")
    },
    WA: {
      rule: w("Wash. RPC 5.5", "", "http://www.courts.wa.gov/court_rules/?fa=court_rules.list&group=ga&set=RPC", {"official":true}),
      inHouse: w("Wash. APR 8(f)", "House counsel need limited admission to practice exclusively for a qualifying Washington employer; temporary practice is allowed while the application is pending.", "https://admissions.wsba.org/appinfo.action?id=4", {"official":true}),
      phv: w("Wash. APR 8(b)", "Pro hac vice requires association with Washington counsel.", "https://www.wsba.org/for-legal-professionals/join-the-legal-profession-in-wa/lawyers/house-counsel-and-multi-jurisdictional-practice", {"official":true}),
      remote: w("WSBA Advisory Op. 201601 (2016, amended 2022)", "Out-of-state lawyers may generally practice remotely from Washington if they limit their work to their licensing jurisdictions and do not hold out as available to practice in Washington.", "https://wsba.org/docs/default-source/legal-community/committees/committee-on-professional-ethics/201601-regarding-updated-opinion-on-remote-and-virtual-law-practice-.pdf?sfvrsn=180113f1_4"),
      residency: w("WSBA Advisory Op. 201601 (2016, amended 2022)", "Washington does not require a physical office, but an active Washington lawyer who lives outside Washington must file the name and street address of a resident agent in Washington with the WSBA.", "https://wsba.org/docs/default-source/legal-community/committees/committee-on-professional-ethics/201601-regarding-updated-opinion-on-remote-and-virtual-law-practice-.pdf?sfvrsn=180113f1_4"),
      away: w("WSBA Advisory Op. 201601 (2016, amended 2022)", "Washington-licensed lawyers may practice from a home office in another state, but should confirm their presence there is not unauthorized practice under that state's rules.", "https://wsba.org/docs/default-source/legal-community/committees/committee-on-professional-ethics/201601-regarding-updated-opinion-on-remote-and-virtual-law-practice-.pdf?sfvrsn=180113f1_4")
    },
    // Remaining states (2026-10-01). remoteNone = searched, no remote-work rule or opinion found.
    AL: {
      rule: w("Ala. R. Prof. Conduct 5.5", "Alabama's rule is not identical to the Model Rule.", br("alabama", "mjp")),
      inHouse: w("Rules Governing Admission to the Ala. State Bar, Rule VIII", "Authorized house counsel must register annually, work exclusively for a qualifying employer, and notify the Bar within 30 days if employment ends.", "https://judicial.alabama.gov/docs/library/rules/admit8.pdf", {"official":true}),
      phv: w("Rules Governing Admission to the Ala. State Bar, Rule VII", "Pro hac vice requires association with Alabama counsel and is limited to the proceeding.", "https://judicial.alabama.gov/docs/library/rules/admit7.pdf", {"official":true}),
      remoteNone: NONE_FOUND
    },
    AK: {
      rule: w("Alaska R. Prof. Conduct 5.5", "Alaska's rule generally tracks the Model Rule.", "https://public.courts.alaska.gov/web/rules/docs/prof.pdf", {"official":true}),
      inHouse: w("Alaska R. Prof. Conduct 5.5(d)(1)", "Lawyers admitted elsewhere may serve their employer or its affiliates under the in-house safe harbor without a separate registration. Court appearances still need pro hac vice.", "https://public.courts.alaska.gov/web/rules/docs/prof.pdf", {"noRegistration":true,"official":true}),
      phv: w("Alaska R. Civ. P. 81", "Pro hac vice requires association with Alaska counsel and an annual fee per case. Alaska residents and lawyers substantially involved in business in Alaska are ineligible.", "https://admissions.alaskabar.org/pro-hac-vice", {"official":true}),
      remoteNone: NONE_FOUND
    },
    AR: {
      rule: w("Ark. R. Prof. Conduct 5.5", "Arkansas's rule generally follows the Model Rule.", "https://www.arcourts.gov/rules-and-administrative-orders/%5Bcurrent%5D-arkansas-rules-of-professional-conduct", {"official":true}),
      inHouse: w("Ark. R. Prof. Conduct 5.5(d)(1)", "Lawyers admitted elsewhere may serve their employer or its affiliates under the in-house safe harbor without a separate registration. Court appearances still need pro hac vice.", "https://www.arcourts.gov/rules-and-administrative-orders/%5Bcurrent%5D-arkansas-rules-of-professional-conduct", {"noRegistration":true,"official":true}),
      phv: w("Ark. Sup. Ct. Rules Governing Admission, Rule XIV (practice by comity)", "A $200 fee per case; since 2017 Arkansas limits pro hac vice to three cases in a 12-month period. A trial court may require association with Arkansas counsel. Arkansas residents are not eligible; they must take the Arkansas bar exam.", "https://arcourts.gov/sites/default/files/formatted-files/Form_and_Instructions_Rule_XIV_pro_hac_vice.pdf", {"official":true}),
      remoteNone: NONE_FOUND
    },
    DE: {
      rule: w("Del. Lawyers' R. Prof. Conduct 5.5", "", br("delaware", "mjp")),
      inHouse: w("Del. Sup. Ct. R. 55.1 (amended July 14, 2025)", "In-house lawyers with a systematic Delaware presence need a Certificate of Limited Practice, filed within 30 days of starting; the employer must have a Delaware place of business. Since the 2025 amendments, certificate holders must also register every year (first deadline November 16, 2026) or the certificate ends.", "https://courts.delaware.gov/bbe/in-house-counsel", {"deadline":"30 days","official":true}),
      phv: u("Del. Sup. Ct. R. 72 (Supreme Court); trial courts have parallel rules", "A Delaware lawyer with a Delaware office must move the admission, appear, and attend proceedings."),
      remoteNone: NONE_FOUND
    },
    GA: {
      remote: w("Ga. Formal Advisory Op. 22-1 (approved by the Supreme Court of Georgia, June 11, 2024)", "Lawyers not licensed in Georgia may provide legal services remotely from Georgia when the services have no connection to Georgia other than the lawyer's location: no Georgia clients, law, property, or organizations with Georgia offices. They must not claim or imply Georgia licensure, must correct anyone who assumes it, and must take reasonable steps so their Georgia location is not generally known, keeping it off advertising, letterhead, cards, and websites.", "https://caselaw.findlaw.com/court/ga-supreme-court/116257165.html", {"official":true}),
      rule: w("Ga. R. Prof. Conduct 5.5", "Georgia's rule has separate provisions for \"Domestic Lawyers\" and \"Foreign Lawyers.\"", "https://www.gabar.org/barrules/georgia-rules-of-professional-conduct.cfm", {"official":true}),
      inHouse: w("Ga. R. Prof. Conduct 5.5(d)(1)", "Lawyers admitted elsewhere may serve their employer or its affiliates under the in-house safe harbor without a separate registration. Court appearances still need pro hac vice.", "https://www.gabar.org/barrules/georgia-rules-of-professional-conduct.cfm", {"noRegistration":true,"official":true}),
      phv: w("Ga. Unif. Super. Ct. R. 4.4", "Pro hac vice in state and superior courts under Uniform Superior Court Rule 4.4. Lawyers who live or regularly work in Georgia are ineligible unless they practice solely for their employer.", "https://www.gabar.org/general-counsel/pro-hac-vice", {"official":true})
    },
    ID: {
      temp: w("Idaho RPC 5.5 (per ABA MJP implementation chart, 2016)", "Idaho has four exceptions: preparing for a proceeding where admission is expected, services to an employer, matters related to representing a client in the lawyer's admitted jurisdiction, and association with Idaho counsel. There is no separate arbitration and mediation safe harbor.", "https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/recommendations.authcheckdam.pdf", {"official":true,"harbors":["c1","c2","c4"],"clientBased":true}),
      rule: w("Idaho R. Prof. Conduct 5.5", "Idaho's rule is structured differently from the Model Rule; its temporary-practice safe harbors are in 5.5(b).", "https://isb.idaho.gov/pdf/rules/irpc.pdf", {"official":true}),
      inHouse: w("Idaho Bar Comm'n R. 225", "A House Counsel License is required for continuous practice for an Idaho employer. House counsel may not appear in courts or administrative proceedings and must keep an Idaho office.", "https://isb.idaho.gov/wp-content/uploads/SECTION-II-Admissions-acc.pdf", {"official":true}),
      phv: w("Idaho Bar Comm'n R. 227", "Idaho residents are ineligible. The lawyer must maintain a practice elsewhere and associate with Idaho local counsel.", "https://isb.idaho.gov/wp-content/uploads/ibcr_227.pdf", {"official":true}),
      remoteNone: NONE_FOUND
    },
    IN: {
      rule: w("Ind. R. Prof. Conduct 5.5", "Indiana's rule generally tracks the Model Rule.", br("indiana", "mjp")),
      inHouse: w("Ind. Admis. & Disc. R. 6, § 2", "A Business Counsel License is required. Practice is limited to the employer, all compensation must come from it, and a law update seminar is due within 12 months.", "https://www.in.gov/courts/ace/admissions/business-counsel", {"official":true}),
      phv: w("Ind. Admis. & Disc. R. 3, § 2", "Temporary admission on petition for a particular case; a notice must be filed with the Clerk of the Supreme Court within 30 days after admission.", "https://www.in.gov/judiciary/rules/ad_dis/index.html", {"official":true}),
      remoteNone: NONE_FOUND
    },
    IA: {
      rule: w("Iowa R. Prof'l Conduct 32:5.5", "Iowa's rule generally follows the Model Rule.", "https://www.legis.iowa.gov/DOCS/ACO/CR/LINC/09-27-2013.chapter.32.pdf", {"official":true}),
      inHouse: w("Iowa Ct. R. 31.16", "In-house lawyers with a continuous Iowa presence must register within 90 days of starting employment.", "https://www.iowacourts.gov/opr/attorneys/admissions/other-admission/in-house-counsel-registration", {"deadline":"90 days","official":true}),
      phv: w("Iowa Ct. R. 31.14", "Pro hac vice admission for a particular proceeding.", "https://www.legis.iowa.gov/docs/ACO/CourtRulesChapter/11-25-2025.31.pdf", {"official":true}),
      remoteNone: NONE_FOUND
    },
    KS: {
      rule: w("Kan. R. Prof'l Conduct 5.5", "", "https://kscourts.gov/KSCourts/media/KsCourts/Rules/2026-RuleBook.pdf", {"official":true}),
      inHouse: w("Kan. Sup. Ct. R. 721", "A single-employer restricted license is required; apply within 90 days of starting. Work may continue under a Kansas lawyer's supervision while the application is pending.", "https://kscourts.gov/Rules-Orders/Rules/Rule-721", {"deadline":"90 days","official":true}),
      phv: w("Kan. Sup. Ct. R. 116 (district courts); R. 1.10 (appellate courts)", "Kansas counsel must actively participate, sign filings, and attend arguments. Applicants must disclose Kansas pro hac vice appearances in the past 12 months.", "https://kscourts.gov/Rules-Orders/Rules/Admission-Pro-Hac-Vice-of-Out-of-State-Attorney", {"official":true}),
      remoteNone: NONE_FOUND
    },
    KY: {
      temp: w("Ky. SCR 3.130(5.5)(c) (per ABA MJP implementation chart, 2016)", "Kentucky deleted the Model Rule's (c)(1) option of associating with local counsel, and requires temporary services to arise out of or relate to representing a client in a jurisdiction where the lawyer is admitted.", "https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/recommendations.authcheckdam.pdf", {"official":true,"harbors":["c2","c3","c4"],"clientBased":true}),
      rule: w("Ky. SCR 3.130(5.5)", "Kentucky's rule generally tracks the Model Rule.", "https://www.kybar.org/?SCR3", {"official":true}),
      inHouse: w("Ky. SCR 2.111", "A limited certificate of admission is required. It ends if employment ends, unless new qualifying Kentucky employment begins within 30 days.", br("kentucky", "house-counsel")),
      phv: w("Ky. SCR 3.030(2)", "Kentucky co-counsel must be engaged and present at trial. The lawyer pays an annual renewal fee until the case ends.", "https://www.kybar.org/?SCR3", {"official":true}),
      remoteNone: NONE_FOUND
    },
    LA: {
      rule: w("La. R. Prof. Conduct 5.5", "", "https://lalegalethics.org/louisiana-rules-of-professional-conduct/article-5-law-firms-and-associations/rule-5-5-unauthorized-practice-of-law-multijurisdictional-practice-of-law/", {"official":true}),
      inHouse: w("La. Sup. Ct. R. XVII, § 14", "A limited license, valid four years and renewable, is required. In-house counsel may not be counsel of record in Louisiana courts.", "https://www.lasc.org/rules/orders/2005/RuleXVII14inhouse.pdf", {"official":true}),
      phv: w("La. Sup. Ct. R. XVII, § 13", "Louisiana counsel must be associated and remains responsible. Admission may be denied for appearances so frequent they amount to regular practice in Louisiana, or for lawyers who live or are regularly employed in Louisiana.", "https://www.ladb.org/docs/Publication/PHV-Rule-07012015.pdf", {"official":true}),
      remoteNone: NONE_FOUND
    },
    MD: {
      rule: w("Md. Attorneys' Rules of Prof'l Conduct 5.5 (Md. Rule 19-305.5)", "Maryland's rule generally tracks the Model Rule.", "https://www.courts.state.md.us/attygrievance/rules", {"official":true}),
      inHouse: w("Md. Rule 19-305.5(d)(1)", "Lawyers admitted elsewhere may serve their employer or its affiliates under the in-house safe harbor without a separate registration. Court appearances still need pro hac vice.", "https://www.courts.state.md.us/attygrievance/rules", {"noRegistration":true,"official":true}),
      phv: w("Md. Rule 19-214", "A Maryland lawyer of record moves the special admission; the out-of-state lawyer appears as co-counsel.", "https://www.courts.state.md.us/sites/default/files/import/ble/pdfs/baradmissionrules.pdf", {"official":true}),
      remoteNone: NONE_FOUND
    },
    MS: {
      rule: w("Miss. R. Prof. Conduct 5.5", "Mississippi's rule generally tracks the Model Rule.", "https://courts.ms.gov/research/rules/msrulesofcourt/rules_of_professional_conduct.pdf", {"official":true}),
      inHouse: w("Miss. R. Prof. Conduct 5.5(d)", "Since July 1, 2021, in-house and government lawyers with a Mississippi office or systematic presence must register annually with The Mississippi Bar and pay a fee.", "https://www.msbar.org/for-attorneys/membership-status-enrollment-fees/rule-55-in-house-counsel-registration/", {"official":true}),
      phv: w("Miss. R. App. P. 46(b)", "Appearing in more than five unrelated matters in 12 months is \"general practice\" and makes a lawyer ineligible. Mississippi counsel must associate and is jointly responsible.", br("mississippi", "pro-hac-vice")),
      remoteNone: NONE_FOUND
    },
    MT: {
      temp: u("Mont. RPC 5.5(c)", "Current summaries describe Montana's rule as including the Model Rule's temporary-practice safe harbors, but the ABA's 2016 implementation chart reported that Montana kept the earlier rule without them. Confirm with the current Montana rule text."),
      rule: w("Mont. R. Prof. Conduct 5.5", "Montana's rule generally tracks the Model Rule.", "https://www.montanabar.org/page/RulesRegs", {"official":true}),
      inHouse: w("Mont. R. Prof. Conduct 5.5(d)(1)", "Lawyers admitted elsewhere may serve their employer or its affiliates under the in-house safe harbor without a separate registration. Court appearances still need pro hac vice.", "https://www.montanabar.org/page/RulesRegs", {"noRegistration":true,"official":true}),
      phv: w("Mont. R. Admission to the Bar VI", "A Montana lawyer must be associated as attorney of record. Lawyers who live, are regularly employed, or regularly do business in Montana are ineligible.", "https://courts.mt.gov/external/rules/admis_st_bar.pdf", {"official":true}),
      remoteNone: NONE_FOUND
    },
    NE: {
      rule: w("Neb. Ct. R. Prof. Conduct § 3-505.5", "Nebraska's rule generally tracks the Model Rule.", "https://supremecourt.nebraska.gov/supreme-court-rules/chapter-3-attorneys-and-practice-law/article-5-nebraska-rules-professional", {"official":true}),
      inHouse: w("Neb. Ct. R. §§ 3-1201 to 3-1204", "In-house lawyers with a continuous Nebraska presence must register within 90 days of starting, or seek admission.", "https://supremecourt.nebraska.gov/supreme-court-rules/chapter-3-attorneys-practice-law/article-12-registration-house-counsel", {"deadline":"90 days","official":true}),
      phv: w("Neb. Ct. R. § 3-106", "The out-of-state lawyer must associate with a Nebraska-resident lawyer admitted in Nebraska.", br("nebraska", "pro-hac-vice")),
      remoteNone: NONE_FOUND
    },
    NV: {
      temp: w("Nev. RPC 5.5, 5.5A (per ABA MJP implementation chart, 2016)", "Nevada's rule is drafted differently. A lawyer providing transactional or other non-court services to a Nevada client on matters pending in or substantially related to Nevada must register under Rule 5.5A, pay a fee, and file an annual report.", "https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/recommendations.authcheckdam.pdf", {"official":true}),
      virtualInHouse: w("Nev. Ethics Op. 57 (2020)", "An in-house lawyer who lives outside Nevada and works for a multistate company may fall within Nevada Rule 5.5(b)(3) if the lawyer does not establish a regular Nevada presence or imply Nevada admission, but should file the report Rule 5.5A requires for transactional or extra-judicial matters substantially related to Nevada.", "https://nvbar.org/wp-content/uploads/Ethics-Opinion-57_Licensing-of-In-House-Counsel-for-Multinational-Corporations-Based-in-NV.pdf", {"official":true,"level":"caution"}),
      remoteNote: w("Nev. ADKT 0633 (pending)", "The State Bar of Nevada has petitioned the Nevada Supreme Court to adopt Supreme Court Rule 42.2 and amend Rule 5.5 to address out-of-state lawyers working remotely in Nevada. As of 2026-10-01 we found no final order.", "https://nvbar.org/notice-of-rule-changes/", {"official":true}),
      rule: w("Nev. R. Prof. Conduct 5.5, 5.5A", "Nevada's rule is structured differently from the Model Rule, with safe harbors in 5.5(b); Rule 5.5A requires reporting some out-of-state lawyer activity.", "http://www.leg.state.nv.us/courtrules/RPC.html", {"official":true}),
      inHouse: w("Nev. Sup. Ct. R. 49.1", "Limited-practice certification for lawyers employed exclusively as in-house counsel for a business in Nevada. Certified in-house counsel may appear for the employer, including in court.", "https://nvbar.org/licensing-compliance/admissions/specialty-admissions/", {"official":true}),
      phv: w("Nev. Sup. Ct. R. 42", "More than five appearances in three years is presumed excessive. Lawyers who live or are regularly employed in Nevada are ineligible. Nevada counsel must associate and appear.", "https://nvbar.org/pro-hac-vice-instructions-application/", {"official":true}),
      remoteNone: NONE_FOUND
    },
    NM: {
      away: w("State Bar of N.M. Formal Ethics Op. 2024-001", "New Mexico lawyers may practice New Mexico law virtually from another state or country if that jurisdiction allows it. The opinion recommends keeping a New Mexico mailing address and stating jurisdictional limits on websites and letterhead.", "https://www.sbnm.org/Portals/NMBAR/FINAL%20Virtual%20Practice%20Opinion_%20January%2017%202024.pdf", {"official":true}),
      rule: w("N.M. R. Prof. Conduct 16-505 NMRA (Rule 5.5)", "New Mexico's rule generally tracks the Model Rule.", br("new-mexico", "mjp")),
      inHouse: w("Rule 15-308 NMRA", "In-house lawyers employed exclusively by a New Mexico employer need an in-house counsel limited license from the Board of Bar Examiners.", "https://supremecourt.nmcourts.gov/wp-content/uploads/sites/2/2024/02/New-Rule-15-308-NMRA.pdf", {"official":true}),
      phv: w("Rule 24-106 NMRA", "A New Mexico lawyer must associate, sign the first filing, and appear unless excused. A separate application is needed for each case.", br("new-mexico", "pro-hac-vice")),
      remoteNone: NONE_FOUND
    },
    ND: {
      temp: w("N.D. RPC 5.5 (per ABA MJP implementation chart, 2016)", "North Dakota requires association with a North Dakota lawyer for transactions pending in or substantially related to North Dakota where pro hac vice is not available.", "https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/recommendations.authcheckdam.pdf", {"official":true}),
      rule: w("N.D. R. Prof. Conduct 5.5", "North Dakota's rule generally tracks the Model Rule.", "https://www.ndcourts.gov/legal-resources/rules/ndrprofconduct/5-5-2", {"official":true}),
      inHouse: w("N.D. Admission to Practice R. 3(C)", "Nonresident in-house lawyers must register annually, for up to five years or until eligible for admission on motion.", "https://www.ndcourts.gov/supreme-court/committees/board-of-law-examiners/in-house-counsel-registration", {"official":true}),
      phv: w("N.D. Admission to Practice R. 3(A)", "A North Dakota associate lawyer must appear in person; the motion is due within 45 days after service of the initiating paper.", "https://www.ndcourts.gov/legal-resources/rules/admissiontopracticer/3", {"official":true}),
      remoteNone: NONE_FOUND
    },
    OK: {
      rule: w("Okla. R. Prof. Conduct 5.5", "Oklahoma's rule generally tracks the Model Rule.", "http://www.oscn.net/applications/oscn/Index.asp?ftdb=STOKST05&level=1", {"official":true}),
      inHouse: w("Rules Governing Admission to the Practice of Law in Okla., Rule Two, § 5", "Full-time in-house work for an Oklahoma employer may require a Special Temporary Permit, which generally requires Oklahoma residence and admission in a reciprocal jurisdiction.", "https://digitalprairie.ok.gov/digital/collection/stgovpub/id/26618/rec/1", {"official":true}),
      phv: w("Okla. Stat. tit. 5, ch. 1, app. 1, art. II, § 5", "An Oklahoma lawyer must sign filings and attend hearings. A separate application is needed for each proceeding, renewed annually.", "http://www.oscn.net/applications/oscn/Index.asp?ftdb=STOKST05&level=1", {"official":true}),
      remoteNone: NONE_FOUND
    },
    OR: {
      rule: w("Or. R. Prof. Conduct 5.5", "Oregon's rule generally tracks the Model Rule.", "http://www.osbar.org/_docs/rulesregs/orpc.pdf", {"official":true}),
      inHouse: w("Or. Rules for Admission 16.05", "House counsel need limited admission, must identify their limited status on business materials, and certify compliance yearly.", "https://www.courts.oregon.gov/publications/other/MiscellaneousNotifications/RULE42.htm", {"official":true}),
      phv: w("UTCR 3.170; ORS 9.241", "An Oregon State Bar member must associate. Admission is for one case and lasts one year; renew each year to continue.", "https://www.osbar.org/_docs/rulesregs/UTCR3.170.pdf", {"official":true}),
      remote: w("Or. Formal Ethics Op. 2022-200", "A lawyer licensed elsewhere who lives in Oregon and practices only that jurisdiction's law, without Oregon clients, soliciting Oregon work, or holding out, is not engaged in unlawful practice. This applies to private and in-house lawyers, and to home or commercial offices.", "https://www.osbar.org/_docs/ethics/2022-200.pdf")
    },
    SD: {
      temp: w("S.D. RPC 5.5(c)(5) (per ABA MJP implementation chart, 2016)", "South Dakota adds a condition to all temporary practice: the lawyer must obtain a South Dakota sales tax license and pay the applicable taxes.", "https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/recommendations.authcheckdam.pdf", {"official":true}),
      inHouse: w("S.D. R. Prof. Conduct 5.5(d)", "Lawyers admitted elsewhere may serve their employer or its affiliates under the in-house safe harbor without a separate registration. Court appearances still need pro hac vice.", "https://reports.ncbex.org/charts/chart-16/", { noRegistration: true }),
      rule: w("S.D. R. Prof. Conduct 5.5", "South Dakota's rule generally tracks the Model Rule.", "https://sdlegislature.gov/Statutes/Codified_Laws/DisplayStatute.aspx?Type=Statute&Statute=16-18-A", {"official":true}),
      phv: w("SDCL § 16-18-2", "The out-of-state lawyer must associate with a South Dakota-resident lawyer who personally participates, and must obtain a South Dakota sales and use tax license unless appearing as part of full-time employment.", "https://sdlegislature.gov/api/Statutes/16-18-2.html?all=true", {"official":true}),
      remoteNone: NONE_FOUND
    },
    TN: {
      temp: w("Tenn. Sup. Ct. R. 8, RPC 5.5(c) (per ABA MJP implementation chart, 2016)", "Tennessee allows (c)(3) and (c)(4) temporary practice only when it relates to representing a client in a jurisdiction where the lawyer is licensed.", "https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/recommendations.authcheckdam.pdf", {"official":true,"clientBased":true}),
      virtualInHouse: w("Tenn. Formal Ethics Op. 2022-F-168", "A lawyer who lives outside Tennessee and works remotely as full-time in-house counsel for a company headquartered in Tennessee is not, on those facts alone, establishing a systematic and continuous Tennessee presence and need not register.", "https://www.tbpr.org/ethic_opinions/2022-f-168", { level: "ok" }),
      rule: w("Tenn. Sup. Ct. R. 8, RPC 5.5", "Tennessee's rule generally tracks the Model Rule.", "http://www.tsc.state.tn.us/rules/supreme-court/8", {"official":true}),
      inHouse: w("Tenn. Sup. Ct. R. 7, § 10.01", "In-house lawyers with a continuous Tennessee presence must register within 180 days of starting employment.", "https://www.tnble.org/?page_id=330", {"deadline":"180 days","official":true}),
      phv: w("Tenn. Sup. Ct. R. 19", "Lawyers who live in Tennessee are eligible only if registered under Rule 7, § 10.07. Tennessee counsel must associate.", "https://tncourts.gov/rules/supreme-court/19", {"official":true}),
      remoteNone: NONE_FOUND
    },
    WV: {
      rule: w("W. Va. R. Prof. Conduct 5.5", "West Virginia's rule generally tracks the Model Rule.", br("west-virginia", "mjp")),
      inHouse: w("W. Va. R. Prof. Conduct 5.5(d)(1)", "Lawyers admitted elsewhere may serve their employer or its affiliates under the in-house safe harbor without a separate registration. Court appearances still need pro hac vice.", br("west-virginia", "house-counsel"), { noRegistration: true }),
      phv: w("W. Va. Rules for Admission to the Practice of Law, Rule 8.0", "A West Virginia lawyer with a principal place of business in West Virginia must move the admission; the fee is $350 per applicant per case.", "https://www.courtswv.gov/sites/default/pubfilesmnt/2023-07/Admission-Rule-8-Final-Effective-Jan-1-2015_0.pdf"),
      remoteNone: NONE_FOUND
    },
    WY: {
      temp: w("Wyo. RPC 5.5(c) (per ABA MJP implementation chart, 2016)", "Wyoming allows temporary practice by out-of-state lawyers in only three situations: a pending proceeding where the lawyer is authorized to appear alongside a Wyoming lawyer, services to the lawyer's employer, and federal or tribal law practice.", "https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/recommendations.authcheckdam.pdf", {"official":true,"harbors":["c2"]}),
      rule: w("Wyo. R. Prof. Conduct 5.5", "Wyoming's rule generally tracks the Model Rule.", "http://www.courts.state.wy.us/wp-content/uploads/2017/05/RULES_OF_PROFESSIONAL_CONDUCT_FOR_ATTORNEYS_AT_LAW.pdf", {"official":true}),
      inHouse: w("Wyo. R. Prof. Conduct 5.5(d)(1)", "Lawyers admitted elsewhere may serve their employer or its affiliates under the in-house safe harbor without a separate registration. Court appearances still need pro hac vice.", "http://www.courts.state.wy.us/wp-content/uploads/2017/05/RULES_OF_PROFESSIONAL_CONDUCT_FOR_ATTORNEYS_AT_LAW.pdf", {"noRegistration":true,"official":true}),
      phv: w("Rules Governing Admission to the Practice of Law in Wyo., Rule 8", "A Wyoming lawyer must move the admission, and local counsel must participate in preparation and trial as the court requires.", "https://www.wyocourts.gov/app/uploads/2025/01/Order-Amending-Rule-8-of-Rules-Governing-Admission-to-Practice-of-Law-1.pdf"),
      remoteNone: NONE_FOUND
    }
  };

  Object.keys(STATES).forEach(function (k) {
    Object.keys(STATES[k]).forEach(function (f) { var c = STATES[k][f]; if (isSecondary(c)) c.secondary = true; });
  });

  var api = { ABA: ABA, STATES: STATES };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else { root.MJP = root.MJP || {}; Object.assign(root.MJP, api); }
})(this);
