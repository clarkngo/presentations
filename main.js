import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/plugin/highlight/monokai.css';

const params = new URLSearchParams(window.location.search);
const deck = params.get('deck') || 'demo-presentation';
const isVibeDeck = deck.includes('vibe-coding') && !deck.includes('thexmecha');
const isLifeDeck = deck.includes('clark') || deck.includes('meet-clark');
const isPipelineDeck = deck.includes('pipeline') || deck.includes('image-pipeline');
const isMechaDeck = deck.includes('thexmecha') || deck.includes('thex-mecha');
const isThemedDeck = isVibeDeck || isLifeDeck || isPipelineDeck || isMechaDeck;

const section = document.querySelector('[data-markdown]');

async function prepareMarkdown() {
  if (!section) return;

  const response = await fetch(`./decks/${deck}.md`);
  if (!response.ok) {
    throw new Error(`Failed to load deck: ${deck}`);
  }

  let markdown = await response.text();
  // Strip YAML frontmatter so it doesn't become a blank first slide
  markdown = markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');

  // Empty data-markdown = parse inline content (must keep the attribute)
  section.setAttribute('data-markdown', '');
  section.setAttribute('data-separator', '\r?\n---\r?\n');
  section.setAttribute('data-separator-vertical', '\r?\n--\r?\n');
  section.setAttribute('data-separator-notes', '^Note:');

  // Reveal reads textContent from a script/template node (not textarea.value)
  const template = document.createElement('script');
  template.type = 'text/template';
  template.setAttribute('data-template', '');
  template.textContent = markdown;
  section.replaceChildren(template);
}

async function init() {
  if (isVibeDeck) {
    document.documentElement.classList.add('deck-vibe');
    await import('./styles/vibe-coding.css');
    document.title = deck.includes('aviators')
      ? 'Vibe Coding for Future Aviators'
      : 'The Vibe Coding Revolution';
  } else if (isLifeDeck) {
    document.documentElement.classList.add('deck-life');
    await import('./styles/clark-life.css');
    document.title = 'Meet Clark Ngo';
  } else if (isPipelineDeck) {
    document.documentElement.classList.add('deck-pipeline');
    await import('./styles/pipeline.css');
    document.title = 'Incremental Image Pipeline';
  } else if (isMechaDeck) {
    document.documentElement.classList.add('deck-mecha');
    await import('./styles/thexmecha.css');
    document.title = 'ThexMecha — Vibe Coding Lab';
  } else {
    await import('reveal.js/dist/theme/white-contrast.css');
  }

  try {
    await prepareMarkdown();
  } catch (error) {
    console.error(error);
    if (section) {
      section.outerHTML = `<section><h2>Could not load deck</h2><p>${deck}</p></section>`;
    }
  }

  Reveal.initialize({
    hash: true,
    slideNumber: true,
    center: true,
    width: isThemedDeck ? 1100 : 960,
    height: isThemedDeck ? 900 : 700,
    margin: 0.04,
    transition: isThemedDeck ? 'slide' : 'fade',
    backgroundTransition: 'fade',
    plugins: [Markdown, Highlight],
    markdown: {
      verticalSeparator: '\r?\n--\r?\n',
    },
  });
}

init();
