import type { UsageStat } from '@pokemon-center/champions-engine';

/**
 * Stub for the usage-data ingestion side task (see `docs/companion-plan.md`, "Side task").
 *
 * Returns null for every species until that pipeline lands, so every Opponent Intel Card falls
 * back to the existing inferred-build heuristic rather than showing a fabricated number.
 * The `UsageStat | null` shape is the stable contract this stub establishes. The real
 * implementation will likely be GraphQL-backed and therefore asynchronous (e.g. a
 * `championsResource` keyed on the revealed opponent slugs) rather than a synchronous function —
 * at that point `advisor.store.ts`'s `theirIntel` computed WILL need to change to read that
 * resource and handle its loading state, not just call a function directly. Only the data shape
 * is guaranteed stable, not this synchronous call site.
 */
export function getUsageStat(pokemonSlug: string): UsageStat | null {
	void pokemonSlug;
	return null;
}
