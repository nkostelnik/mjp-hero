/*
 * Builds dist/mjp-hero.html: one self-contained file with the CSS and JS inlined,
 * for emailing or dropping on a work drive. index.html stays the source of truth.
 * Run with: npm run build
 */
var fs = require("fs");
var path = require("path");

var root = __dirname;
var html = fs.readFileSync(path.join(root, "index.html"), "utf8");

html = html.replace(/<link rel="stylesheet" href="([^"]+)">/g, function (_, href) {
  return "<style>\n" + fs.readFileSync(path.join(root, href), "utf8") + "</style>";
});

html = html.replace(/<script src="([^"]+)"><\/script>/g, function (_, src) {
  var js = fs.readFileSync(path.join(root, src), "utf8").replace(/<\/script/gi, "<\/script");
  return "<script>\n/* " + src + " */\n" + js + "</script>";
});

if (/<(link|script)[^>]+(href|src)=/.test(html)) throw new Error("An external file was not inlined.");

var pkg = require("./package.json");
html = html.replace("<title>MJP Hero</title>", "<title>MJP Hero</title>\n  <!-- Single-file build of MJP Hero v" + pkg.version + ". MIT License. -->");

fs.mkdirSync(path.join(root, "dist"), { recursive: true });
fs.writeFileSync(path.join(root, "dist", "mjp-hero.html"), html);
console.log("Wrote dist/mjp-hero.html (" + Math.round(html.length / 1024) + " KB)");
