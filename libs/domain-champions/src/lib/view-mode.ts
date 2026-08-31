/**
 * The `?view=` preview flag. A parser, not a codec: there is no writer, because the flag is set by
 * typing it — a visible toggle would advertise a preview as a supported feature.
 *
 * Lives beside its only consumer. Phase 5 adds the second caller, and that is when to extract it.
 */
export type ViewMode = 'default' | 'table';

/** A URL is user input: anything unrecognised is the default, and this never throws. */
export function parseViewMode(raw: string | null | undefined): ViewMode {
	return raw === 'table' ? 'table' : 'default';
}
