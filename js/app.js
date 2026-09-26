/* MJP Hero: UI. Reads the form, runs MJP.analyze, renders the report. Nothing is stored or sent. */
(function () {
  var M = window.MJP;
  var form = document.getElementById("form");
  var out = document.getElementById("results");
  var picks = {}; // field -> array of codes

  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "class") n.className = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }

  function options(select, opts) {
    select.innerHTML = "";
    select.appendChild(el("option", { value: "", text: opts.placeholder || "Choose..." }));
    if (opts.federal) select.appendChild(el("option", { value: "FED", text: "U.S. federal law" }));
    if (opts.federalCourt) select.appendChild(el("option", { value: "FED", text: "Federal court" }));
    M.JURISDICTIONS.forEach(function (j) { select.appendChild(el("option", { value: j.code, text: j.name })); });
    if (opts.foreign) select.appendChild(el("option", { value: "FOREIGN", text: "Outside the United States" }));
  }

  // Single selects
  options(document.getElementById("residence"), { foreign: true });
  options(document.getElementById("proceedingIn"), { federalCourt: true });

  // Multi pickers: a select that adds removable chips
  Array.prototype.forEach.call(document.querySelectorAll(".picker"), function (box) {
    var field = box.getAttribute("data-field");
    picks[field] = [];
    var sel = el("select", { "aria-label": "Add a jurisdiction" });
    options(sel, { placeholder: "Add...", foreign: box.hasAttribute("data-foreign"), federal: box.hasAttribute("data-federal") });
    var chips = el("div", { class: "chips" });
    box.appendChild(chips);
    box.appendChild(sel);
    sel.addEventListener("change", function () {
      if (sel.value && picks[field].indexOf(sel.value) < 0) picks[field].push(sel.value);
      sel.value = "";
      drawChips();
      update();
    });
    function drawChips() {
      chips.innerHTML = "";
      picks[field].forEach(function (code) {
        var b = el("button", { type: "button", class: "chip", "aria-label": "Remove " + M.nameOf(code) }, [M.nameOf(code), el("span", { "aria-hidden": "true", text: " x" })]);
        b.addEventListener("click", function () {
          picks[field] = picks[field].filter(function (c) { return c !== code; });
          drawChips();
          update();
        });
        chips.appendChild(b);
      });
    }
    box._draw = drawChips;
  });

  function radio(name) {
    var r = form.querySelector('input[name="' + name + '"]:checked');
    return r ? r.value : "";
  }

  function read() {
    var residence = document.getElementById("residence").value;
    var proceeding = radio("proceeding");
    return {
      residence: residence,
      // If no work location is given, assume the lawyer works where they live.
      workLocations: picks.workLocations.length ? picks.workLocations : (residence ? [residence] : []),
      licensed: picks.licensed,
      goodStanding: radio("goodStanding") !== "no",
      clientLocations: picks.clientLocations,
      practiceType: radio("practiceType"),
      matterLaw: picks.matterLaw,
      duration: radio("duration"),
      holdOutIn: picks.holdOutIn,
      disclosesLimits: radio("disclosesLimits") || "yes",
      proceeding: proceeding,
      proceedingIn: document.getElementById("proceedingIn").value,
      phv: proceeding === "court" ? radio("phv") : "na",
      localCounsel: radio("localCounsel")
    };
  }

  function toggleConditional() {
    var p = radio("proceeding");
    Array.prototype.forEach.call(form.querySelectorAll("[data-show]"), function (q) {
      var want = q.getAttribute("data-show");
      q.hidden = want === "proceeding" ? p === "none" : p !== want;
    });
  }

  var LEVEL_LABEL = { ok: "Generally permitted", caution: "Conditions apply", risk: "Likely problem", info: "Note" };

  // Tag for a state citation: "verify" if unchecked, or a link to the source it was checked against.
  function stateTag(c) {
    if (c.source !== "state") return null;
    if (c.verified === false) return el("span", { class: "verify", text: "verify" });
    if (c.url) return el("a", { class: "src", href: c.url, target: "_blank", rel: "noopener noreferrer", title: "Checked " + (c.checked || ""), text: "source" });
    return null;
  }

  function citeList(cites) {
    if (!cites.length) return null;
    return el("ul", { class: "cites" }, cites.map(function (c) {
      return el("li", {}, [c.cite, stateTag(c)]);
    }));
  }

  function render(input) {
    out.innerHTML = "";
    var missing = [];
    if (!input.residence) missing.push("where you live");
    if (!input.licensed.length) missing.push("where you are licensed");
    if (!input.clientLocations.length) missing.push("where the client is");
    if (missing.length) {
      out.appendChild(el("div", { class: "empty" }, [
        el("h2", { text: "Your analysis will appear here" }),
        el("p", { text: "Still needed: " + missing.join(", ") + "." })
      ]));
      return;
    }

    var r = M.analyze(input);

    out.appendChild(el("div", { class: "headline lvl-" + r.overall }, [
      el("span", { class: "pill lvl-" + r.overall, text: LEVEL_LABEL[r.overall] }),
      el("h2", { text: r.headline })
    ]));

    var actions = el("div", { class: "actions" });
    var copy = el("button", { type: "button", class: "btn", text: "Copy as text" });
    copy.addEventListener("click", function () {
      var txt = asText(r);
      var done = function () { copy.textContent = "Copied"; setTimeout(function () { copy.textContent = "Copy as text"; }, 1500); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(done, function () { fallbackCopy(txt); done(); });
      else { fallbackCopy(txt); done(); }
    });
    var print = el("button", { type: "button", class: "btn ghost", text: "Print or save as PDF" });
    print.addEventListener("click", function () { window.print(); });
    actions.appendChild(copy);
    actions.appendChild(print);
    out.appendChild(actions);

    out.appendChild(el("h3", { text: "Recommendation" }));
    out.appendChild(el("ol", { class: "recs" }, r.recommendations.map(function (t) { return el("li", { text: t }); })));

    out.appendChild(el("h3", { text: "By jurisdiction" }));
    r.sections.forEach(function (s) {
      var card = el("article", { class: "card lvl-" + s.level });
      var head = el("header", {}, [el("h4", { text: s.title }), s.level !== "info" ? el("span", { class: "pill lvl-" + s.level, text: LEVEL_LABEL[s.level] }) : null]);
      card.appendChild(head);
      if (s.roles && s.roles.length) card.appendChild(el("p", { class: "roles", text: s.roles.join(" · ") }));
      s.findings.forEach(function (x) {
        card.appendChild(el("div", { class: "finding lvl-" + x.level }, [
          el("span", { class: "dot", "aria-label": LEVEL_LABEL[x.level] }),
          el("div", {}, [el("p", { text: x.text }), citeList(x.cites)])
        ]));
      });
      out.appendChild(card);
    });

    out.appendChild(el("h3", { text: "Rules and authorities cited" }));
    out.appendChild(el("dl", { class: "authorities" }, r.citations.reduce(function (acc, c) {
      acc.push(el("dt", {}, [c.cite, stateTag(c)]));
      if (c.text) acc.push(el("dd", { text: c.text }));
      else acc.push(el("dd", { class: "muted", text: "See the finding above." }));
      return acc;
    }, [])));

    out.appendChild(el("p", { class: "disclaimer", text: "This is an issue-spotting aid, not legal advice. It does not create an attorney-client relationship. Confirm the current text of every rule and consult ethics counsel or your state bar's ethics hotline." }));
  }

  function asText(r) {
    var lines = ["MJP Hero analysis (not legal advice)", "", "Result: " + r.headline, "", "Recommendation:"];
    r.recommendations.forEach(function (t, i) { lines.push((i + 1) + ". " + t); });
    r.sections.forEach(function (s) {
      lines.push("", s.title + (s.level !== "info" ? " [" + LEVEL_LABEL[s.level] + "]" : ""));
      s.findings.forEach(function (x) {
        lines.push("- " + x.text);
        if (x.cites.length) lines.push("  Cites: " + x.cites.map(function (c) { return c.cite; }).join("; "));
      });
    });
    lines.push("", "Authorities:");
    r.citations.forEach(function (c) { lines.push("- " + c.cite + (c.source === "state" && c.verified === false ? " (verify)" : c.url ? " <" + c.url + ">" : "")); });
    lines.push("", "Issue-spotting aid only. Confirm current rules and consult ethics counsel.");
    return lines.join("\n");
  }

  function fallbackCopy(txt) {
    var ta = el("textarea", {});
    ta.value = txt;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
  }

  function update() {
    toggleConditional();
    render(read());
  }

  form.addEventListener("change", update);
  document.getElementById("reset").addEventListener("click", function () {
    form.reset();
    Object.keys(picks).forEach(function (k) { picks[k] = []; });
    Array.prototype.forEach.call(document.querySelectorAll(".picker"), function (b) { b._draw(); });
    update();
    window.scrollTo(0, 0);
  });

  update();
})();
