import type { PokedexEntry } from '../pokedex-filter';
import type { RangeLandmark } from '../stat-range.component';

/**
 * One representative Pokémon per distinct value of a stat, for `<champions-stat-range>`'s
 * landmark label.
 *
 * The most famous holder of a value is the useful one — "faster than Jolteon" lands, "faster
 * than Accelgor" does not — and fame is not in the data. The lowest dex number is the closest
 * available proxy: it favours the older, better-known Pokémon at almost every value.
 *
 * Base forms only. A Mega's inflated stat would produce a landmark like "Mega Beedrill 145" for
 * a slider that ranges over the base species roster, which is not a value a base-stat filter can
 * ever land on.
 *
 * Recovered from the retired filter sidebar (`pokedex-filters.component.ts`, pre-AG-Grid) rather
 * than rewritten — same picking rule, same tie-break, now with the base-form filter folded in
 * instead of applied by every caller.
 */
export function pickLandmarks(entries: readonly PokedexEntry[], valueOf: (entry: PokedexEntry) => number): RangeLandmark[] {
	const best = new Map<number, RangeLandmark & { pokedexNumber: number }>();

	for (const entry of entries) {
		if (entry.isMega) continue;

		const value = valueOf(entry);
		const existing = best.get(value);
		if (!existing || entry.nationalPokedexNumber < existing.pokedexNumber) {
			best.set(value, { value, id: entry.id, name: entry.name, types: entry.types, pokedexNumber: entry.nationalPokedexNumber });
		}
	}

	return [...best.values()].sort((first, second) => first.value - second.value);
}
