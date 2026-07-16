---
title: ThexMecha — Vibe Coding Lab
description: A 40–50 minute incremental web engineering lab — build a T-Hex Mecha command simulator with vanilla HTML, CSS, and JS.
---

<!-- .slide: data-state="title" -->
## ThexMecha

<p class="eyebrow">Mini-Project 2 · Web Engineering Lab</p>

### Vibe Code a Mecha Command Simulator

Practical. Engaging. Zero dependencies. Built for students who like games — and shipping software.

---

## The Live Target

Students aren't imagining a dashboard. They're aiming at a real, playable cockpit.

<a class="demo-card" href="https://clarkngo.github.io/playground/wild-rift/thex-mecha.html" target="_blank" rel="noopener">
<strong>T-Hex Mecha Simulator</strong>
<span>clarkngo.github.io/playground/wild-rift/thex-mecha.html → open & mount with F</span>
</a>

Vanilla HTML / CSS / JS. Mount the mecha, fire abilities, feel the loop.

---

## What You Learn

**Software Engineering Process Model** — specifically **Incremental Development**.

Don't build the whole cockpit at once. Grow it:

<div class="flow-path">
<span>Mecha State</span>
<span class="arrow">→</span>
<span>Ability Sim</span>
<span class="arrow">→</span>
<span>Pilot Synergy</span>
<span class="arrow">→</span>
<span>Combat Log</span>
<span class="arrow">→</span>
<span>Loadout Export</span>
</div>

Students *feel* the model as the simulator scales stats, casts spells, and scores team synergy.

---

<!-- .slide: data-state="chapter" -->
## The Lab Timeline

~40–50 minutes. Prompt → build → prove.

--

## Agenda at a Glance

<div class="vibe-grid">
<div class="time-card">
<div class="when">00:00–0:13</div>
<strong>Requirements + Design</strong>
<p>Ruleset, architecture, slider → scale workflow.</p>
</div>
<div class="time-card">
<div class="when">0:13–0:33</div>
<strong>Modular Implementation</strong>
<p>State, abilities, pilots, logger, full cockpit UI.</p>
</div>
<div class="time-card">
<div class="when">0:33–0:45</div>
<strong>Testing + Debug</strong>
<p>Assertions, spam-click cooldown bugs, edge cases.</p>
</div>
<div class="time-card">
<div class="when">0:45–0:50</div>
<strong>Exporter</strong>
<p>Download JSON of setup, damage, and combat log.</p>
</div>
</div>

---

<!-- .slide: data-state="chapter" -->
## Phase 0–1 — Spec & Design

Constraints first. Architecture second.

--

## 00:00–0:05 · Requirements Analysis

**Vibe technique:** Understanding structural constraints

<div class="phase prompt">
<strong>Sample prompt</strong>
"What are the official base stats, abilities, scaling metrics (e.g., HP/AD scaling up to 25 mins), and cooldown timers of the T-Hex Mecha in Wild Rift?"
</div>

**Expected output:** A structured ruleset — HP, Armor, MR, AD, actives, timers.

--

## 00:05–0:10 · Design 1 — Architecture

**Vibe technique:** T1 Generative Design Partner

<div class="phase prompt">
<strong>Sample prompt</strong>
"Propose a modular architecture for 'ThexMecha' using vanilla HTML/CSS/JS. Outline DOM layout and modules: StateManager, AbilityEngine, PilotSelector, Exporter."
</div>

**Expected output:** System layout, styling wireframe, data-flow map.

--

## Suggested Module Map

1. `index.html` — cockpit controls (left) + live logger (right)
2. `styles.css` — sci-fi neon, progress bars, CSS Grid
3. `MechaState.js` — stats, scaling constants, time logic
4. `AbilityEngine.js` — casts, cooldowns, timer ticks
5. `PilotSelector.js` — role bonuses & ejection survival
6. `Exporter.js` — downloadable state / logs

--

## 00:10–0:13 · Design 2 — Event Flow

**Vibe technique:** T1 Generative Design Partner

<div class="phase prompt">
<strong>Sample prompt</strong>
"Design a JS event workflow where changing a 'Game Time: 12 mins' slider dynamically scales the Mecha's HP and AD in real time."
</div>

**Expected output:** Slider → math formula → DOM update flowchart.

---

<!-- .slide: data-state="chapter" -->
## Phase 2 — Build the Modules

T2: Modular Assembly. One file earns the next.

--

## 0:13–0:17 · Implementation 1 — MechaState

<div class="phase prompt">
<strong>Sample prompt</strong>
"Write a modular JS class <code>MechaState</code> that initializes base T-Hex stats (4000 HP, 380 AD) and calculates linear growth scaling up to 25 minutes."
</div>

**Expected output:** Scaling math + DOM updates for live stats.

--

## 0:17–0:21 · Implementation 2 — AbilityEngine

<div class="phase prompt">
<strong>Sample prompt</strong>
"Create an <code>AbilityEngine</code> that manages casts (Missile Blitz, Irontail Sweep, Laser Ray) and updates UI progress bars for cooldowns."
</div>

**Expected output:** Skill triggers, damage math, cooldown state.

*Live reference kit:* Missile Barrage · Amplifying Field · Iron Tail · Laser Beam

--

## 0:21–0:25 · Implementation 3 — PilotSelector

<div class="phase prompt">
<strong>Sample prompt</strong>
"Generate a <code>PilotSelector</code> that assesses occupant role (Tank, ADC, Support) and calculates synergy bonuses or post-ejection survival scores."
</div>

**Expected output:** Role matchup scoring inside the cockpit.

--

## 0:25–0:29 · Implementation 4 — CombatLog

<div class="phase prompt">
<strong>Sample prompt</strong>
"Create an interactive <code>CombatLog</code> that prints scrolling, formatted lines whenever a simulated ability strikes a dummy target."
</div>

**Expected output:** UI logger of virtual combat transactions.

--

## 0:29–0:33 · Implementation 5 — Assemble the Cockpit

<div class="phase prompt">
<strong>Sample prompt</strong>
"Assemble index.html, styles.css, and main app.js into a responsive dark-mode sci-fi cockpit linking all modules."
</div>

**Expected output:** Integrated UI — sliders, status bars, logger, one coherent panel.

---

<!-- .slide: data-state="chapter" -->
## Phase 3 — Prove It

T4 tests. T3 debug. Then export.

--

## 0:33–0:40 · Testing

**Vibe technique:** T4 Automated Test Generation

<div class="phase prompt">
<strong>Sample prompt</strong>
"Write pure JS assertions to verify: (1) minute 25 yields max stats, (2) firing a skill locks cooldown, (3) pilot synergy math is correct."
</div>

**Expected output:** Console-run unit suite asserting state changes.

--

## 0:40–0:45 · Verification & Maintenance

**Vibe technique:** T3 Debugging Collaboration

<div class="phase prompt">
<strong>Sample prompt</strong>
"My cooldown timer runs forever if the user spam-clicks a skill. Explain how to disable/throttle button spam in JS."
</div>

**Expected output:** Debounce + `button.disabled = true` during cooldown.

**Also stress:** negative game time, pilot swaps mid-cooldown, missing inputs.

--

## 0:45–0:50 · Implementation 6 — Exporter

<div class="phase prompt">
<strong>Sample prompt</strong>
"Build an Exporter that outputs current Mecha setup, damage charts, and combat log as downloadable JSON."
</div>

**Expected output:** File saver converting live state into a downloadable asset.

---

## Why This Project Works

| Goal | How ThexMecha hits it |
|---|---|
| Practical | Real stats, cooldowns, DOM events |
| Engaging | Mount, cast, log — game loop energy |
| Zero dependency | HTML + CSS + vanilla JS only |
| Relatable | Wild Rift T-Hex students already know |

Incremental model isn't a lecture slide. It's the path through the cockpit.

---

## See It In Action

<a class="media-card" href="https://www.youtube.com/watch?v=ICkZ-ptzjsY" target="_blank" rel="noopener">
<img src="https://img.youtube.com/vi/ICkZ-ptzjsY/hqdefault.jpg" alt="Wild Rift T-Hex gameplay thumbnail" />
<div class="caption">Wild Rift T-Hex Gameplay<span>Abilities, lane push, fight impact →</span></div>
</a>

Then open the lab target and start at Requirements.

--

<!-- .slide: data-state="closing" -->
## Mount Up. Build Incrementally.

Spec the mecha. Ship one module. Prove it. Export the loadout.

<a class="demo-card" href="https://clarkngo.github.io/playground/wild-rift/thex-mecha.html" target="_blank" rel="noopener">
<strong>Launch ThexMecha</strong>
<span>https://clarkngo.github.io/playground/wild-rift/thex-mecha.html</span>
</a>
