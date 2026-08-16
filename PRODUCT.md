# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated: **Astro**, chosen by Impeccable because the user left the decision open.

Reasoning: the public sales surface is content-heavy and must load fast for
visitors in Vietnam on mobile connections, which Astro serves with zero-JS
static output. The course area behind purchase needs accounts, gated video, and
progress state, which Astro supports through a server adapter and framework
islands without a second codebase.

Revisitable — chosen on the user's behalf, not confirmed by them.

## Users

**Primary: Vietnamese piano learners, buying for themselves or for their child.**

Two geographies, both Vietnamese-speaking:

- **In Vietnam — the majority.** Learning at home, most often on a phone or
  tablet propped on the music stand, on domestic connections. Pay by domestic
  bank transfer via QR scan.
- **Vietnamese diaspora in the US, Canada, Australia, and Europe — the
  remainder, and a large one.** Pay by international card. Time zones and
  currency differ; the language does not.

Two generations read the same page:

- **Adult parents**, some learning themselves, some buying for a child.
  Evaluating whether the teacher is real and whether a beginner can keep up.
- **Teenagers and young adults**, learning for themselves.

The page must work for both without splitting into two pages. Visitors arrive
cold and decide fast on appeal, clarity, and trust.

## Product Purpose

**Mây Piano** — online piano courses taught in Vietnamese by **Mây**, sold
directly to students.

The immediate business purpose is a **migration off Teachable**: the courses
currently sell and deliver at `maypiano.me` on Teachable, and the owner wants to
run the whole thing himself and stop paying platform fees. This project replaces
Teachable end to end — the sales surface, the purchase, and the place students
watch lessons after buying.

Success is a student buying and then actually learning here, with no capability
lost against what Teachable provided.

## Positioning

A named Vietnamese teacher with real credentials teaching in Vietnamese, sold
direct — not a marketplace listing and not an anonymous course brand. Levels run
from absolute beginner to advanced, so a learner locates themselves rather than
being sold one undifferentiated course.

## Operating Context

The learner's real scene is home practice beside the instrument — an upright,
a digital piano, or a keyboard — usually evenings, with the screen on a music
stand at arm's length. Phone and tablet are the realistic primary devices, not
the fallback case.

An existing course business is already running on Teachable at `maypiano.me`,
with existing students. This is a replacement of a working system, not a launch.

Note: `maypiano.me` was **not readable** during this interview — the environment's
network proxy blocks it. No fact here was taken from the existing site.

## Capabilities and Constraints

**Confirmed scope — the full Teachable replacement:**

- Public sales surface for the courses.
- **Multiple levels**, beginner through advanced; the visitor must be able to
  place themselves at the right one.
- **Purchase**, with two payment paths that must both work:
  - International **VISA / Mastercard**;
  - **QR scan bank transfer to a Vietnamese account** — the domestic norm, and
    non-negotiable for the majority audience.
- **Student accounts with login and progress tracking**, closest to what
  students already know from Teachable.
- Gated lesson video behind purchase.

**Language:** Vietnamese first. The diaspora audience is Vietnamese-speaking, so
Vietnamese is the product language, not a localization of an English original.

**Confirmed infrastructure:**

- **Card payments run through Stripe.** The business receives international card
  revenue through an **Australian** entity, which Stripe supports directly. This
  is why no merchant-of-record layer is needed — Stripe is unavailable to
  Vietnamese entities, and that constraint does not apply here.
- **Vietnamese QR transfers land in a domestic account**, reconciled through a
  Vietnamese payment service (PayOS or SePay) so access can open without manual
  checking. The two money flows are deliberately separate.
- **Lesson video is hosted on Bunny Stream**, chosen for cost and for CDN
  performance in Asia, with signed time-limited URLs so a purchased lesson link
  cannot be freely passed around.
- **Accounts and progress run on Supabase** (Postgres plus auth), Singapore
  region for latency to learners in Vietnam.

**Undecided — must not be invented:**

- Pricing per level, and course names.
- Whether existing Teachable students are migrated, and how.
- Deployment target.

**Content:** the owner will supply real course content, copy, and media later.
Until then, content is authored at production fidelity and clearly labeled as
placeholder for his replacement.

## Brand Commitments

**Name: Mây Piano.** Fixed. "Mây" is the teacher's own name — the site belongs to
a real, named person, not a generic brand.

Existing domain and current storefront: `maypiano.me` (Teachable).

**No visual brand assets exist** — no logo, wordmark, palette, or typographic
commitment. The visual world is unconstrained and established fresh.

## Evidence on Hand

Real proof the owner confirmed exists and authorized for use:

- **Existing students from the Teachable course, with reviews and testimonials**
  that can be quoted.
- **Video of Mây playing and teaching** — live proof of the teacher's ability.
- **Mây's musical credentials and teaching experience.**

Explicitly **not** confirmed to exist, and therefore not to be fabricated: student
counts, completion or success rates, press coverage, partner or institutional
endorsements, awards, and ratings. Student-recorded performance videos were
offered as an option and **not** selected — do not assume they exist.

All real testimonial text, credentials, and video files are still to be supplied
by the owner. Until they arrive, these slots are built and clearly marked as
awaiting real material — never filled with invented names or quotes.

## Product Principles

1. **A real teacher is the product.** The strongest asset is Mây herself, on
   video, playing and teaching. Proof beats claims, and this business has real
   proof — use it rather than describing it.
2. **Two payment paths are one requirement.** A page that handles cards but not
   Vietnamese QR transfer fails the majority audience. Neither is the fallback.
3. **Phone-first, beside the piano.** The realistic device is a phone on a music
   stand. Desktop is the secondary case.
4. **Beginners must see themselves.** With levels from absolute beginner up, the
   page's job is helping a visitor place themselves — not impressing them with
   advanced playing they can't imagine reaching.
5. **Lose nothing in the move.** Students already have accounts, lessons, and
   progress on Teachable. Anything the replacement drops is a regression a real
   person feels.
6. **Nothing untrue ships.** Real proof exists but has not been supplied yet.
   Unsupplied slots render as visible placeholders, never as invented quotes,
   numbers, or credentials.

## Accessibility & Inclusion

Vietnamese text with full diacritics is the product language — every typeface
chosen must render Vietnamese correctly, which rules out many display faces.
This is a hard constraint, not a preference.

Audience spans older adults and teenagers, so type sizes, tap targets, and
contrast are set for the older end of that range.
