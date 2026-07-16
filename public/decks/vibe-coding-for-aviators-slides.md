---
title: Vibe Coding for Future Aviators
description: A workshop for people who've never written a line of code — and don't need to, to build something real.
---

<!-- .slide: data-state="title" -->
## Vibe Coding for Future Aviators

### Three days. Zero code. Real software.

A workshop for people who've never written a line of code — and don't need to, to build something real.

Note:
Open warm. This deck is the instructor's companion, not a script — the room does most of the work. Let the title slide breathe for a second before moving on.

---

## Why This Workshop Exists

For decades, "learning to code" meant learning a language most people never needed for their actual career.

<p><strong>That gate just came down.</strong></p>

Note:
Set up the tension before resolving it on the next slide. Don't rush past this — it's the thesis of the whole three days.

---

## The New Skill Isn't Syntax

It's knowing exactly what you want and being able to say it clearly enough that a machine — or a person — can act on it.

<p>That's not a programming skill. It's a <strong>communication</strong> skill.</p>

Note:
This reframe matters because it tells aviation majors: you already have half of this skill. Precise communication is their whole discipline.

---

## You Already Do This

Every clearance you'll ever read back, every checklist you'll ever run, is the same shape:

> **Say precisely what you mean, confirm it worked, correct if it didn't.** <!-- .element: -->

<p>This week, you're pointing that same habit at a browser instead of a radio.</p>

Note:
This is the hook for the whole audience. Land it here before Day 1 begins — it's the thing that makes "vibe coding" feel like home turf instead of a foreign skill.

---

<!-- .slide: data-state="chapter" -->
## Day 1 — Learn the Loop

By the end of today, everyone in this room ships something real: a page with their name on it, built by describing it out loud.

--

## Meet Your Co-Pilot

Gemini writes the HTML, CSS, and JavaScript. You never touch it directly.

<div class="role-grid">
<div class="role-card captain">
<h3>You — Captain</h3>
<ul>
<li>Tell it what you want</li>
<li>Check what it did</li>
<li>Correct when it's wrong</li>
</ul>
</div>
<div class="role-card copilot">
<h3>Gemini — Copilot</h3>
<ul>
<li>Writes the code</li>
<li>Handles the heavy lifting</li>
<li>Follows your direction</li>
</ul>
</div>
</div>

<p><strong>Nothing to install.</strong> A Google account and a browser tab is the entire toolkit — and if a preview glitches, the file still opens directly.</p>

Note:
Emphasize "still in command" — a lot of first-time builders feel like they're just watching Gemini work. Reframe: they're piloting, not spectating.

--

## The Real Trap on Day 1

It's not the tech. It's **waiting for a good enough idea** before typing anything.

Nobody nails the first prompt. The point isn't a perfect first idea — it's getting *something* on screen fast enough that you have material to react to.

> A rough draft you can see beats a perfect idea you never typed. <!-- .element: -->

Note:
Watch for the students frozen on a blank prompt box in the first ten minutes — that's this exact trap playing out live. Nudge them to just start.

--

## The Loop

<div class="loop-path">
<span>Describe</span>
<span class="arrow">→</span>
<span>Build</span>
<span class="arrow">→</span>
<span>Test</span>
<span class="arrow">→</span>
<span>Refine</span>
<span class="arrow">→</span>
<span>Repeat</span>
</div>

Every project this week — today's page, tomorrow's quiz, Friday's final build — runs through this same five-step loop.

<p>Learn it once here, and it doesn't change all week. Only what you know to do <em>before</em> the first prompt gets sharper each day.</p>

Note:
This is the spine of the entire course. Say out loud: "this loop is the only new mechanical skill you're learning this week — everything after today is making the same loop smarter."

--

## Why "Test" Is the Step Nobody Expects

Beginners assume the work is in the describing. It's actually in the **testing** — clicking everything, trying to break it, noticing what's *almost* right but not quite.

> That's the same instinct as a pre-flight check: you don't assume the aircraft is airworthy because it looks fine from the gate. <!-- .element: -->

Note:
Good spot to connect to their world directly — a walk-around isn't optional just because the plane looks fine on the ramp.

--

## Specificity Is the Whole Game

Compare these two instructions:

<div class="phase">
<strong>Vague</strong>
"Climb higher."
</div>

<div class="phase vibe">
<strong>Executable</strong>
"Climb and maintain flight level three-five-zero."
</div>

<p>One is a guess. One is executable. Gemini treats your prompts exactly the same way — vague in, vague guess out.</p>

<p><strong>The template:</strong><br>
<code>Build a [thing] that does [core feature], for [who], styled like [vibe]. Make [X] happen when I [action].</code></p>

Note:
This ATC analogy is the single best explanation you'll get for why specificity matters — it's not an abstract UX principle to this audience, it's a rule they already live by.

--

## One Change Per Loop

The instinct is to describe five features, three animations, and a color scheme in one giant first prompt. When something breaks, you won't know which part did it.

> Fix: one feature, test it, <em>then</em> refine. Slower per step, faster overall — you never have to untangle a broken batch of changes. <!-- .element: -->

--

## Build It: Your Boarding Pass Page

Today's build: a personal boarding-pass profile page — name, home airport, dream destination, one fun fact. Something you could hand a new classmate in ten seconds.

<p>Run the loop at least three times before calling it done. There's no finish line today — <strong>comfort with the loop</strong> is the actual goal, not a "complete" product.</p>

Note:
Circulate during build time. The version-numbering convention (name_dayX_vY.html) matters less than making sure everyone actually completes a full Test → Refine lap, not just one.

---

<!-- .slide: data-state="chapter" -->
## Day 2 — Think Like a Builder

Yesterday you learned to describe things clearly. Today you learn to decide what's worth describing *at all* — before you write a single prompt.

--

## "Everyone" Is Not an Audience

Design for everyone and you satisfy no one — too simple for the people who wanted depth, too complex for the people who wanted speed.

> A checklist for student pilots looks nothing like one for a captain flying a widebody. Same category, different job, different design. <!-- .element: -->

Note:
This is the strongest reframe of the day. If they only remember one line from Day 2, this is the one to make land.

--

## Two Questions, Before Anything Else

<div class="phase">
<strong>Who is this for?</strong>
A real person — a classmate, a stranger, yourself six months from now. Not "everyone."
</div>

<div class="phase vibe">
<strong>What's the ONE thing it has to do well?</strong>
Not five things. One. Everything else — colors, animation, extra features — is optional polish.
</div>

> A build that does one job well beats one that half-does five. <!-- .element: -->

--

## The Same Idea, Two Prompts

| Vague | Focused |
|---|---|
| "Build a quiz about airplanes" | "Build a 5-question quiz that matches a first-time flyer to one of four aircraft personality types, based on how they'd want to travel" |

The second prompt isn't more complicated. It's more **aimed.** Gemini has a real target to build toward, and you have a real target to test against.

--

## Your Cockpit Already Teaches UX

A well-designed cockpit isn't decorated — every choice about size, color, and placement is deliberate. That's the same three habits that make *any* interface usable:

<div class="phase">
<strong>Clarity</strong>
One obvious primary action, not six competing ones.
</div>

<div class="phase">
<strong>Feedback</strong>
A visible reaction to every input. Silence reads as broken.
</div>

<div class="phase vibe">
<strong>Hierarchy</strong>
The most important thing looks the most important. A primary flight display isn't the same size as a fuel gauge.
</div>

Note:
This slide reframes the entire "UX basics" lesson through instrumentation the aviation students already read fluently every day. Let them find the analogy themselves if possible — ask "what happens on a panel when something is designed badly?"

--

## Build & Pitch: Aircraft Match Quiz

Same loop as yesterday — Describe, Build, Test, Refine, Repeat — but now every prompt starts with your two answers already decided: who it's for, and the one job it does well.

**The pitch, at the end, is one sentence:**

> "This is for [who], and it does [the one thing] well." <!-- .element: -->

<p>No slides. No long explanation. Just the PM lens, spoken out loud — that sentence <em>is</em> the whole point of today.</p>

Note:
Push back gently on any pitch that describes a topic instead of a purpose ("it's a quiz about planes" vs. "it matches a first-time flyer to an aircraft type"). That gap is the entire lesson.

---

<!-- .slide: data-state="chapter" -->
## Day 3 — Ship It

Today adds the lens you can't give yourself: **someone else's eyes.**

--

## The Blind Spot You Can't See Alone

You already know where every button is and what it's supposed to do. A first-time user doesn't. That gap is invisible to you — by definition, you're too close to your own build to see it.

> This is the same reason Crew Resource Management exists: a second set of eyes catches what the person closest to the problem cannot. <!-- .element: -->

Note:
CRM is a genuinely strong hook here — it's a concept they've likely already encountered, and it maps almost perfectly onto why peer testing works. Consider asking the room directly: "why does CRM exist, if the pilot flying is already highly trained?"

--

## Rose & Thorn

Trade projects with a partner. They use yours **cold — no explanation from you** — for two minutes.

<div class="role-grid">
<div class="role-card captain">
<h3>Rose</h3>
<ul>
<li>What worked</li>
<li>Be specific</li>
<li>Not "I liked it"</li>
</ul>
</div>
<div class="role-card copilot">
<h3>Thorn</h3>
<ul>
<li>What confused them</li>
<li>Be specific</li>
<li>Not "it's fine"</li>
</ul>
</div>
</div>

> A rose without a thorn is just a compliment. A thorn without a rose feels like criticism. You need both. <!-- .element: -->

<p><strong>If you catch yourself explaining a confused moment away — stop.</strong> That explanation <em>is</em> the thorn. Write it down instead of talking them through it.</p>

--

## Turning a Thorn Into a Fix

A thorn only helps if it becomes one specific, testable change:

<div class="phase">
<strong>Vague</strong>
<em>"Make it more obvious."</em>
</div>

<div class="phase vibe">
<strong>Actionable</strong>
<em>"The aircraft images are clickable but don't look like it — add a visible border and a hover scale-up so it's clear they're buttons, not decoration."</em>
</div>

<p>One honest change, tested — not a rebuild. That's the whole assignment for the middle of today.</p>

--

## Demo Fair: Ship It

Every pitch covers the same three beats:

1. **Who it's for** — Day 2's answer <!-- .element: -->
2. **What it does** — the one job, done well <!-- .element: -->
3. **What changed because of feedback** — the rose, the thorn, the fix <!-- .element: -->

<p>That third beat is the one people skip, and it's the most interesting part of the story.</p>

<p><strong>No apologizing for what's unfinished.</strong> Every project in the room is a snapshot of three days of learning — show what it does, own it, mention what's next.</p>

Note:
Actively discourage "sorry, this part isn't done" openers when students start pitching. Model confidence in the first pitch if you're demoing anything yourself.

---

## What Actually Happened This Week

| Day | Added | Unchanged |
|---|---|---|
| 1 | The loop + prompt template | — |
| 2 | Who / What lens + three UX habits | Describe → Build → Test → Refine → Repeat |
| 3 | Someone else's eyes | Describe → Build → Test → Refine → Repeat |

The loop from Monday never changed. Every lens after it just made each lap sharper — a tighter prompt, a more honest fix.

---

## The Skill That Actually Transfers

This was never really about Gemini, or HTML, or this specific week.

It's a way of thinking that works on the next project too — a flight-planning tool, a study tracker, a page for a club. The tool will change. **Describe, test, refine** won't.

> Vibe coding isn't about being vague. Your best prompts all week were the specific ones. <!-- .element: -->

---

<!-- .slide: data-state="closing" -->
## Fly Safe. Keep Building.

Three days. A browser, a Google account, and a loop you now own.

Note:
Close warm, not long. Let the room's own projects be the last thing on screen if you can — a quick scroll through demo fair builds is a better closer than another text slide.
