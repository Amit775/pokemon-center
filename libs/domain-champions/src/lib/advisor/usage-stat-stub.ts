import type { UsageStat } from '@pokemon-center/champions-engine';

/**
 * Stub for the usage-data ingestion side task (see `docs/companion-plan.md`, "Side task").
 *
 * Returns null for every species until that pipeline lands, so every Opponent Intel Card falls
 * back to the existing inferred-build heuristic rather than showing a fabricated number.
 * Replace the body with a real GraphQL-backed lookup once the pipeline exists — the call site
 * (`advisor.store.ts`) does not need to change, only this function.
 */
export function getUsageStat(pokemonSlug: string): UsageStat | null {
	void pokemonSlug;
	return null;
}
