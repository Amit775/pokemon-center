import { Args, Field, Float, Int, ObjectType, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../prisma.service';
import { eraEfficacySql } from './era-efficacy.sql';

@ObjectType()
export class MatchupCounter {
	@Field(() => Int)
	pokemonId!: number;

	@Field(() => String)
	pokemonSlug!: string;

	@Field(() => String)
	bestMove!: string;

	@Field(() => String)
	bestMoveType!: string;

	@Field(() => Float)
	effectiveness!: number;

	@Field(() => Int)
	score!: number;
}

@ObjectType()
export class CoverageCell {
	@Field(() => String)
	defendingType!: string;

	@Field(() => Float)
	bestFactor!: number;

	@Field(() => String, { nullable: true })
	viaMove!: string | null;
}

@ObjectType()
export class TypeChartCell {
	@Field(() => String)
	damageType!: string;

	@Field(() => String)
	targetType!: string;

	/** Multiplier, not the stored percentage: 0, 0.5, 1 or 2 */
	@Field(() => Float)
	factor!: number;
}

@ObjectType()
export class TypeChart {
	/** The generation the requested version group belongs to; null for the modern chart */
	@Field(() => Int, { nullable: true })
	generationId!: number | null;

	/** Type slugs present in this era, in national type order - 15 for generation 1, 18 today */
	@Field(() => [String])
	types!: string[];

	@Field(() => [TypeChartCell])
	cells!: TypeChartCell[];
}

interface RawCounter {
	pokemon_id: number;
	pokemon_slug: string;
	best_move: string;
	best_move_type: string;
	effectiveness: number;
	score: number;
}

@Resolver()
export class AnalysisResolver {
	constructor(private readonly prisma: PrismaService) {}

	/** `type_efficacy_past` is keyed by generation, so an era request has to be resolved through the version group first. */
	private async generationOf(versionGroup: string): Promise<number | null> {
		const versionGroupRow = await this.prisma.versionGroups.findFirst({
			where: { identifier: versionGroup },
			select: { generation_id: true },
		});
		return versionGroupRow?.generation_id ?? null;
	}

	@Query(() => TypeChart, {
		description:
			'The type effectiveness matrix, era-correct: types that did not exist yet are omitted and changed cells are overlaid from type_efficacy_past. Omit versionGroup for the modern chart',
	})
	async typeChart(@Args('versionGroup', { type: () => String, nullable: true }) versionGroup?: string): Promise<TypeChart> {
		const generationId = versionGroup ? await this.generationOf(versionGroup) : null;
		// Unknown version group: empty rather than a silently-modern chart, matching how the other version-scoped queries degrade.
		if (versionGroup && generationId === null) return { generationId: null, types: [], cells: [] };

		const rows = await this.prisma.$queryRaw<{ damage_type: string; target_type: string; damage_factor: number }[]>`
			WITH efficacy AS (${eraEfficacySql(generationId)})
			SELECT atk.identifier AS damage_type, def.identifier AS target_type, e.damage_factor
			FROM efficacy e
			JOIN types atk ON atk.id = e.damage_type_id
			JOIN types def ON def.id = e.target_type_id
			ORDER BY atk.id, def.id`;

		return {
			generationId,
			// Ordered by attacker id above, so first appearance is national type order.
			types: [...new Set(rows.map((r) => r.damage_type))],
			cells: rows.map((r) => ({
				damageType: r.damage_type,
				targetType: r.target_type,
				factor: r.damage_factor / 100,
			})),
		};
	}

	@Query(() => [MatchupCounter], {
		description: 'Best offensive counters against a defender with the given types, honoring STAB, the attacker offensive stat, and (optionally) a version group regional dex + learnset',
	})
	async matchupAnalysis(
		@Args('defenderTypes', { type: () => [String] }) defenderTypes: string[],
		@Args('versionGroup', { type: () => String, nullable: true }) versionGroup?: string,
		@Args('take', { type: () => Int, defaultValue: 15 }) take = 15,
	): Promise<MatchupCounter[]> {
		if (defenderTypes.length === 0) return [];

		const versionGroupFilter = versionGroup ?? null;
		const generationId = versionGroupFilter ? await this.generationOf(versionGroupFilter) : null;
		if (versionGroupFilter && generationId === null) return [];

		const rows = await this.prisma.$queryRaw<RawCounter[]>`
			WITH efficacy AS (${eraEfficacySql(generationId)}),
			defender AS (
				SELECT id FROM types WHERE identifier = ANY(${defenderTypes})
			),
			matchup AS (
				-- product of per-type damage factors of each attacking type vs the defender combo.
				-- nullif() skips ln(0) for immunities; those groups are dropped by HAVING min > 0 anyway.
				-- efficacy is era-scoped, so attacking types the era lacks drop out here and never reach
				-- the join below; a defender type the era lacks likewise contributes no factor.
				SELECT te.damage_type_id,
				       exp(sum(ln(nullif(te.damage_factor, 0) / 100.0))) AS factor
				FROM efficacy te
				JOIN defender d ON d.id = te.target_type_id
				GROUP BY te.damage_type_id
				HAVING min(te.damage_factor) > 0
			),
			version_group_context AS (
				SELECT vg.id FROM version_groups vg WHERE ${versionGroupFilter}::text IS NULL OR vg.identifier = ${versionGroupFilter}
			),
			candidate_moves AS (
				SELECT DISTINCT pm.pokemon_id, pm.move_id
				FROM pokemon_moves pm
				WHERE ${versionGroupFilter}::text IS NULL OR pm.version_group_id IN (SELECT id FROM version_group_context)
			),
			scored AS (
				SELECT p.id AS pokemon_id,
				       p.identifier AS pokemon_slug,
				       m.identifier AS best_move,
				       mt.identifier AS best_move_type,
				       mu.factor AS effectiveness,
				       m.power
				         * mu.factor
				         * CASE WHEN EXISTS (SELECT 1 FROM pokemon_types pt WHERE pt.pokemon_id = p.id AND pt.type_id = m.type_id) THEN 1.5 ELSE 1.0 END
				         * (COALESCE(st.base_stat, 100) / 100.0) AS raw_score
				FROM candidate_moves cm
				JOIN moves m ON m.id = cm.move_id AND m.power IS NOT NULL
				JOIN types mt ON mt.id = m.type_id
				JOIN matchup mu ON mu.damage_type_id = m.type_id
				JOIN pokemon p ON p.id = cm.pokemon_id AND p.is_default = 1
				JOIN move_damage_classes dc ON dc.id = m.damage_class_id
				LEFT JOIN pokemon_stats st
				  ON st.pokemon_id = p.id
				 AND st.stat_id = CASE WHEN dc.identifier = 'physical' THEN 2 WHEN dc.identifier = 'special' THEN 4 ELSE NULL END
				WHERE (${versionGroupFilter}::text IS NULL OR EXISTS (
					SELECT 1 FROM pokemon_dex_numbers pdn
					JOIN pokedex_version_groups pvg ON pvg.pokedex_id = pdn.pokedex_id
					JOIN version_group_context ON version_group_context.id = pvg.version_group_id
					WHERE pdn.species_id = p.species_id
				))
			),
			ranked AS (
				SELECT DISTINCT ON (pokemon_id)
				       pokemon_id, pokemon_slug, best_move, best_move_type, effectiveness, raw_score
				FROM scored
				ORDER BY pokemon_id, raw_score DESC
			)
			SELECT pokemon_id, pokemon_slug, best_move, best_move_type, effectiveness,
			       round(raw_score)::int AS score
			FROM ranked
			ORDER BY score DESC
			LIMIT ${take}`;

		return rows.map((r) => ({
			pokemonId: r.pokemon_id,
			pokemonSlug: r.pokemon_slug,
			bestMove: r.best_move,
			bestMoveType: r.best_move_type,
			effectiveness: r.effectiveness,
			score: r.score,
		}));
	}

	@Query(() => [CoverageCell], {
		description: 'For a set of moves, the best damage multiplier achieved against each of the 18 defending types',
	})
	async coverage(@Args('moves', { type: () => [String] }) moves: string[]): Promise<CoverageCell[]> {
		if (moves.length === 0) return [];

		const rows = await this.prisma.$queryRaw<{ defending_type: string; best_factor: number; via_move: string | null }[]>`
			WITH picked AS (
				SELECT m.id, m.identifier, m.type_id
				FROM moves m
				WHERE m.identifier = ANY(${moves}) AND m.power IS NOT NULL
			),
			per_defender AS (
				SELECT def.identifier AS defending_type,
				       COALESCE(te.damage_factor, 100) / 100.0 AS factor,
				       pk.identifier AS via_move
				FROM types def
				CROSS JOIN picked pk
				LEFT JOIN type_efficacy te ON te.damage_type_id = pk.type_id AND te.target_type_id = def.id
				WHERE def.id < 10000
			),
			best AS (
				SELECT DISTINCT ON (defending_type)
				       defending_type, factor AS best_factor, via_move
				FROM per_defender
				ORDER BY defending_type, factor DESC
			)
			SELECT defending_type, best_factor, via_move FROM best ORDER BY defending_type`;

		return rows.map((r) => ({
			defendingType: r.defending_type,
			bestFactor: r.best_factor,
			viaMove: r.via_move,
		}));
	}
}
