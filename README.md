# Impeccable — installed for this project

[Impeccable](https://github.com/pbakaus/impeccable) v4.1.1 by Paul Bakaus, installed project-locally for Claude Code.
Design guidance for AI coding agents: 1 skill, 23 commands, and 59 deterministic anti-pattern rules.

Any Claude Code session opened on this repo picks it up automatically — no setup step.

Tutorial and reference: [`docs/impeccable-getting-started.md`](docs/impeccable-getting-started.md) —
a saved copy of [impeccable.style/tutorials/getting-started](https://impeccable.style/tutorials/getting-started/),
rebuilt from the upstream repo and this v4.1.1 install because that domain is egress-blocked here.

## What's here

| Path | What it is |
|------|------------|
| `.claude/skills/impeccable/` | The skill: `SKILL.md`, 39 reference playbooks, 108 scripts (detector, live mode, palette, hooks) |
| `.claude/agents/` | 4 sub-agents: `finish-reviewer`, `documenter`, `manual-edit-applier`, `asset-producer` |
| `.claude/settings.json` | `PostToolUse` hook (scans UI edits), `Stop` hook (deep pass), `SessionStart` hook (restores detector deps) |
| `package.json` | `htmlparser2`, `css-select`, `css-tree`, `domutils` — without these the detector falls back to regex mode and undercounts |

## Using it

Start a new project with:

```
/impeccable init
```

It asks whether the surface is brand (marketing, landing, portfolio) or product (app UI, dashboard, tool), then writes `PRODUCT.md` and `DESIGN.md` that every later command reads.

Then use any of the 23 commands as `/impeccable <command> <target>`:

`craft` · `init` · `document` · `extract` · `shape` · `critique` · `audit` · `polish` · `bolder` · `quieter` · `distill` · `harden` · `onboard` · `animate` · `colorize` · `typeset` · `layout` · `delight` · `overdrive` · `clarify` · `adapt` · `optimize` · `live`

```
/impeccable audit blog
/impeccable critique landing
/impeccable polish settings
/impeccable redo this hero section
```

`/impeccable pin audit` creates a standalone `/audit` shortcut.

## Running the detector by hand

```bash
node .claude/skills/impeccable/scripts/detect.mjs path/to/file.html
node .claude/skills/impeccable/scripts/doctor.mjs   # check the install for drift
```

Needs Node 22.18+ and `npm install` to have run. `npx impeccable detect <path>` works too and carries its own dependencies.

## Updating

This install was built from source rather than downloaded, because `impeccable.style` is not reachable from this environment. To refresh:

```bash
git clone --depth 1 https://github.com/pbakaus/impeccable /tmp/impeccable-src
cd /tmp/impeccable-src && bun install && bun run build:skills
cp -R /tmp/impeccable-src/dist/claude-code/.claude/. <this-repo>/.claude/
```

Then re-apply the `SessionStart` hook in `.claude/settings.json` (the build overwrites it) and run `doctor.mjs`.

Where the network allows it, `npx impeccable update` does the same thing in one step.

## License

Impeccable is Apache-2.0, © Paul Bakaus. See `.claude/skills/impeccable/` and the [upstream repo](https://github.com/pbakaus/impeccable) for full terms.
