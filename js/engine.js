/*
 * MJP Hero: rules engine.
 *
 * analyze(input) takes the questionnaire answers and returns an issue-spotting report built
 * on ABA Model Rules 5.5, 8.5, 7.1, 1.1 and ABA Formal Ops. 495 and 498, plus state data for
 * the covered states. Pure function, no I/O, so it runs the same in the browser and in Node.
 *
 * input = {
 *   residence: "FL",                 // where the lawyer lives (code or "FOREIGN")
 *   workLocations: ["FL"],           // where the lawyer will physically work
 *   licensed: ["NY"],                // active U.S. licenses
 *   goodStanding: true,              // not disbarred or suspended anywhere
 *   clientLocations: ["NJ"],         // where the client is (code or "FOREIGN")
 *   practiceType: "private",         // "private" | "inhouse" | "fractional" | "federal" | "government"
 *   matterLaw: ["NY", "FED"],        // whose law the work mainly involves ("MULTI" = many states, in-house contracts)
 *   duration: "ongoing",             // "temporary" | "ongoing"
 *   holdOutIn: [],                   // where there is an office, public address, or advertising
 *   noPublicPresence: false,         // user confirmed there is none anywhere
 *   disclosesLimits: "yes",          // website/bio/letterhead say where admitted: "yes" | "no" | "na" (none exist)
 *   proceeding: "none",              // "none" | "court" | "adr"
 *   proceedingIn: "",                // code, or "FED" for a federal court
 *   phv: "na",                       // "admitted" | "will_seek" | "no" | "na"
 *   localCounsel: "no"               // "yes" | "no": locally admitted lawyer actively participates
 * }
 */
(function (root) {
  var J, A;
  if (typeof module !== "undefined" && module.exports) {
    J = require("./jurisdictions.js");
    A = require("./authorities.js");
  } else {
    J = root.MJP; A = root.MJP;
  }

  var RANK = { info: 0, ok: 1, caution: 2, risk: 3 };

  function uniq(arr) {
    var seen = {}, out = [];
    (arr || []).forEach(function (x) { if (x && !seen[x]) { seen[x] = true; out.push(x); } });
    return out;
  }

  function aba(key) { return { cite: A.ABA[key].cite, text: A.ABA[key].text, url: A.ABA[key].url, source: "aba" }; }
  function st(code, field) {
    var s = A.STATES[code];
    if (!s || !s[field]) return null;
    var c = s[field];
    return { cite: c.cite, text: c.text, verified: c.verified, checked: c.checked, url: c.url, source: "state", noRegistration: c.noRegistration, level: c.level };
  }
  function cites() {
    return Array.prototype.slice.call(arguments).filter(Boolean);
  }
  function f(level, text, citeList) { return { level: level, text: text, cites: citeList || [] }; }

  function maxLevel(findings) {
    var best = "info";
    findings.forEach(function (x) { if (RANK[x.level] > RANK[best]) best = x.level; });
    return best;
  }

  function list(codes) {
    var names = codes.map(J.nameOf);
    if (names.length <= 1) return names.join("");
    if (names.length === 2) return names[0] + " and " + names[1];
    return names.slice(0, -1).join(", ") + ", and " + names[names.length - 1];
  }

  function analyze(raw) {
    var inp = normalize(raw);
    var L = {};
    inp.licensed.forEach(function (c) { L[c] = true; });
    var isLic = function (c) { return !!L[c]; };

    var phys = uniq([inp.residence].concat(inp.workLocations));
    var usPhys = phys.filter(function (c) { return c !== "FOREIGN"; });
    var clients = inp.clientLocations;
    var law = inp.matterLaw;
    var lawStates = law.filter(function (c) { return c !== "FED" && c !== "MULTI"; });
    // "MULTI": in-house work under contracts governed by many different states' law.
    var multiLaw = law.indexOf("MULTI") >= 0;

    // Proxy for 5.5(c)(3) and (c)(4): the work arises out of or reasonably relates to practice
    // in a licensed jurisdiction if it involves licensed-state or federal law or a client there.
    var homeRelated = law.some(function (c) { return c === "FED" || isLic(c); }) ||
      clients.some(isLic);

    var sections = [];
    var recs = [];

    // ---------- Overview ----------
    var ov = [];
    if (!inp.licensed.length) {
      ov.push(f("risk", "You did not list any jurisdiction where you are licensed. Every multijurisdictional-practice exception assumes an active license somewhere in the U.S.", cites(aba("5.5(a)"))));
    }
    if (!inp.goodStanding) {
      ov.push(f("risk", "The temporary-practice and in-house/federal exceptions are only available to lawyers who are not disbarred or suspended in any jurisdiction. Resolve license status before relying on any exception below.", cites(aba("5.5(c)"), aba("5.5(d)(1)"))));
    }
    var offerPlaces = uniq(usPhys.concat(clients.filter(function (c) { return c !== "FOREIGN"; }), inp.holdOutIn))
      .filter(function (c) { return !isLic(c); });
    if (inp.licensed.length) {
      var t = "You are subject to discipline in " + list(inp.licensed) + " wherever your conduct occurs.";
      if (offerPlaces.length) t += " You may also be subject to discipline in " + list(offerPlaces) + " if you provide or offer legal services there.";
      ov.push(f("info", t, cites(aba("8.5(a)"))));
    }
    if (inp.proceeding === "court" && inp.proceedingIn) {
      ov.push(f("info", "Conduct connected with the court matter is generally governed by the rules of the jurisdiction where the tribunal sits (" + J.nameOf(inp.proceedingIn) + ").", cites(aba("8.5(b)(1)"))));
    } else if (usPhys.length) {
      ov.push(f("info", "For conduct outside a tribunal, the governing rules are generally those of where you act (" + list(usPhys) + "), unless the predominant effect of your conduct is elsewhere. ABA Op. 504 lists factors for finding the predominant effect: where the client is, where the transaction occurs, which law governs, your principal office and admissions, where other parties are, and which jurisdiction has the greatest interest.", cites(aba("8.5(b)(2)"), aba("Op 504"))));
    }
    var foreignLaw = lawStates.filter(function (c) { return !isLic(c); });
    if (foreignLaw.length) {
      ov.push(f("caution", "The work involves the law of " + list(foreignLaw) + ", where you are not licensed. Separate from authorization to practice, you need the knowledge to handle it competently or should associate someone who has it.", cites(aba("1.1"))));
    }
    if (inp.practiceType === "fractional") {
      ov.push(f("caution", "The in-house exception covers lawyers employed by the organization they advise, and several states' in-house registration programs require exclusive employment by one company. A fractional general counsel serving several companies, or a lawyer employed by a staffing agency and placed with a client, usually should not rely on it. This analysis treats you as outside counsel. If one company employs you directly and exclusively, choose In-house instead.",
        cites(aba("5.5(d)(1)"), aba("5.5 cmts"))));
      ov.push(f("info", "Working through a staffing agency or for several companies also raises conflict, confidentiality, and fee-arrangement questions. Run conflicts across every company you serve.",
        cites(aba("Op 88-356"))));
    }
    if (multiLaw) {
      if (inp.practiceType === "inhouse") {
        ov.push(f("ok", "As in-house counsel, advising your employer on contracts governed by many states' law is generally within the in-house exception. It is not limited to the law of the state where you are licensed. It covers only your employer and its affiliates, does not cover appearing in court or arbitration where pro hac vice is required, and you still need competence in each state's law that matters to a contract.",
          cites(aba("5.5(d)(1)"), aba("1.1"))));
      } else {
        ov.push(f("caution", "You chose \"Many states (in-house contracts)\" but did not select in-house practice in question 6. For outside clients, including fractional or agency engagements, advising on many states' law from a jurisdiction where you are licensed is generally treated as practice where you are, but it is not covered by the in-house exception. Add any state whose law is central to the work in question 7 for a state-by-state check.",
          cites(aba("5.5(c)(4)"), aba("8.5(b)(2)"), aba("1.1"))));
      }
    }
    sections.push({ jurisdiction: null, title: "Overview", findings: ov });

    // ---------- Licensed jurisdictions ----------
    inp.licensed.forEach(function (code) {
      var fs = [];
      var touched = usPhys.indexOf(code) >= 0 || clients.indexOf(code) >= 0 || law.indexOf(code) >= 0 ||
        inp.proceedingIn === code;
      if (touched) fs.push(f("ok", "You are licensed here, so Rule 5.5 does not limit your practice in " + J.nameOf(code) + ".", []));
      var away = st(code, "away");
      var outside = usPhys.filter(function (c) { return !isLic(c); }).concat(phys.indexOf("FOREIGN") >= 0 ? ["FOREIGN"] : []);
      if (away && outside.length) {
        fs.push(f("ok", "On working from " + list(outside) + ", " + J.nameOf(code) + "'s own guidance agrees: " + away.text, cites(away)));
      }
      var res = st(code, "residency");
      if (res && inp.residence && inp.residence !== code) {
        fs.push(f("caution", "You are licensed in " + J.nameOf(code) + " but live elsewhere. " + res.text, cites(res)));
      }
      if (fs.length) sections.push({ jurisdiction: code, licensed: true, title: J.nameOf(code) + " (licensed)", findings: fs });
    });

    // ---------- Unlicensed U.S. jurisdictions ----------
    var targets = uniq(usPhys
      .concat(clients, inp.holdOutIn, lawStates, inp.proceeding !== "none" ? [inp.proceedingIn] : [])
    ).filter(function (c) { return c && c !== "FOREIGN" && c !== "FED" && c !== "MULTI" && !isLic(c); });

    targets.forEach(function (code) {
      sections.push(analyzeUnlicensed(code));
    });

    function analyzeUnlicensed(code) {
      var name = J.nameOf(code);
      var present = usPhys.indexOf(code) >= 0;
      var isClient = clients.indexOf(code) >= 0;
      var lawHere = law.indexOf(code) >= 0;
      var held = inp.holdOutIn.indexOf(code) >= 0;
      var tribunal = inp.proceeding !== "none" && inp.proceedingIn === code;
      var fs = [];
      var pt = inp.practiceType;

      var rule = st(code, "rule");
      if (rule) {
        fs.push(f("info", name + "'s adopted rule governs here, not the Model Rule." + (rule.text ? " " + rule.text : ""), cites(rule, st(code, "upl"))));
      } else {
        fs.push(f("info", (A.STATES[code] ? "This tool covers " + name + "'s remote-work and related guidance but not its full rule set. " : "This tool has no " + name + "-specific data yet. ") + name + "'s adopted version of Rule 5.5 and its court rules may differ from the ABA Model Rule used below.", cites(aba("5.5(a)"))));
      }

      // Holding out
      if (held) {
        if (pt === "inhouse") {
          fs.push(f("caution", "An office in " + name + " serving only your employer is permitted, but you may not hold out to the public as admitted here. Advertising or taking outside clients would fall outside the in-house exception.", cites(aba("5.5(d)(1)"), aba("5.5(b)(2)"), aba("7.1"))));
        } else if (pt === "federal" || pt === "government") {
          fs.push(f(inp.disclosesLimits === "no" ? "risk" : "caution",
            "An office or public presence in " + name + " is permitted only for federally authorized practice, and only if your materials make clear that you are not admitted in " + name + " and that your practice is limited." +
            (inp.disclosesLimits === "no" ? " You indicated your materials do not state these limits." : ""),
            cites(aba("5.5(d)(2)"), aba("5.5(b)(2)"), aba("7.1"))));
        } else {
          fs.push(f("risk", "You have an office, public address, or advertising in " + name + ". That is the kind of local presence and holding out Rule 5.5(b) prohibits for a lawyer not admitted here, and it takes you outside ABA Op. 495.", cites(aba("5.5(b)(1)"), aba("5.5(b)(2)"), aba("7.1"), aba("Op 495"))));
        }
      }

      // Physically working here
      if (present) {
        if (pt === "inhouse") {
          var reg = st(code, "inHouse");
          fs.push(f("caution", "Working from " + name + " for your employer is generally permitted under the in-house exception, but " +
            (reg && reg.noRegistration ? name + " does not require in-house counsel to register." : reg ? name + " has an in-house registration or limited-license requirement you should satisfy." : "many states require in-house lawyers to register; check " + name + "'s rule.") +
            " The exception does not cover court appearances that require pro hac vice admission.",
            cites(aba("5.5(d)(1)"), aba("5.5 cmts"), reg)));
        } else if (pt === "federal") {
          if (lawHere) {
            fs.push(f("risk", "Federal authorization covers only the federal practice itself. Advising on " + name + " law from " + name + " is not covered.", cites(aba("5.5(d)(2)"), aba("Sperry"))));
          } else {
            fs.push(f("ok", "Practice limited to federal law that you are authorized to perform (for example, before a federal agency) may be carried on from " + name + ".", cites(aba("5.5(d)(2)"), aba("Sperry"))));
          }
        } else if (pt === "government") {
          fs.push(f("caution", "Government lawyers are often covered when federal or other law authorizes the work in " + name + ". Confirm the specific authority for your position.", cites(aba("5.5(d)(2)"))));
        } else if (!isClient && !lawHere && !held) {
          var remote = st(code, "remote");
          var remoteNarrow = remote && remote.level === "caution";
          if (remote && remote.level === "risk") {
            fs.push(f("risk", name + " has rejected the ABA Op. 495 approach. Working from " + name + " on an ongoing basis, even only on your licensed jurisdiction's matters, requires " + name + " admission unless another exception applies. " + remote.text,
              cites(remote, aba("Op 495"), aba("5.5(b)(1)"))));
          } else
          fs.push(f(remote && !remoteNarrow ? "ok" : "caution",
            "Working remotely from " + name + " on matters for your licensed jurisdiction, with no local office, advertising, or holding out, is generally permitted under ABA Op. 495" +
            (remoteNarrow ? ", but " + name + "'s own guidance is narrower. Check its conditions before relying on it." :
              remote ? ", and " + name + " has issued consistent guidance." :
              ". This tool has no " + name + "-specific remote-work authority, so confirm " + name + " has not taken a narrower view."),
            cites(aba("Op 495"), aba("Op 498"), aba("5.5(b)(1)"), remote)));
          if (A.STATES[code] && A.STATES[code].clientNotice && !(remote && remote.level === "risk")) {
            fs.push(f("caution", name + " requires you to tell each client that you are not licensed in " + name + ".", cites(remote)));
          }
        } else if (inp.duration === "ongoing") {
          fs.push(f("risk", "Working from " + name + " on an ongoing basis for " + (isClient ? name + " clients" : "") + (isClient && lawHere ? " and " : "") + (lawHere ? name + " law matters" : "") +
            " is the systematic and continuous local presence Rule 5.5(b)(1) prohibits, and it falls outside ABA Op. 495.",
            cites(aba("5.5(b)(1)"), aba("Op 495"))));
        } else {
          temporary(code, fs);
        }
      }

      // Not physically here, but the client or the law is here
      if (!present && (isClient || lawHere)) {
        var vih = st(code, "virtualInHouse");
        if (pt === "inhouse" && vih && isClient) {
          fs.push(f("risk", name + " requires a license even for in-house lawyers who serve a " + name + " company remotely from another state. " + vih.text, cites(vih, st(code, "inHouse"), aba("5.5 cmt4"))));
        } else if (pt === "inhouse") {
          fs.push(f("ok", "Advising your employer or its affiliates located in " + name + " is within the in-house exception.", cites(aba("5.5(d)(1)"))));
        } else if (pt === "federal" && !lawHere) {
          fs.push(f("ok", "Federally authorized practice for a client in " + name + " is generally permitted.", cites(aba("5.5(d)(2)"))));
        } else if (inp.duration === "ongoing" && lawHere) {
          fs.push(f("risk", "Regularly practicing " + name + " law for clients, even from outside " + name + ", can be a systematic and continuous presence without physical presence.", cites(aba("5.5 cmt4"), aba("5.5(b)(1)"))));
        } else if (inp.duration === "temporary") {
          temporary(code, fs);
        } else {
          fs.push(f("caution", "Representing a client located in " + name + " from a jurisdiction where you are licensed, on your licensed jurisdiction's law or federal law, is generally treated as practice where you are. A steady stream of " + name + " clients can still become a virtual systematic presence, and " + name + "'s rules may apply if the predominant effect of your work is there.", cites(aba("5.5 cmt4"), aba("8.5(b)(2)"))));
        }
      }

      // Tribunal here
      if (tribunal) {
        var phv = st(code, "phv");
        if (inp.proceeding === "court") {
          if (inp.phv === "admitted") {
            fs.push(f("ok", "You are admitted pro hac vice for the proceeding in " + name + ", which authorizes the appearance and related work.", cites(aba("5.5(c)(2)"), phv)));
          } else if (inp.phv === "will_seek") {
            fs.push(f("caution", "Preparatory work is covered while you reasonably expect pro hac vice admission. Do not appear or file until admitted, and check " + name + "'s limits on pro hac vice.", cites(aba("5.5(c)(2)"), phv)));
          } else if (inp.localCounsel === "yes") {
            fs.push(f("caution", "Without pro hac vice admission you may assist the " + name + "-admitted lawyer who appears, but you may not appear, sign filings, or argue yourself.", cites(aba("5.5(c)(2)"), aba("5.5(c)(1)"), phv)));
          } else {
            fs.push(f("risk", "The matter is before a " + name + " tribunal, and neither you nor a lawyer you are assisting is (or expects to be) authorized to appear. Seek pro hac vice admission or associate " + name + " counsel.", cites(aba("5.5(c)(2)"), phv)));
          }
        } else if (inp.proceeding === "adr") {
          var adr = st(code, "adr");
          fs.push(f(homeRelated ? "caution" : "risk",
            "Temporary work on an arbitration or mediation in " + name + " is permitted if it arises out of or reasonably relates to your licensed-jurisdiction practice and the forum does not require pro hac vice." +
            (adr ? " " + name + " imposes its own conditions on out-of-state arbitration counsel." : ""),
            cites(aba("5.5(c)(3)"), adr)));
        }
      }

      // State-specific warnings
      var s = A.STATES[code];
      if (s && s.notes && (isClient || lawHere || present)) {
        s.notes.forEach(function (n) { fs.push(f("caution", n, [{ cite: n.split(":")[0], text: "", verified: false, source: "state" }])); });
      }

      var roles = [];
      if (present) roles.push(code === inp.residence ? "you live here" : "you work here");
      if (isClient) roles.push("client is here");
      if (lawHere) roles.push("matter involves this law");
      if (held) roles.push("office or advertising here");
      if (tribunal) roles.push(inp.proceeding === "court" ? "court is here" : "ADR is here");

      return { jurisdiction: code, licensed: false, title: name + " (not licensed)", roles: roles, findings: fs };
    }

    function temporary(code, fs) {
      var name = J.nameOf(code);
      if (!inp.goodStanding) {
        fs.push(f("risk", "Temporary practice in " + name + " is unavailable while you are disbarred or suspended anywhere.", cites(aba("5.5(c)"))));
        return;
      }
      var harbors = [];
      if (inp.localCounsel === "yes") harbors.push(aba("5.5(c)(1)"));
      if (inp.proceeding === "court" && (inp.phv === "admitted" || inp.phv === "will_seek" || inp.localCounsel === "yes")) harbors.push(aba("5.5(c)(2)"));
      if (inp.proceeding === "adr" && homeRelated) harbors.push(aba("5.5(c)(3)"));
      if (homeRelated) harbors.push(aba("5.5(c)(4)"));
      var temp = st(code, "temp");
      if (harbors.length) {
        fs.push(f("caution", "Temporary work touching " + name + " can fit " + harbors.map(function (h) { return h.cite.replace("ABA Model Rule ", ""); }).join(", ") +
          ", if the facts match the conditions listed in the citations." + (temp ? " " + name + " implements temporary practice through its own rules; check them." : ""),
          harbors.concat(cites(temp))));
      } else {
        fs.push(f("risk", "No temporary-practice safe harbor appears to apply: no local co-counsel, no authorized court appearance, and the work does not clearly arise from your licensed-jurisdiction practice.", cites(aba("5.5(c)"), temp)));
      }
    }

    // ---------- Federal court ----------
    if (inp.proceeding === "court" && inp.proceedingIn === "FED") {
      sections.push({ jurisdiction: "FED", title: "Federal court", findings: [
        f("caution", "Admission to a federal district court is governed by that court's local rules. A state license does not by itself admit you; many districts require admission to their own bar or pro hac vice, sometimes with local counsel.", cites(aba("5.5(c)(2)"), aba("8.5(b)(1)")))
      ] });
    }

    // ---------- Outside the U.S. ----------
    if (phys.indexOf("FOREIGN") >= 0 || clients.indexOf("FOREIGN") >= 0) {
      var fr = [];
      if (phys.indexOf("FOREIGN") >= 0) fr.push(f("caution", "Working from outside the U.S. is beyond this tool's scope. The host country may regulate legal practice by foreign lawyers, and your U.S. licensing jurisdictions' rules still apply to you.", cites(aba("8.5(a)"))));
      if (clients.indexOf("FOREIGN") >= 0) fr.push(f("info", "A client outside the U.S. may bring in foreign rules on legal practice or where the predominant effect of your work falls. This tool does not analyze foreign law.", cites(aba("8.5(b)(2)"))));
      sections.push({ jurisdiction: "FOREIGN", title: "Outside the United States", findings: fr });
    }

    // ---------- Recommendations ----------
    var all = [];
    sections.forEach(function (s) { s.level = maxLevel(s.findings); all = all.concat(s.findings); });
    var overall = maxLevel(all);
    if (overall === "info") overall = "ok";

    if (overall === "risk") {
      recs.push("Resolve the red items before doing the work. Common fixes: seek admission (admission on motion or transferring a UBE score where available), associate a locally admitted lawyer who actively participates, seek pro hac vice admission, or restructure so there is no local office, advertising, or holding out.");
    }
    var unlicPhys = usPhys.filter(function (c) { return !isLic(c); });
    var limitExample = "\"Admitted only in " + (inp.licensed[0] ? J.nameOf(inp.licensed[0]) : "[state]") + ".\"";
    if (unlicPhys.length && inp.disclosesLimits === "no") {
      recs.push("State your admission limits on your website, bio, letterhead, and email signature, for example " + limitExample);
    } else if (unlicPhys.length && inp.disclosesLimits === "na") {
      recs.push("If you later create a website, bio, letterhead, or email signature, state your admission limits on it, for example " + limitExample);
    } else if (unlicPhys.length) {
      recs.push("Keep the admission-limit statement on your website, bio, letterhead, and email signature, and avoid listing a " + list(unlicPhys) + " address as an office.");
    }
    if (inp.practiceType === "inhouse" && unlicPhys.length) {
      recs.push("Check in-house registration requirements and deadlines in " + list(unlicPhys) + "; some states impose deadlines measured from when you start working there.");
    }
    var invisibleOk = unlicPhys.filter(function (c) { var r = st(c, "remote"); return !(r && r.level === "risk"); });
    if (unlicPhys.length && (inp.practiceType === "private" || inp.practiceType === "fractional")) {
      recs.push("Keep the work tied to your licensed jurisdiction's law or federal law, and decline or refer matters that are really about local law for local clients.");
      if (invisibleOk.length) recs.push("Stay \"invisible as a lawyer\" in " + list(invisibleOk) + " (ABA Op. 495): no local address on your website, letterhead, cards, directory profiles, or ads. If you list an address in your licensed state where you are not regularly present, mark it \"by appointment only\" or \"for mail delivery.\"");
    }
    var noticeStates = unlicPhys.filter(function (c) { return A.STATES[c] && A.STATES[c].clientNotice; });
    if (noticeStates.length) {
      recs.push("Tell each client in writing, for example in your engagement letter, that you are not licensed in " + list(noticeStates) + ".");
    }
    var remoteWork = unlicPhys.length || clients.some(function (c) { return c !== "FOREIGN" && usPhys.indexOf(c) < 0; });
    if (remoteWork) {
      recs.push("For remote or virtual work, follow ABA Op. 498: use strong passwords and current security updates, secure your home Wi-Fi, vet vendors' confidentiality terms, store meeting recordings securely, turn off smart speakers and voice assistants during client work, supervise anyone working remotely for you, and describe your technology use in the engagement letter.");
    }
    if (targets.length || inp.licensed.length > 1) {
      recs.push("Decide which jurisdiction's ethics rules govern the engagement and note your reasoning in the file or engagement letter, using the predominant-effect factors in ABA Op. 504. Rule 8.5(b) protects a reasonable belief about where the predominant effect falls.");
    }
    recs.push("Confirm the current text of each rule cited, since states amend these rules and issue new opinions. Most state bars run a free ethics hotline for questions like this.");

    // Citation index
    var seen = {}, citations = [];
    all.forEach(function (x) {
      x.cites.forEach(function (c) {
        if (!seen[c.cite]) { seen[c.cite] = true; citations.push(c); }
      });
    });

    var headline = {
      ok: "No obvious problems found",
      caution: "Generally permitted if conditions are met",
      risk: "Likely unauthorized-practice problems"
    }[overall];

    return { overall: overall, headline: headline, sections: sections, recommendations: recs, citations: citations };
  }

  function normalize(raw) {
    raw = raw || {};
    return {
      residence: raw.residence || "",
      workLocations: uniq(raw.workLocations),
      licensed: uniq(raw.licensed),
      goodStanding: raw.goodStanding !== false,
      clientLocations: uniq(raw.clientLocations),
      practiceType: raw.practiceType || "private",
      matterLaw: uniq(raw.matterLaw),
      duration: raw.duration === "temporary" ? "temporary" : "ongoing",
      holdOutIn: raw.noPublicPresence ? [] : uniq(raw.holdOutIn),
      noPublicPresence: !!raw.noPublicPresence,
      disclosesLimits: raw.disclosesLimits === false || raw.disclosesLimits === "no" ? "no"
        : raw.disclosesLimits === "na" ? "na" : "yes",
      proceeding: raw.proceeding || "none",
      proceedingIn: raw.proceeding && raw.proceeding !== "none" ? (raw.proceedingIn || "") : "",
      phv: raw.phv || "na",
      localCounsel: raw.localCounsel === "yes" ? "yes" : "no"
    };
  }

  var api = { analyze: analyze };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else { root.MJP = root.MJP || {}; Object.assign(root.MJP, api); }
})(this);
