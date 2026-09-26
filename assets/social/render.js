/*
 * Renders the social preview image and the README screenshot with headless Chrome or Edge.
 * Run with: npm run social
 */
var fs = require("fs");
var path = require("path");
var execFileSync = require("child_process").execFileSync;
var pathToFileURL = require("url").pathToFileURL;

var candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium"
].filter(Boolean);
var browser = candidates.filter(function (p) { return fs.existsSync(p); })[0];
if (!browser) throw new Error("No Chrome or Edge found. Set CHROME_PATH.");

var root = path.join(__dirname, "..", "..");

function shoot(url, out, w, h) {
  execFileSync(browser, [
    "--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1",
    "--virtual-time-budget=2000", "--window-size=" + w + "," + h, "--screenshot=" + out, url
  ], { stdio: "ignore" });
  console.log("Wrote " + path.relative(root, out));
}

shoot(pathToFileURL(path.join(__dirname, "social.html")).href, path.join(root, "assets", "social-preview.png"), 1280, 640);
shoot(pathToFileURL(path.join(root, "index.html")).href + "#demo", path.join(root, "assets", "screenshot.png"), 1280, 900);
