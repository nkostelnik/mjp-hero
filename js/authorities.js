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
   *   inHouse   in-house counsel registration (noRegistration: true if none is required)
   *   phv       pro hac vice admission
   *   adr       out-of-state counsel in arbitration
   *   remote    guidance on remote work from within the state for out-of-state matters
   *             (level: "caution" when the guidance is narrower than ABA Op. 495)
   *   residency requirements on licensed lawyers who live elsewhere
   *   away     the state's own guidance that its licensed lawyers may practice its law from elsewhere
   *   virtualInHouse  authority requiring a local license for in-house lawyers who serve a company
   *            in this state remotely from another state
   *   clientNotice    true if the state requires telling clients the lawyer is not licensed there
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
  function u(cite, text, extra) { return Object.assign({ cite: cite, text: text || "", verified: false }, extra || {}); }

  var STATES = {
    CA: {
      rule: u("Cal. R. Prof. Conduct 5.5", "California's version differs from the Model Rule; its exceptions for out-of-state lawyers are in the California Rules of Court."),
      upl: u("Cal. Bus. & Prof. Code §§ 6125, 6126", "Practicing law in California without active State Bar membership is prohibited and can be a crime."),
      temp: v("Cal. Rules of Court 9.47, 9.48", "Out-of-state lawyers may provide temporary litigation-related (9.47) or non-litigation (9.48) services only under the conditions those rules set.", "https://courts.ca.gov/cms/rules/index/nine"),
      inHouse: v("Cal. Rules of Court 9.46", "Registered in-house counsel. The employer must have a California office and meet other qualifying-institution requirements.", "https://www.courts.ca.gov/cms/rules/index/nine/rule9_46"),
      phv: u("Cal. Rules of Court 9.40", "Pro hac vice admission in California state courts."),
      adr: v("Cal. Rules of Court 9.43", "Out-of-state attorney arbitration counsel must meet the rule's conditions to appear in a California arbitration.", "https://courts.ca.gov/cms/rules/index/nine/rule9_43"),
      notes: [
        "Birbrower, Montalbano, Condon & Frank v. Superior Court, 17 Cal. 4th 119 (1998): advising a California client on California matters can be practice \"in California\" even without being physically present.",
        "Cal. State Bar Formal Op. 2023-208: this remote-work opinion addresses California lawyers' duties and does not approve remote practice from California by lawyers licensed only elsewhere. California has no rule or opinion equivalent to ABA Op. 495."
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
      rule: v("Tex. Disciplinary R. Prof'l Conduct 5.05 (amended eff. Oct. 1, 2024)", "Texas numbers its rule 5.05. The 2024 amendments added express in-house (5.05(c)) and remote-practice (5.05(d)) provisions.", "https://www.legalethicstexas.com/resources/rules/texas-disciplinary-rules-of-professional-conduct/unauthorized-practice-of-law/"),
      upl: u("Tex. Gov't Code §§ 81.101, 81.102"),
      phv: v("Rules Governing Admission to the Bar of Texas, Rule XIX; Tex. Gov't Code § 82.0361", "Participation by nonresident attorneys in a particular Texas case, on motion with a Texas attorney and a per-cause fee.", "https://ble.texas.gov/non-resident-attorney-fee-info"),
      inHouse: v("Tex. Disciplinary R. Prof'l Conduct 5.05(c)", "Lawyers licensed elsewhere may serve their employer or its affiliates in Texas. Texas does not require in-house counsel to register.", "https://www.texasbarpractice.com/law-practice-management/non-texas-lawyers/faqs-for-in-house-counsel-not-licensed-in-texas/", { noRegistration: true }),
      remote: v("Tex. Disciplinary R. Prof'l Conduct 5.05(d)", "Lawyers not licensed in Texas who practice solely federal law or the law of the jurisdiction where they are licensed may do so from a temporary or permanent location in Texas, subject to the rule's limits on holding out and advertising.", "https://www.legalethicstexas.com/resources/rules/texas-disciplinary-rules-of-professional-conduct/unauthorized-practice-of-law/")
    },
    FL: {
      rule: v("R. Regulating Fla. Bar 4-5.5", "A 2022 comment amendment codified the remote-work advisory opinion.", "https://caselaw.findlaw.com/court/fl-supreme-court/2163013.html"),
      phv: v("R. Regulating Fla. Bar 1-3.10; Fla. R. Gen. Prac. & Jud. Admin. 2.510", "More than 3 pro hac vice appearances in separate cases within 365 days is presumed to be a general practice, which bars further appearances. A Florida Bar member must be associated as attorney of record.", "https://www.floridabar.org/rules/upl/upl002/"),
      inHouse: v("R. Regulating Fla. Bar ch. 17", "Authorized house counsel: lawyers licensed elsewhere working exclusively for a Florida business organization must be certified.", "https://www.floridabar.org/rules/upl/upl004/"),
      remote: v("Fla. Bar re Advisory Op. - Out-of-State Attorney Working Remotely from Florida Home, 318 So. 3d 538 (Fla. 2021)", "A lawyer licensed elsewhere who works remotely from Florida, even for an extended period, does not have a regular Florida presence if the lawyer works exclusively on non-Florida matters and neither the lawyer nor the firm holds out a Florida presence.", "https://law.justia.com/cases/florida/supreme-court/2021/sc20-1220.html")
    },
    IL: {
      rule: v("Ill. R. Prof'l Conduct 5.5", "", "https://www.isba.org/ethics/irpc/rule55"),
      away: v("ISBA Advisory Op. 22-03 (2022)", "Illinois-licensed lawyers may practice Illinois law remotely from a jurisdiction where they are not licensed, if that jurisdiction does not prohibit it.", "https://www.isba.org/sites/default/files/ethicsopinions/Advisory%20Opinion%2022-03.pdf"),
      inHouse: v("Ill. S. Ct. R. 716 (amended eff. Jan. 1, 2026)", "Limited license for house counsel employed exclusively by a single entity and its affiliates.", "https://www.ilbaradmissions.org/appinfo.action?id=4"),
      phv: v("Ill. S. Ct. R. 707", "An out-of-state attorney may appear in a particular Illinois proceeding after an Illinois attorney files an appearance and a verified statement is filed with the ARDC.", "https://registration.iardc.org/attyreg/Registration/regdept/popup_rule707overview.aspx")
    },
    DC: {
      rule: u("D.C. R. Prof'l Conduct 5.5"),
      upl: v("D.C. Ct. App. R. 49", "D.C.'s unauthorized-practice rule, with its own list of exceptions in Rule 49(c).", "https://www.dccourts.gov/sites/default/files/matters-docs/rule49.pdf"),
      remote: v("D.C. Ct. App. R. 49(c)(13); D.C. Comm. on Unauthorized Practice of Law Op. 24-20 (2020)", "Rule 49(c)(13) covers a lawyer who occasionally practices from a D.C. residence, but only if the lawyer maintains a law office in a jurisdiction where admitted, does not use a D.C. address or hold out as authorized in D.C., and does not regularly meet clients in D.C. Op. 24-20 applied this during the COVID-19 pandemic. Full-time remote work from D.C. is not clearly covered.", "https://www.dccourts.gov/sites/default/files/2020-03/CUPL-Opinion-24-20.pdf", { level: "caution" })
    },
    NJ: {
      rule: v("N.J. R. Prof'l Conduct 5.5", "New Jersey lists its own permitted multijurisdictional practice in RPC 5.5(b). Occasional practice under 5.5(b)(3)(iv) requires associating a New Jersey lawyer who is designated and disclosed to all parties.", "https://www.njcourts.gov/sites/default/files/notices/2022/12/n221223a.pdf"),
      phv: v("N.J. Ct. R. 1:21-2", "Pro hac vice at the court's discretion; administratively ineligible attorneys may not appear.", "https://www.njcourts.gov/attorneys/mcl/prohacvice"),
      inHouse: v("N.J. Ct. R. 1:27-2", "Mandatory limited license for in-house counsel not admitted in New Jersey who work in New Jersey.", "https://www.njbarexams.org/ihc"),
      remote: v("N.J. Comm. on the Unauthorized Practice of Law Op. 59 / Advisory Comm. on Prof'l Ethics Op. 742 (2021)", "Lawyers not admitted in New Jersey may work remotely from a New Jersey home for out-of-state firms or employers if they have no outward manifestation of a New Jersey presence, such as a New Jersey office, advertising a New Jersey location, or receiving mail there.", "https://www.njcourts.gov/sites/default/files/notices/2021/10/n211007c.pdf")
    },
    PA: {
      rule: u("Pa. R. Prof'l Conduct 5.5"),
      away: v("Pa. Bar Ass'n & Phila. Bar Ass'n Joint Formal Op. 2021-100", "Pennsylvania-licensed lawyers may practice Pennsylvania law remotely from another jurisdiction if they take appropriate steps, including not holding out a local office, and the other jurisdiction does not prohibit it.", "https://www.lawnext.com/2021/03/the-ethics-of-working-from-outside-your-state-pa-bars-adopt-aba-rule.html"),
      phv: v("Pa. Bar Admission R. 301", "Pro hac vice requires a Pennsylvania attorney who agrees to act as attorney of record.", "https://www.pabarexam.org/bar_admission_rules/301.htm"),
      inHouse: v("Pa. Bar Admission R. 302", "Limited In-House Corporate Counsel License required for in-house lawyers working in Pennsylvania on more than a temporary basis or with an office or systematic presence there.", "https://www.pabarexam.org/bar_admission_rules/302.htm")
    },
    MA: {
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
      inHouse: v("Mo. S. Ct. R. 8.105", "Limited license for lawyers not admitted in Missouri who serve their employer or its affiliates.", "https://mo-legal-ethics.org/informal-opinion/2024-02/"),
      remote: v("Mo. Informal Advisory Op. 2024-03 (2024)", "A lawyer licensed elsewhere who lives in Missouri and works from a Missouri home office for an out-of-state firm is establishing a systematic and continuous presence and must seek Missouri admission.", "https://mo-legal-ethics.org/informal-opinion/2024-03/", { level: "risk" }),
      virtualInHouse: v("Mo. Informal Advisory Op. 2024-02 (2024)", "A lawyer licensed elsewhere who works virtually from another state for a corporation located in Missouri must seek Missouri admission (for example, a Rule 8.105 limited license), because presence can be systematic and continuous without being physically in Missouri.", "https://mo-legal-ethics.org/informal-opinion/2024-02/")
    },
    CO: {
      remote: v("Colo. RPC 5.5, cmt. [1] (amended Feb. 2024); C.R.C.P. 205.1", "Lawyers physically in Colorado who provide services under another jurisdiction's authority do not violate Rule 5.5 if they do not solicit or accept clients in Colorado for services performed in Colorado and do not hold out as authorized in Colorado. Colorado regulators caution that working for a Colorado law firm with a Colorado office likely requires a Colorado license unless the practice is exclusively federal or tribal law.", "https://cl.cobar.org/departments/practicing-from-a-remote-jurisdiction/")
    },
    OH: {
      remote: v("Ohio Prof. Cond. R. 5.5(d)(4) (eff. Sept. 1, 2021)", "Lawyers admitted elsewhere may practice their licensing jurisdiction's law remotely from Ohio if they do not solicit Ohio clients, appear in Ohio courts, or hold out as Ohio-admitted. If any Ohio location appears on letterhead, cards, websites, advertising, fee agreements, or signage, they must affirmatively state they are not admitted in Ohio.", "https://www.oblic.com/resources/oblic-news/09/07/2021/rule-5-5-amendments-allow-remote-practice/")
    },
    NC: {
      remote: v("N.C. RPC 5.5; N.C. State Bar, \"Home is Where the Heart Is\" (2021)", "Lawyers licensed elsewhere may work remotely from North Carolina for their own jurisdiction's clients if they do not suggest they are licensed in North Carolina and protect client confidentiality.", "https://www.ncbar.gov/for-lawyers/ethics/ethics-articles/home-is-where-the-heart-is/")
    },
    MN: {
      remote: v("Minn. RPC 5.5(d)", "Lawyers admitted elsewhere may provide services in Minnesota that exclusively involve federal law, tribal law, or the law of a jurisdiction where they are licensed, but must advise each client that they are not licensed in Minnesota.", "https://www.revisor.mn.gov/court_rules/pr/subtype/cond/id/5.5/"),
      clientNotice: true
    },
    AZ: {
      remote: u("Ariz. ER 5.5(d)", "Lawyers admitted elsewhere may provide services in Arizona that exclusively involve federal law, another jurisdiction's law, or tribal law, but must advise clients they are not admitted in Arizona and obtain informed consent."),
      clientNotice: true
    },
    CT: {
      remote: v("Conn. RPC 5.5(f); Conn. Practice Book § 2-44A(c) (eff. Jan. 1, 2023)", "Remote practice from Connecticut that is authorized by a jurisdiction where the lawyer is admitted is not the practice of law in Connecticut. It does not allow holding out as authorized in Connecticut or serving Connecticut clients.", "https://www.jud.ct.gov/lawjournal/Docs/Misc/2022/29/pblj_8402.pdf")
    },
    NH: {
      remote: v("N.H. RPC 5.5(d) & Ethics Committee cmt. 3", "Lawyers licensed elsewhere who do not practice New Hampshire law need not obtain a New Hampshire license merely because they are physically in New Hampshire, if they do not hold out as admitted there.", "https://www.nhbar.org/working-remotely-under-nh-rule-5-5/")
    },
    VT: {
      remote: v("Vt. RPC 5.5, cmt. [22]", "Vermont added a comment expressly adopting ABA Op. 495 for remote practice from Vermont.", MASS_BBO)
    },
    RI: {
      remote: v("R.I. RPC 5.5, cmt. [4]", "Lawyers not licensed in Rhode Island may work from a Rhode Island home under conditions, but may not hold in-person meetings in Rhode Island with clients or third parties unless another exception applies.", MASS_BBO)
    },
    ME: {
      remote: v("Me. Prof. Ethics Comm'n Op. 189 (2005)", "A lawyer who lives in Maine and works from home for an out-of-state firm and out-of-state clients, without a Maine office or holding out, is not engaged in unauthorized practice.", MASS_BBO)
    },
    UT: {
      remote: v("Utah Ethics Advisory Op. 19-03 (2019)", "An out-of-state lawyer may represent clients from the licensing state from a private home in Utah, but must not establish a public office in Utah or solicit Utah business.", "https://www.utahbar.org/ethics-opinions/19-03/")
    },
    SC: {
      remote: v("S.C. RPC 5.5, cmt. [4] (amended Mar. 15, 2023)", "Remote work in South Carolina does not establish an office or systematic presence if the lawyer's services are limited to those authorized by a jurisdiction where the lawyer is admitted and the lawyer does not state, imply, or hold out that the lawyer is a South Carolina lawyer.", "https://www.sccourts.org/opinions-orders/court-orders/order-detail/?order=2023-03-15-02")
    },
    HI: {
      remote: v("Haw. RPC 5.5, cmt. [3] (eff. July 1, 2022)", "Lawyers licensed elsewhere may remotely practice that jurisdiction's law while in Hawaii if they do not hold out as licensed in Hawaii, advertise a Hawaii office, provide or offer Hawaii legal services, or do anything connected to practice in Hawaii beyond being physically present.", "https://www.courts.state.hi.us/wp-content/uploads/2022/03/2022_hrpc5.5am_ada.pdf"),
      away: v("Haw. RPC 5.5, cmt. [3]", "Hawaii-licensed lawyers may practice remotely from outside Hawaii if the jurisdiction where they are physically present does not prohibit it.", "https://www.courts.state.hi.us/wp-content/uploads/2022/03/2022_hrpc5.5am_ada.pdf")
    },
    MI: {
      remote: v("Mich. Ethics Op. RI-382 (2021)", "An out-of-state lawyer physically located in Michigan but practicing exclusively the law of a jurisdiction where the lawyer is licensed does not violate Michigan Rule 5.5.", "https://www.michbar.org/opinions/ethics/numbered_opinions/RI-382")
    },
    WI: {
      remote: v("Wis. Formal Ethics Op. EF-21-02 (2021)", "Wisconsin's rule does not prohibit an out-of-state lawyer from representing clients of the licensing state from a private location in Wisconsin.", "https://www.wisbar.org/NewsPublications/WisconsinLawyer/Pages/Article.aspx?ArticleID=28330")
    },
    WA: {
      remote: v("WSBA Advisory Op. 201601 (2016, amended 2022)", "Out-of-state lawyers may generally practice remotely from Washington if they limit their work to their licensing jurisdictions and do not hold out as available to practice in Washington.", "https://wsba.org/docs/default-source/legal-community/committees/committee-on-professional-ethics/201601-regarding-updated-opinion-on-remote-and-virtual-law-practice-.pdf?sfvrsn=180113f1_4"),
      residency: v("WSBA Advisory Op. 201601 (2016, amended 2022)", "Washington does not require a physical office, but an active Washington lawyer who lives outside Washington must file the name and street address of a resident agent in Washington with the WSBA.", "https://wsba.org/docs/default-source/legal-community/committees/committee-on-professional-ethics/201601-regarding-updated-opinion-on-remote-and-virtual-law-practice-.pdf?sfvrsn=180113f1_4"),
      away: v("WSBA Advisory Op. 201601 (2016, amended 2022)", "Washington-licensed lawyers may practice from a home office in another state, but should confirm their presence there is not unauthorized practice under that state's rules.", "https://wsba.org/docs/default-source/legal-community/committees/committee-on-professional-ethics/201601-regarding-updated-opinion-on-remote-and-virtual-law-practice-.pdf?sfvrsn=180113f1_4")
    }
  };

  var api = { ABA: ABA, STATES: STATES };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else { root.MJP = root.MJP || {}; Object.assign(root.MJP, api); }
})(this);
