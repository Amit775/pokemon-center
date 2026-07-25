import type { ReferenceData, ReferenceKey } from './types';

/** Anything that declares reference needs — an exercise generator or a scenario spec. */
export interface ReferenceConsumer {
	requires: readonly ReferenceKey[];
}

/**
 * Fetch a reference section, or fail loudly.
 *
 * Reference sections load independently, so "the move table has not arrived yet" is a normal
 * state rather than a bug. What must never happen is a generator quietly producing a
 * malformed question from missing data — so this throws with the lesson named.
 */
export function requireRef<K extends ReferenceKey>(ref: ReferenceData, key: K, lessonId: string): NonNullable<ReferenceData[K]> {
	const section = ref[key];
	if (section === undefined) {
		throw new Error(`[${lessonId}] missing reference data: ${key}`);
	}
	return section as NonNullable<ReferenceData[K]>;
}

/** Whether everything a generator needs is loaded — lets the UI offer only playable lessons. */
export function hasRequired(ref: ReferenceData, generator: ReferenceConsumer): boolean {
	return generator.requires.every((key) => ref[key] !== undefined);
}

/** The sections a generator wants but does not have; useful for explaining *why* something is unavailable. */
export function missingRefs(ref: ReferenceData, generator: ReferenceConsumer): ReferenceKey[] {
	return generator.requires.filter((key) => ref[key] === undefined);
}
