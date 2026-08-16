---
name: Mây Piano
description: A Vietnamese piano course set on the stave — engraved score, not course landing page.
colors:
  paper: "#edefea"
  paper-2: "#e4e7e0"
  paper-edge: "#d5d9d0"
  ink: "#12151a"
  ink-2: "#3a4048"
  ink-3: "#5a626c"
  edit: "#a32b22"
  edit-pressed: "#8d221a"
  press: "#24463c"
  press-2: "#1a332c"
  press-ink: "#dfe7e1"
  room: "#0c0e11"
  room-ink: "#e8eae5"
  room-ink-2: "#9aa3a9"
  stave-line: "rgba(18, 21, 26, 0.47)"
  pending-ink: "#3a4048"
  pending-line: "#8e8079"
  pending-ink-dark: "#cdd3d6"
  pending-line-dark: "#7d8890"
  focus-dark: "#e08a80"
typography:
  display:
    fontFamily: "Piazzolla, 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(2.75rem, 8.5vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Piazzolla, 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)"
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: "-0.022em"
  title:
    fontFamily: "Piazzolla, 'Iowan Old Style', Georgia, serif"
    fontSize: "clamp(1.25rem, 1.9vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.012em"
  voice:
    fontFamily: "Piazzolla, 'Iowan Old Style', Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  lead:
    fontFamily: "'Be Vietnam Pro', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  body:
    fontFamily: "'Be Vietnam Pro', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  small:
    fontFamily: "'Be Vietnam Pro', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "'Be Vietnam Pro', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.14em"
  music:
    fontFamily: "Bravura, serif"
    fontSize: "1em"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "normal"
rounded:
  none: "0"
  focus: "1px"
spacing:
  s-1: "0.375rem"
  s-2: "0.75rem"
  s-3: "1.25rem"
  s-4: "2rem"
  s-5: "3.25rem"
  s-6: "5rem"
  s-7: "8rem"
components:
  cta:
    backgroundColor: "{colors.edit}"
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.5rem"
  cta-hover:
    backgroundColor: "{colors.edit-pressed}"
    textColor: "{colors.paper}"
  cta-on-press:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.press-2}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.5rem"
  button-outlined:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.1rem"
    height: "44px"
  button-outlined-hover:
    backgroundColor: "{colors.edit}"
    textColor: "{colors.paper}"
  button-play:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.small}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.15rem 0.7rem 0.9rem"
    height: "44px"
  button-play-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-play-active:
    backgroundColor: "{colors.edit}"
    textColor: "{colors.paper}"
  rehearsal-mark:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.small}"
    rounded: "{rounded.none}"
    padding: "0 0.4em"
    height: "2.1em"
  rehearsal-mark-hover:
    backgroundColor: "transparent"
    textColor: "{colors.edit}"
  pending-bracket:
    backgroundColor: "rgba(163, 43, 34, 0.045)"
    textColor: "{colors.pending-ink}"
    typography: "{typography.small}"
    rounded: "{rounded.none}"
    padding: "1.25rem 1.25rem 1.25rem 1.75rem"
  pending-bracket-dark:
    backgroundColor: "rgba(255, 255, 255, 0.05)"
    textColor: "{colors.pending-ink-dark}"
  outcome-chip:
    backgroundColor: "rgba(36, 70, 60, 0.09)"
    textColor: "{colors.press}"
    typography: "{typography.small}"
    rounded: "{rounded.none}"
    padding: "0.25rem 0.6rem"
---

# Design System: Mây Piano

## Overview

**Creative North Star: "Bản Khắc — The Engraved Score"**

The page is set *on* the stave rather than decorated with music. Everything the surface knows how to do it learned from music engraving: a title block that puts the work title, the tempo indication and the composer's line where a printed score puts them; five-line systems that carry content instead of framing it; rehearsal marks that name places so a teacher can say "from B"; a coda that closes on a thin-then-thick final barline. Notation is set in real SMuFL glyphs from Bravura, never in unicode look-alikes, and the notation font loads with `font-display: block` so a stave never flashes a letterform.

The density is that of a printed page, not an app: flat cool stock, ink hierarchy carried by three greys rather than by boxes, and almost no borders that are not either a stave, a rehearsal-mark box, or a control outline. Depth is essentially absent — one soft two-layer lift exists and it belongs to a single control. Colour is rationed hard: the whole surface is ink on paper except three whole-field passages (the evening room, the press-green coda, the gathered student stock) and one saturated red that means *act* or *the teacher is speaking*.

Vietnamese is a hard typographic constraint, not a locale setting. Both text faces were chosen for full Vietnamese coverage first and character second, because Vietnamese stacks two diacritic tiers and a face missing them falls back to the system font on exactly those glyphs — a break only a Vietnamese reader sees. All three faces are self-hosted, subset, and preloaded; there is no CDN anywhere in the critical path.

**Key Characteristics:**
- Ink on cool stock (#EDEFEA), never cream, never white
- One action colour, rationed to a single filled control per passage
- Zero corner radius on every surface and control
- Five-line staves as structure, not ornament
- Real notation glyphs; inline SVG for the two UI icons
- One authored motion moment on the whole page

## Colors

Engraver's ink on cool score stock, interrupted by three whole-field passages and one red that is never decorative.

### Primary
- **Editor's Red** (#a32b22): The teacher's pencil. It appears as a *fill* on exactly one thing — the primary call to action — and as *the teacher's voice* wherever Mây addresses the reader directly (the margin notes, the "who this level is for" line), always in display italic. It also claims the browser's own signalling surfaces: selection, caret, `accent-color`, the focus ring, link underlines, the sounding notehead during playback, and the hover state of otherwise-ink controls. Nothing else may take it.
- **Editor's Red Pressed** (#8d221a): The CTA's hover ground only.

### Secondary
- **Press Green** (#24463c): Whole fields and glyph fills — the coda's ground, the stave glyphs in the closing system, the outcome chips' text over a 9% tint of itself. It never draws a line.
- **Press Ink** (#dfe7e1) / **Press Deep** (#1a332c): Type on the green field, and the CTA's text when the CTA inverts to paper on green.

### Tertiary
- **Evening Room** (#0c0e11): The page's one dark passage, where the teacher-proof section sits. Its type is **Room Ink** (#e8eae5) with **Room Ink Muted** (#9aa3a9) for lede and captions.
- **Dark-passage Focus** (#e08a80): The focus ring inside the room. Editor's red is only ~2.7:1 on that ground; this measured substitute is 7.5:1.

### Neutral
- **Score Stock** (#edefea): The page ground, and the `theme-color` the browser chrome is told to match.
- **Gathered Stock** (#e4e7e0): The second-hand shade for the sticky rehearsal-mark bar and the students section — a recto-verso difference, not a card.
- **Stock Edge** (#d5d9d0): The only hairline rule that is not a stave; used on section borders and the "how it works" item tops.
- **Printing Ink** (#12151a): Body copy, headings, rehearsal-mark boxes, control outlines.
- **Engraved Secondary** (#3a4048): Long-form paragraph text under a heading, and the ink of the pending bracket.
- **Caption Ink** (#5a626c): Captions, hints, footnotes, scrollbar thumb. Measured at 5.34:1 on stock and 4.95:1 on gathered stock — this is the floor, not a starting point.
- **Stave Line** (rgba(18,21,26,0.47) → #868988 over stock, 3.05:1): The hairline weight for the level systems.

### Named Rules
**The One Red Rule.** Saturated red is a *fill* on exactly one control per passage — the primary action. Everywhere else it may only be a hairline, an underline, a focus ring, a hover state, or the teacher's own italic hand. A second red-filled control on a screen is a bug.

**The Bracket Is Not A Button Rule.** Slots awaiting the owner's real material are set in the pending family — ink type (#3a4048), a warm grey bracket stroke (#8e8079), and a 4.5%-opacity wash — precisely so an unfinished passage can never out-shout the action next to it. Never promote a pending bracket to the action colour.

**The Whole-Field Rule.** Press green is a field or a glyph fill. It never becomes a border, a divider, or a hairline.

## Typography

**Display Font:** Piazzolla (with Iowan Old Style, Georgia, serif)
**Body Font:** Be Vietnam Pro (with system-ui, -apple-system, Segoe UI, sans-serif)
**Notation Font:** Bravura, a real SMuFL font subset to the ~26 codepoints the page uses (7.6 KB, `font-display: block`)

**Character:** A heavy engraved serif set very tight against a plain, generously-drawn Vietnamese sans. The serif carries titles and every moment of *voice*; the sans carries everything the page says in its own flat register. Both are self-hosted as latin / latin-ext / vietnamese subsets.

### Hierarchy
- **Display** (Piazzolla 800, clamp 2.75rem–6rem, 0.92, −0.04em): The work title, once per page, at score title-block position.
- **Headline** (Piazzolla 800, clamp 1.75rem–2.75rem, 1.06, −0.022em): Section titles, sitting on a baseline row beside their rehearsal mark, capped around 20–22ch.
- **Title** (Piazzolla 600–800, clamp 1.25rem–1.5rem, 1.06, −0.012em): Level names and sub-section headings.
- **Voice** (Piazzolla 400 *italic*, 1.0625rem, 1.5): The tempo indication under the work title, Mây's margin notes, and the "who this level is for" line. Italic display type means a person is speaking.
- **Lead** (Be Vietnam Pro 400, 1.25rem, 1.55): Section ledes, capped 54–62ch.
- **Body** (Be Vietnam Pro 400, 1.0625rem, 1.65): Running text, capped at a 66ch measure globally.
- **Small** (Be Vietnam Pro 400–500, 0.875rem, 1.5): Captions, hints, control labels, footnotes.
- **Label** (Be Vietnam Pro 600, 0.75rem, 0.14em tracking, uppercase): Two inline role labels only — the composer-position role beside the teacher's name, and the level ordinal beside the level title. Both sit on the same baseline row as their partner.

### Named Rules
**The Italic Is A Voice Rule.** Display italic is reserved for someone speaking to the reader. If nobody is talking, it is not italic.

**The Tight-Display Rule.** Display and headline type is set at weight 800 with negative tracking that increases with size (−0.012em at title, −0.022em at headline, −0.04em at display). Never letterspace the serif open.

**The No-Eyebrow Rule.** The uppercase 0.14em label exists only *inline*, on the baseline row of the thing it qualifies. It is never stacked above a heading as a kicker or eyebrow, and never used as a section label.

**The Real-Glyph Rule.** Musical symbols are Bravura codepoints, never unicode stand-ins, never an image. Adding a symbol means re-cutting the subset; an uncut codepoint renders as nothing by design.

**The Vietnamese-First Rule.** Any face added to this system must carry the full Vietnamese diacritic set and be self-hosted with `unicode-range` subsets. Coverage decides before character does.

## Layout

A centred page column of 1160px with a fluid gutter (`clamp(1rem, 4.5vw, 3rem)`), a narrow variant at 780px for ledes, and a 66ch reading measure applied to every paragraph by default. Sections are separated by their own vertical padding — `clamp(3rem, 8vw, 6rem)` for the major ones — rather than by rules; the only shared horizontal lines on the page are staves and two 1px stock-edge borders.

Spacing runs on a seven-step scale (0.375 / 0.75 / 1.25 / 2 / 3.25 / 5 / 8rem) with a roughly 1.6× ratio; grid gaps and stack gaps both draw from it, and section padding uses fluid clamps instead of a scale step. Nearly every block is CSS grid with an explicit `gap`; almost nothing uses margins.

Responsive behaviour is a short list of content-driven breakpoints, not a device ladder: 760px splits the "how it works" list into two columns, 880px sets the tempo indication and the composer's line on one row, 900px splits the dark passage into a 1.35fr / 1fr stage, 940px gives each level row a 1fr / 16rem body-and-buy split with its stave spanning both columns. Below all of them everything is a single column. Grid children carry `min-width: 0` deliberately, because the engraved system's intrinsic width would otherwise push the page wider than a phone.

The rehearsal-mark bar is sticky at the top with a 1.5px ink border on both edges; it wraps rather than scrolls, so the last destination cannot hide off the right edge.

### Named Rules
**The Stave Is The Grid Rule.** Where a row needs separating from the next, it opens on a five-line system. The stave *is* the divider; nothing else divides anything. Never draw a plain rule directly above a stave — at ink weight it reads as a sixth, wrong staff line.

**The Measure Rule.** Paragraphs are capped at 66ch by default and headings at 20–24ch. A full-bleed line of text is out of world.

## Elevation & Depth

The page is flat by conviction. Depth is carried by tonal fields — cool stock, gathered stock, the evening room, the press-green coda — not by shadows. Two shadow tokens exist and only the primary call to action uses them: each is an offset plus a soft, tightly-negative-spread blur, so an element looks like it is sitting *on* the sheet rather than glowing behind it. There are no zero-offset halos and no hard offset shadows anywhere in the build.

### Shadow Vocabulary
- **Lift 1** (`box-shadow: 0 1px 2px rgba(18,21,26,.07), 0 6px 16px -10px rgba(18,21,26,.22)`): The primary action at rest.
- **Lift 2** (`box-shadow: 0 2px 4px rgba(18,21,26,.08), 0 18px 40px -22px rgba(18,21,26,.4)`): The same control on hover, paired with a 1px rise.

### Named Rules
**The One Lifted Thing Rule.** Only the primary action carries a shadow. Cards, panels, media wells and pending brackets stay flat on the sheet; separate them with tone or a stave instead.

## Shapes

Every corner on the page is square. Radius appears in exactly two places and neither is a surface: the focus ring rounds by 1px so a 2px outline does not read as a knife edge, and the scrollbar thumb is a pill because a square thumb is not a scrollbar. Borders come in three weights and no more: 1.5px ink for controls, rehearsal marks and the sticky bar; 1.5px for the pending bracket's two corner marks; 1px stock-edge for the two section rules. Staves are drawn at their own engraving weights and are not borders at all.

Silhouettes are rectangular and full-width: outlined controls stretch to their column, chips are plain padded rectangles, and the media well is a bracket-marked block rather than a framed card.

### Named Rules
**The Square Corner Rule.** Radius is 0 on every surface and control. The only exceptions are the 1px focus ring and the scrollbar thumb.

## Components

### Buttons
- **Shape:** Square (0 radius), 44px minimum height on every interactive control.
- **Primary (CTA):** Filled editor's red on paper text, 0.85rem 1.5rem padding, body size at weight 600, with a trailing 16px inline-SVG arrow. Carries Lift 1 at rest.
- **Hover / Focus:** Darkens to #8d221a, rises 1px, deepens to Lift 2, and the arrow slides 3px right — all on a 180ms decelerating ease. Active returns to 0.
- **On press green:** The same control inverts to a paper field with press-deep text, hovering to pure white. Red is not used on the green passage.
- **Outlined (checkout hand-off):** Transparent on a 1.5px ink outline, full column width, naming its destination host and an external-link SVG inside the control itself, because the hand-off leaves the site mid-purchase. Hover fills with editor's red. Outlined rather than filled so the loud red stays with the one primary action.
- **Play control:** Paper field, 1.5px ink outline, small text with a 14px inline-SVG triangle. Hover inverts to ink; while sounding it fills editor's red, its label changes to "Đang phát", and it goes `aria-disabled`.

### Chips
- **Style:** Level outcomes as square, unbordered rectangles — press-green text on a 9% press-green tint, small size, 0.25rem 0.6rem padding.
- **State:** Static. These are outcomes, not filters; they have no selected state and are never interactive.

### Containers
There are no cards. Content sits directly on the sheet and is grouped by tone, spacing, and the stave above it.
- **Passage fields:** Whole-width bands of a single ground (`--room`, `--press`, `--paper-2`) with fluid vertical padding.
- **Media / bio wells:** Pending brackets (below), never bordered boxes.
- **Shadow strategy:** None; see Elevation.

### Navigation
Four rehearsal marks in a sticky bar on gathered stock, bordered 1.5px ink top and bottom. Each item is a mark plus its Vietnamese label, at small size in engraved-secondary ink, 44px minimum target, wrapping to a second row rather than scrolling. Hover turns both the label and the mark's box to editor's red. There is no logo, no menu button, and no mobile drawer — the bar is the same at every width.

### Rehearsal Mark
The system's navigation atom: a square 1.5px ink box, at least 2.1em wide and 2.1em tall, holding a single display-800 capital at small size. It is sized like the printed thing (about 29px) and grows an invisible 44×44 hit area from its centre rather than inflating the box. On the dark passage its border drops to muted room ink. It is always a real anchor to a real section.

### Pending Bracket
A shipped component, not scaffolding: the mark an engraver leaves on an unresolved passage. A left-side vertical rule with 0.5rem corner returns top and bottom, 1.5px in warm grey (#8e8079), over a 4.5% red wash, with ink type at small size and a bold-italic lead phrase naming what is missing. The dark-passage variant swaps to a 5% white wash, light ink (#cdd3d6) and a cool grey stroke (#7d8890). It marks every slot awaiting the owner's real material — video, bio, testimonials, prices, access terms — and is deliberately quieter than any adjacent control.

### The Playable System (signature)
The first system of the score, engraved rather than illustrated. SVG drawn to SMuFL's own metrics: one staff space equals 10 user units, glyph size is always four staff spaces, staff lines at 0.13 and stems at 0.12 staff spaces, correct stem directions flipping at the middle line, a ledger line under middle C, a barline after bar one, and a thin-then-thick final barline. Clef, metre and noteheads are Bravura codepoints. Pressing the control synthesises a struck-string phrase (four decaying partials, not a raw sine) and lights each notehead in editor's red as it sounds. The system scales to its column and engraves smaller rather than clipping, the way a pocket score does.

### The Level System
The second, deliberately different stave implementation: five hairlines drawn as a `repeating-linear-gradient` (1.2px on a 9px period) instead of SVG, so they stay crisp at any row width and can span a whole row rather than shrinking into a badge. It opens each level row and is the only thing separating one level from the next. It is decorative-by-role and carries `aria-hidden`.

### Named Rules
**The Two Staves Rule.** Notation that must be *read* is SVG at SMuFL metrics with real glyphs. Structural staves that must span an arbitrary width are a repeating gradient. Never draw a readable system with a gradient, and never stretch an SVG system to fill a row.

**The One Motion Rule.** The page has one authored motion moment: the teacher's margin notes write themselves in on intersection (700ms, opacity plus a 6px rise, once each), plus notehead highlighting during playback. Everything else is a 140–180ms state transition on a control. `prefers-reduced-motion` collapses all of it and reveals the notes immediately.

**The Claimed-Surfaces Rule.** Browser defaults belong to no design system, so this one claims them: selection, caret, `accent-color`, scrollbar track and thumb, focus ring, and link underline offset (0.22em) and colour. Numerals that sit in columns take `tabular-nums`.

## Do's and Don'ts

### Do:
- **Do** open a new row or section on a five-line system and let it do the dividing.
- **Do** keep the saturated red to one filled control per passage; use ink outlines for every secondary action.
- **Do** set anything the owner still owes as a pending bracket, in the pending ink family, with a bold-italic phrase naming exactly what is missing.
- **Do** use real Bravura codepoints for musical symbols and re-cut the subset when you add one.
- **Do** check any new text colour against its actual ground and record the ratio next to the token, as `--ink-3` (5.34:1) and `--focus-dark` (7.5:1 on the room) already do.
- **Do** substitute the dark-passage focus colour inside the evening room; editor's red is only ~2.7:1 there.
- **Do** give every interactive control a 44px minimum target, growing the hit area around a small printed mark rather than inflating the mark.
- **Do** cap paragraphs at the 66ch measure and headings at 20–24ch.
- **Do** self-host any new face with `unicode-range` subsets and full Vietnamese coverage.

### Don't:
- **Don't** round a corner. Radius is 0 except the 1px focus ring and the scrollbar thumb.
- **Don't** add a shadow to anything but the primary action, and never a zero-offset halo or a hard offset shadow.
- **Don't** build cards. Group with tone, spacing and staves.
- **Don't** let a pending bracket, a chip, or a price note take the action colour.
- **Don't** use press green for a hairline, border or divider.
- **Don't** stack an uppercase tracked label above a heading as a kicker or eyebrow; that label only ever sits inline beside its partner.
- **Don't** use a unicode character, an emoji, or an icon font where a notation glyph belongs — and use inline SVG, not a glyph font, for UI icons.
- **Don't** scatter hover reveals or entrance animations; the page has one authored motion moment and the budget is spent.
- **Don't** load a font from a CDN.
- **Don't** reintroduce the course-landing furniture this world refuses: instructor hero, benefit columns, testimonial cards, pricing table, FAQ accordion.
