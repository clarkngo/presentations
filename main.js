import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import 'reveal.js/plugin/highlight/monokai.css';

const params = new URLSearchParams(window.location.search);
const deck = params.get('deck') || 'demo-presentation';

const section = document.querySelector('[data-markdown]');
if (section) {
  section.setAttribute('data-markdown', `./decks/${deck}.md`);
}

Reveal.initialize({
  hash: true,
  slideNumber: true,
  plugins: [Markdown, Highlight],
});
