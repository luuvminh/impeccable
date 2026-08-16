# Fonts — provenance

All three faces are self-hosted deliberately. A CDN outage would break exactly
the Vietnamese diacritics this project cannot afford to lose, and the notation
glyphs have no acceptable fallback at all.

| Family | Role | Source | Licence |
|---|---|---|---|
| **Piazzolla** | Display (title, headings, the teacher's margin hand) | Google Fonts API, `fonts.gstatic.com`, v42 | SIL Open Font License 1.1 |
| **Be Vietnam Pro** | Body and UI text | Google Fonts API, `fonts.gstatic.com` | SIL Open Font License 1.1 |
| **Bravura** | SMuFL music notation glyphs | [steinbergmedia/bravura](https://github.com/steinbergmedia/bravura), `redist/woff/Bravura.woff2` | SIL Open Font License 1.1 |

## Why these

Piazzolla and Be Vietnam Pro were chosen for full Vietnamese coverage first and
character second. Vietnamese stacks two diacritic tiers (ế, ộ, ữ, ằ); a face
without the full set falls back to the system font on exactly those glyphs, and
the page breaks in a way only a Vietnamese reader sees. Be Vietnam Pro is drawn
for Vietnamese specifically. Piazzolla carries the display voice and is named
after a composer, which is a real tie to the subject rather than a costume.

## Subsets

Text faces are split into `latin`, `latin-ext` and `vietnamese` subsets with the
`unicode-range` descriptors Google emits, so a visitor downloads only what their
copy needs. Regenerate with the fetch script recorded in the build notes.

Bravura ships as `bravura-subset.woff2`, cut with `pyftsubset` from the 323 KB
original down to 7.6 KB — the 27 codepoints the page actually uses:

```
U+E048 coda           U+E050 gClef          U+E062 fClef
U+E080–E089 timeSig0–9
U+E0A2 noteheadWhole  U+E0A3 noteheadHalf   U+E0A4 noteheadBlack
U+E1D5 U+E1D7 U+E1D9  note durations        U+E240 U+E241 flags
U+E4C0 fermata        U+E4E3 U+E4E5 marks   U+E520–E522 dynamics p/m/f
```

Dynamics are composed rather than taken from ligature codepoints: `pp` is
U+E520 twice, `mp` is U+E521 + U+E520, `mf` is U+E521 + U+E522, `ff` is
U+E522 twice. These are Private Use Area characters, so they look like empty
strings in most editors and terminals — check them with a codepoint dump, not
by eye.

Adding a glyph to the page means re-cutting the subset; a missing codepoint
renders as nothing, because `font-display: block` is set so notation never
flashes a fallback letterform.
