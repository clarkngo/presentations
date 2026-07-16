Act as an expert Front-End Architect. I want to build a clean, multi-presentation portfolio hosted on GitHub Pages using Vite and Reveal.js. 

The goal of this architecture is to write slides entirely in Markdown (.md) so they are highly portable and incredibly easy to edit. A single shell page ("slide.html") will dynamically load the requested Markdown deck from a URL parameter.

Please execute the following steps to set up this workspace:

1. INITIALIZE PROJECT CONFIGURATIONS:
- Create a `package.json` with "vite" and "reveal.js" (v5.1.0 or latest) as dependencies. Include "dev", "build", and "preview" scripts.
- Create a `vite.config.js` file configured to output both `index.html` (the landing page/hub) and `slide.html` (the presentation viewer) using Rollup's input options. Ensure the base path is set to './' so asset paths resolve correctly on GitHub Pages.

2. CREATE DIRECTORY STRUCTURE:
- Create a folder named `public/`.
- Inside `public/`, create a folder named `decks/` where my Markdown presentation files will live.

3. CREATE FRONT-END PAGES:
- Create `index.html` in the root: This should be a clean, dark-themed index dashboard that lists available presentations and links to them (e.g., `<a href="./slide.html?deck=demo-presentation">`).
- Create `slide.html` in the root: This is the Reveal.js container shell. It must look for an element with `data-markdown` and use relative pathing to resolve CSS/JS.
- Create `main.js` in the root: This script must parse the `?deck=` parameter from the URL, dynamically set the `data-markdown` attribute of the Reveal.js container to `./decks/[deckName].md`, and initialize Reveal.js with the Markdown and Highlight (code highlighting) plugins.

4. CREATE A DEMO PRESENTATION:
- Create a file named `public/decks/demo-presentation.md`. Fill it with a high-quality 3-slide demo. Use '---' for horizontal slide transitions, include a clean Markdown list, and a syntax-highlighted code block to test code formatting.

5. RUN INSTALLATION:
- Run the terminal command to install the dependencies (`npm install`).

Let me know once the files are written and the dependencies are installed, and tell me how to run the local dev server to test it.