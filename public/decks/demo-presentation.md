---
title: Demo Presentation
description: A sample deck showcasing Markdown lists and syntax-highlighted code.
---

# Welcome

A multi-presentation portfolio built with **Vite** and **Reveal.js**.

Slides are written entirely in Markdown — portable, version-controlled, and easy to edit.

---

## Why Markdown?

- Write slides in any text editor
- Use `---` for horizontal slide breaks
- Keep content separate from presentation chrome
- Deploy anywhere static files are hosted

---

## Code Highlighting

Syntax highlighting works out of the box:

```javascript
function createDeck(name) {
  const url = `./slide.html?deck=${name}`;
  return { name, url };
}

const demo = createDeck('demo-presentation');
console.log(`Open: ${demo.url}`);
```
