import fs from 'fs';
import path from 'path';

function parseDeckMeta(content, id) {
  let body = content;
  let title = null;
  let description = null;

  const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (frontmatterMatch) {
    body = content.slice(frontmatterMatch[0].length);
    for (const line of frontmatterMatch[1].split('\n')) {
      const colonIndex = line.indexOf(':');
      if (colonIndex === -1) continue;
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();
      if (key === 'title') title = value;
      if (key === 'description') description = value;
    }
  }

  if (!title) {
    const heading = body.match(/^#\s+(.+)$/m);
    title = heading ? heading[1].trim() : id;
  }

  if (!description) {
    const paragraph = body
      .split(/\n\s*\n/)
      .map((block) => block.trim())
      .find(
        (block) =>
          block &&
          !block.startsWith('#') &&
          !block.startsWith('---') &&
          !block.startsWith('-') &&
          !block.startsWith('```')
      );

    description = paragraph
      ? paragraph.replace(/\*\*/g, '').replace(/\n/g, ' ').trim()
      : '';
  }

  return { id, title, description };
}

export function generateDecksManifest(decksDir, outFile) {
  if (!fs.existsSync(decksDir)) {
    fs.writeFileSync(outFile, '[]\n');
    return [];
  }

  const decks = fs
    .readdirSync(decksDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const id = file.replace(/\.md$/, '');
      const content = fs.readFileSync(path.join(decksDir, file), 'utf-8');
      return parseDeckMeta(content, id);
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  fs.writeFileSync(outFile, `${JSON.stringify(decks, null, 2)}\n`);
  return decks;
}

export function decksManifestPlugin() {
  const decksDir = path.resolve('public/decks');
  const outFile = path.resolve('public/decks.json');

  function generate() {
    generateDecksManifest(decksDir, outFile);
  }

  return {
    name: 'decks-manifest',
    buildStart() {
      generate();
    },
    configureServer(server) {
      generate();
      server.watcher.add(decksDir);
      server.watcher.on('all', (_event, file) => {
        if (file.endsWith('.md') && file.includes(`${path.sep}decks${path.sep}`)) {
          generate();
        }
      });
    },
  };
}
