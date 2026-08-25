---
name: pokedex-component
description: Recipe for building a component in libs/ui-pokedex (the Type Prism design system). Use when creating or reviewing any presentational pokedex UI component, so every one comes out consistent — standalone, OnPush, signal inputs, token-only styling, CDK-backed behavior, accessible.
---

# Pokedex component recipe

The `ui-pokedex` kit is **CDK-forward**: behavior/a11y comes from Angular CDK primitives, the
*look* is 100% ours, driven by the token layer. Styled Angular Material is used only where its look
is genuinely neutral (icons). Follow this recipe for every component so the kit never drifts.

## Where components live

```
libs/ui-pokedex/src/lib/<name>/<name>.component.ts   (+ .html/.scss if not inline)
libs/ui-pokedex/src/index.ts                          ← export it
libs/ui-pokedex/src/styles/tokens.scss                ← the ONLY place color/space/radius values live
```

Selector prefix is **`pokedex`** (`pokedex-type-chip`, `pokedex-stat-bar`, …). Kebab-case, element
selector. Spelled out, never `pkd` — see the no-abbreviations rule in `AGENTS.md`, which is the
project's first naming rule and applies to selectors as much as to identifiers.

> The whole kit has been migrated off the old `pkd-` prefix — every component and every consuming
> template uses `pokedex-`. The lint rule (`libs/ui-pokedex/eslint.config.mjs`) enforces it, so a
> stray `pkd-` selector now fails the build rather than sliding through review.

## Hard rules (non-negotiable)

0. **No abbreviations, anywhere.** Selector, class name, inputs, outputs, locals, CSS class names.
   `pokedex`, never `pkd` or `dex`; `context`, never `ctx`; `dexNumber` is `pokedexNumber`. Only
   terms the game itself abbreviates are exempt (HP, PP, SP, STAB, IV, EV). This is the project's
   first naming rule; it outranks brevity every time.
1. **`standalone: true`, `changeDetection: ChangeDetectionStrategy.OnPush`.** Always.
2. **Inputs are signal `input()` / `input.required()`**, outputs are `output()`. No `@Input`/`@Output` decorators. Two-way state uses `model()`.
3. **Styling reads ONLY design tokens** — `var(--surface)`, `var(--ink)`, `var(--accent)`, `var(--t-<type>)`, `var(--r-md)`, `var(--s-3)`, `var(--shadow-md)`, etc. **Never** a raw hex, never a Material internal (`--mat-*`), never a hardcoded px for color-bearing spacing. This is what keeps the single-dial theme promise true.
4. **No data fetching, no store, no HttpClient.** ui-pokedex is pure presentation; it must not depend on `data-access-pokedex` or `domain-*`. Data comes in via inputs, events go out via outputs.
5. **Interactive behavior is built on a CDK primitive**, never hand-rolled:
   - selectable list / options → `@angular/cdk/listbox` (`cdkListbox`/`cdkOption`)
   - menus / dropdowns → `@angular/cdk/menu`
   - popovers / dialogs / the Ctrl-K overlay → `@angular/cdk/overlay` + `@angular/cdk/a11y` (`cdkTrapFocus`, `LiveAnnouncer`)
   - long lists → `@angular/cdk/scrolling` (`CdkVirtualScrollViewport`)
   - responsive branching → `BreakpointObserver`
   Hand-rolling focus traps, roving tabindex, or ARIA keyboard patterns is a bug, not a shortcut.
6. **Accessibility**: every interactive element is keyboard-operable with a visible `:focus-visible`
   style; images/portraits have alt text or `aria-hidden` when decorative; color is never the only
   signal (pair with text/shape); honor `@media (prefers-reduced-motion: reduce)`.
7. **Add a demo** to the kit route (`/pokedex/kit`) so the component is eyeball-verifiable against
   the mockup, and export it from `src/index.ts`.

## Template

```ts
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
	selector: 'pokedex-thing',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<!-- token-driven markup -->`,
	styles: `
		:host { display: inline-flex; }
		/* every value is a token */
	`,
})
export class ThingComponent {
	value = input.required<string>();
}
```

## Review checklist (self-check before committing)

- [ ] no abbreviations — selector is `pokedex-*`, no `pkd`/`dex`/`ctx` in any name
- [ ] standalone + OnPush
- [ ] all inputs/outputs are signal-based
- [ ] zero raw hex / zero `--mat-*` / zero hardcoded color in styles — tokens only
- [ ] no store/http/domain import
- [ ] interactive parts sit on a CDK primitive
- [ ] keyboard operable, visible focus, reduced-motion respected, decorative images hidden from AT
- [ ] exported from index.ts + demoed in the kit route
- [ ] flips correctly in both light and dark (toggle and check)

## Tokens available (see `styles/tokens.scss` for the full set)

Color: `--page-bg --surface --surface-raised --surface-sunken --ink --ink-muted --ink-faint --line
--accent --accent-ink --accent-soft --good --warn --crit`, type colors `--t-fire … --t-fairy`.
Shape/space/motion: `--r-sm|md|lg|xl|pill`, `--s-1…8`, `--shadow-sm|md|lg`, `--font-sans|mono`,
`--fs-xs…2xl`, `--ease`, `--dur`.
