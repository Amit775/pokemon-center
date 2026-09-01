/**
 * The `?view=` preview flag.
 *
 * A parser, not a codec. `pokedex-url.ts` states three rules for anything this project reads out of
 * a URL, and only one of them has any code here: **decoding never throws** — a URL is user input,
 * and half of them arrive truncated by a chat client. The other two ("only non-defaults are
 * written" and "a URL with any param wins over stored state") describe a *writer*, and there is no
 * writer: the flag is set by typing it, deliberately, because a visible toggle would advertise a
 * preview as a supported feature. When Phase 5 decides which rendering survives, that is when this
 * grows an encoder — or disappears.
 *
 * It lives beside its only consumer rather than in a shared library. There is no util library to
 * put it in, kit rule 4 keeps it out of `ui-pokedex`, and the dependency constraints impose
 * nothing. Phase 5 adds the second caller, and *that* is when to extract it, with both shapes
 * known rather than one shape guessed twice.
 */
export type ViewMode = 'default' | 'table';

/** A URL is user input: anything unrecognised is the default, and this never throws. */
export function parseViewMode(raw: string | null | undefined): ViewMode {
	return raw === 'table' ? 'table' : 'default';
}
