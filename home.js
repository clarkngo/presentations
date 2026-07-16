const searchInput = document.getElementById('search');
const deckList = document.getElementById('deck-list');
const emptyState = document.getElementById('empty-state');
const deckCount = document.getElementById('deck-count');

let decks = [];

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function filterDecks(query) {
  const normalized = query.toLowerCase().trim();
  if (!normalized) return decks;

  return decks.filter(
    (deck) =>
      deck.title.toLowerCase().includes(normalized) ||
      deck.description.toLowerCase().includes(normalized) ||
      deck.id.toLowerCase().includes(normalized)
  );
}

function render(query = '') {
  const filtered = filterDecks(query);

  deckList.innerHTML = filtered
    .map(
      (deck) => `
        <li>
          <a href="./slide.html?deck=${encodeURIComponent(deck.id)}">
            <div class="deck-title">${escapeHtml(deck.title)}</div>
            <div class="deck-desc">${escapeHtml(deck.description)}</div>
          </a>
        </li>
      `
    )
    .join('');

  const total = decks.length;
  const visible = filtered.length;
  const searching = query.trim().length > 0;

  deckCount.textContent = searching
    ? `${visible} of ${total} presentation${total === 1 ? '' : 's'}`
    : `${total} presentation${total === 1 ? '' : 's'}`;

  emptyState.hidden = visible > 0;
  deckList.hidden = visible === 0;
}

async function init() {
  const response = await fetch('./decks.json');
  if (!response.ok) {
    throw new Error('Failed to load presentation list.');
  }

  decks = await response.json();
  render();

  searchInput.addEventListener('input', (event) => {
    render(event.target.value);
  });
}

init().catch(() => {
  deckCount.textContent = 'Could not load presentations';
  emptyState.hidden = false;
  emptyState.textContent = 'Unable to load the presentation list.';
  deckList.hidden = true;
});
