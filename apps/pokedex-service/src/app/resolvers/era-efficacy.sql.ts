import { Prisma } from '@pokemon-center/prisma';

/**
 * The type chart as it stood in a given generation, as `(damage_type_id, target_type_id, damage_factor)` rows.
 *
 * Two things make an era chart differ from the modern one:
 *
 * 1. **Types that did not exist yet are dropped.** `types.generation_id` gates this — Steel and Dark
 *    arrive in generation 2, Fairy in generation 6 — so a generation-1 chart is 15x15, not 18x18.
 * 2. **Changed cells are overlaid from `type_efficacy_past`.** Following the veekun convention, a past
 *    row records the factor that applied *through* its `generation_id`, so the row governing generation
 *    G is the one with the smallest `generation_id >= G` (there may be several for one pair). That is
 *    what gives generation 1 its Ghost -> Psychic 0x bug, Poison <-> Bug 2x, and Ice -> Fire 1x.
 *
 * Passing `null` yields the modern chart untouched: no type filter (the base table is exactly the 18
 * current types) and no overlay.
 *
 * Composed as a `Prisma.Sql` fragment rather than a string so both `typeChart` and `matchupAnalysis`
 * run the *same* era logic — the two drifting apart is precisely the bug this replaces.
 */
export function eraEfficacySql(generationId: number | null): Prisma.Sql {
	if (generationId === null) {
		return Prisma.sql`
			SELECT type_efficacy.damage_type_id, type_efficacy.target_type_id, type_efficacy.damage_factor
			FROM type_efficacy`;
	}

	return Prisma.sql`
		WITH past AS (
			SELECT DISTINCT ON (type_efficacy_past.damage_type_id, type_efficacy_past.target_type_id)
			       type_efficacy_past.damage_type_id, type_efficacy_past.target_type_id, type_efficacy_past.damage_factor
			FROM type_efficacy_past
			WHERE type_efficacy_past.generation_id >= ${generationId}
			ORDER BY type_efficacy_past.damage_type_id, type_efficacy_past.target_type_id, type_efficacy_past.generation_id
		)
		SELECT type_efficacy.damage_type_id, type_efficacy.target_type_id,
		       COALESCE(past.damage_factor, type_efficacy.damage_factor) AS damage_factor
		FROM type_efficacy
		-- Two aliases on the same types table, so these two must stay aliased.
		JOIN types attacking_type ON attacking_type.id = type_efficacy.damage_type_id AND attacking_type.generation_id <= ${generationId}
		JOIN types defending_type ON defending_type.id = type_efficacy.target_type_id AND defending_type.generation_id <= ${generationId}
		LEFT JOIN past
		  ON past.damage_type_id = type_efficacy.damage_type_id
		 AND past.target_type_id = type_efficacy.target_type_id`;
}
