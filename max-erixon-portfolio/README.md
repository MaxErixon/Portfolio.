# Max Erixon - Graphic Design & Production Portfolio (Version 10)

A static, responsive portfolio made with HTML, CSS and JavaScript. No build steps, dependencies or external JavaScript libraries.

## Project pages

- `index.html` - homepage with Max's selected Version 5 hero, four original portfolio projects, focused tools/background and contact.
- `projects/camping-bar.html` - three-sign mockup, venue/quiz posters, festival menu and Instagram graphic.
- `projects/moneybear.html` - updated real mockup hero, social assets, LinkedIn graphic, two real newsletter excerpts with links to published newsletters, print roll-up, offer sheet and customer overview.
- `projects/bokslutsakuten.html` - website link, social advertisement and a five-slide original Instagram carousel.
- `projects/editorial-presentations.html` - selected slides from two academic presentations, complete PDFs and a local MP4 of the scrollytelling thesis prototype.

There is no filler project. The previous illustrative Web & Digital page and unused placeholder assets were removed. Web work is represented by the real Moneybear, Bokslutsakuten and thesis projects.

## Notes about authorship

- The images are work supplied for this portfolio; the hero mockups are **presentational composites**, not literal screenshots of live websites.
- University presentations were **group projects**. The page credits collaborators; it does not claim sole authorship.
- Employment titles are kept accurate: Web administrator at Moneybear, and Shift manager at Camping Malmö. Graphic work is shown as work completed alongside those roles.
- AI tools are mentioned based on the CV, but there are no claims of expertise in a specific AI product or of AI-generated work samples not supplied.

## Contact and editing

- Main content and introduction: `index.html`.
- Project descriptions: `projects/*.html`.
- Layout and colors: `assets/styles.css`.
- Mobile menu and Instagram carousel interactions: `assets/main.js`.
- Images: `assets/images/`.
- Full university presentations: `assets/documents/`.
- Website prototype video: `assets/videos/`.
- The email link currently points to `maxerixon112@gmail.com` (from the supplied CV). Change it throughout the site if needed before publishing.

## GitHub Pages hosting (when ready)

1. Unzip this archive.
2. Upload the **contents** of the unzipped folder to the root of your GitHub repository. `index.html`, `assets/` and `projects/` should be siblings in the repository root.
3. On GitHub go to **Settings > Pages > Build and deployment**. Select **Deploy from a branch**, `main`, and `/(root)`.
4. Your URL will use the pattern `https://USERNAME.github.io/REPO/`. Internal links are relative and work under a repository subpath.

**Before publishing publicly:** Check that you are allowed to display Moneybear customer documents, marketing materials, partner branding and both university group presentations. Files in the website directory (including PDF slides and the video) are publicly accessible once published. Review any prices, customer information and dated offers for context.

## Quality checks carried out for Version 10

- HTML and CSS image paths were checked against the actual packaged files. Unused SVG placeholder graphics were removed.
- Four portfolio cards and four working project destinations.
- Browser-rendered desktop and mobile layouts with all local image assets inlined for testing (standard local page navigation was restricted by the browser test environment).
- No horizontal overflow or browser JavaScript errors in the tested page views.
- Mobile navigation open/close checked, and the five-slide carousel advanced from slide 1 to 2 using the next control.
- Original PDFs and local MP4 are retained.

The site has **not** been published, and live GitHub Pages delivery, third-party newsletter URL availability and a full external accessibility audit were not verified. Test the published URL before sending it to a recruiter.
