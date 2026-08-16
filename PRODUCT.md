# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated: **Astro**, chosen by Impeccable because the user left the decision open.

Reasoning: the first surface is a public marketing page for a solo-maintained
project. Astro ships zero JavaScript by default (fast first paint for a
general-consumer visitor who decides in seconds), supports component authoring
and scoped styles so the page stays maintainable by one person, handles image
optimization natively, and deploys as static output to any host. If the project
never grows past a single page, plain static HTML/CSS remains a valid downgrade;
if it grows into an app, Astro absorbs framework islands without a rewrite.

This choice is revisitable — it was made on the user's behalf, not confirmed by
them.

## Users

Primary visitor: **consumers / general public.** Not a technical or business
buyer, and not pre-sold on the category.

Situation and job: the visitor arrives cold, on an unknown-quality connection
and likely on a phone, with no prior relationship to the project or its maker.
Their job is to decide quickly whether this is for them and whether it can be
trusted. They are deciding on appeal, clarity, and trust — not on
specifications, integrations, or procurement fit.

No secondary audience has been confirmed.

## Product Purpose

**Undecided — not yet disclosed by the user.**

Confirmed so far: this is a **personal / solo project** by an individual maker,
and the first surface requested is a **public marketing page** whose job is to
get a visitor to decide and act.

What the project actually is — what it does, what it makes possible, and what
success looks like — has not been stated. It must not be inferred from the
project directory name, the repository contents, or any placeholder that appears
in built output. Any future work that needs this answer should ask for it rather
than fill it in.

## Positioning

**Undecided.** No mechanism, claim, or point of difference has been established.

Because the product itself is undisclosed, there is no confirmed basis for any
comparative or superiority claim. Future work must not write one.

## Operating Context

The visitor's real scene is a cold arrival from an unknown referrer — a link
shared, a search result, a profile bio — with no onboarding, no context, and no
patience. Mobile is the realistic default rather than the fallback case.

There is no signup flow, no logged-in state, no documentation, and no support
channel confirmed to exist behind the page.

## Capabilities and Constraints

- **Confirmed:** web platform; a single public marketing surface is the
  requested scope; the project is maintained by one person.
- **Explicitly undecided:** the product's name, its function, its pricing or
  availability model, its distribution (download, signup, purchase, waitlist),
  and what the page's primary call to action should point at.
- **Maintenance constraint:** one maintainer. Anything requiring ongoing content
  operations, a CMS, or a build pipeline more elaborate than static output is a
  real cost, not a free feature.
- **Terminology:** none established. There is no product vocabulary to reuse or
  stay consistent with yet.

## Brand Commitments

A **name exists** and the user treats it as fixed — but it was not disclosed
during this interview, so it is not recorded here. It is a real constraint with
an unknown value; future work must ask for it rather than choose one.

There are **no visual brand assets**: no logo, no wordmark, no palette, no
typographic commitment, no existing identity of any kind, and nothing in the
repository. The visual world is therefore unconstrained and will be established
fresh around the name once it is known.

No voice or personality constraint has been stated.

## Evidence on Hand

**None.** This is the most important entry in this file.

There are no customers, no usage metrics, no testimonials, no case studies, no
press mentions, no partner or investor logos, no screenshots, no demo, no
existing marketing copy, and no photography or illustration.

Future work must not fabricate any of the above, and must not reach for the
visual conventions that imply them — no logo strips, no invented star ratings,
no "trusted by" rows, no placeholder testimonial cards with made-up names, no
fictional user counts or growth figures. A page that has no proof should be
built to be persuasive without proof, not dressed to look like it has some.

If real evidence appears later, it belongs in this section first and on the page
second.

## Product Principles

1. **Nothing untrue ships.** With the product undisclosed and zero evidence on
   hand, the risk is not a bland page — it is a plausible, invented one. Every
   claim traces to a confirmed fact in this file or renders as an obvious
   placeholder the user must resolve.
2. **The visitor decides in seconds, on a phone.** A cold general-public
   arrival is the design case, not the edge case. Comprehension and speed
   outrank completeness.
3. **Persuasion without proof.** No social proof exists, so the page must earn
   trust through clarity, craft, and specificity instead of borrowed authority.
4. **Solo-maintainable by default.** One person keeps this alive. Complexity in
   the stack, the content model, or the asset pipeline is a recurring tax and
   needs to justify itself.
5. **Open decisions stay visibly open.** Undecided product facts are recorded as
   undecided and surface as placeholders — never quietly resolved by whoever
   touches the file next.
