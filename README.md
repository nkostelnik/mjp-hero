# MJP Hero

An offline issue-spotter for a lawyer's multijurisdictional practice. Answer where you live, where you work, where you are licensed, and where the client is (plus a few follow-ups), and MJP Hero gives a recommendation with citations to the relevant rules of professional conduct.

**Not legal advice.** This is an issue-spotting aid. Rules vary by state and change often. Verify every citation and consult ethics counsel or your state bar's ethics hotline.

## Privacy and offline use

- No server, no build step, no dependencies. It is plain HTML, CSS, and JavaScript.
- It makes no network requests. A Content-Security-Policy (`connect-src 'none'`) blocks outbound connections, and there are no external fonts, scripts, or analytics.
- Answers are not saved anywhere, not even in browser storage. Closing the tab erases them.

That makes it suitable for locked-down work environments: copy the folder to a shared drive or intranet server and open `index.html`.

## Running it

- **Locally:** open `index.html` in a browser, or run `npm start` and visit http://localhost:5195.
- **GitHub Pages:** push the folder to a repository and enable Pages on the branch root.
- **Single file for work:** `npm run build` writes `dist/mjp-hero.html`, one self-contained file with the CSS and JavaScript inlined. Email it or put it on a shared drive; it opens by double-click.
- **Tests:** `npm test` runs the rules-engine tests in Node.

## What it analyzes

For every jurisdiction your facts touch, it checks:

- Physical presence where you are not licensed (ABA Model Rule 5.5(b), ABA Formal Op. 495 on remote work, Op. 498 on virtual practice)
- Holding out, offices, and advertising (5.5(b)(2), 7.1)
- Temporary practice safe harbors (5.5(c)(1) to (c)(4))
- In-house and federally authorized practice (5.5(d)(1), (d)(2), *Sperry v. Florida*)
- Court and ADR proceedings, pro hac vice, and local counsel
- Disciplinary authority and choice of law (8.5(a), 8.5(b))
- Competence when another jurisdiction's law is involved (1.1)

State-specific data (adopted rule, unauthorized-practice statute, temporary practice, in-house registration, pro hac vice, remote-work guidance) is included for CA, NY, TX, FL, IL, DC, NJ, PA, MA, and VA. Other jurisdictions fall back to the Model Rule with a note that the local version may differ.

State citations are marked **verify** in the app until they have been checked against the current official source. To mark one verified, set `verified: true` on its entry in `js/authorities.js`.

## Files

| File | Purpose |
| --- | --- |
| `js/jurisdictions.js` | Jurisdiction list |
| `js/authorities.js` | ABA and state citation library |
| `js/engine.js` | Rules engine (`MJP.analyze`), pure and testable |
| `js/app.js` | Form, rendering, copy and print |
| `test/engine.test.js` | Engine tests |
| `build.js` | Single-file build |

## License

MIT. See [LICENSE](LICENSE).
