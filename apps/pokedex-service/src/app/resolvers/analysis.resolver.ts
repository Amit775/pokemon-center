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
			SELECT attacking_type.identifier AS damage_type, defending_type.identifier AS target_type, efficacy.damage_factor
			FROM efficacy
			-- Two aliases on the same types table, so these two must stay aliased.
			JOIN types attacking_type ON attacking_type.id = efficacy.damage_type_id
			JOIN types defending_type ON defending_type.id = efficacy.target_type_id
			ORDER BY attacking_type.id, defending_type.id`;

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
				SELECT efficacy.damage_type_id,
				       exp(sum(ln(nullif(efficacy.damage_factor, 0) / 100.0))) AS factor
				FROM efficacy
				JOIN defender ON defender.id = efficacy.target_type_id
				GROUP BY efficacy.damage_type_id
				HAVING min(efficacy.damage_factor) > 0
			),
			version_group_context AS (
				SELECT version_groups.id FROM version_groups WHERE ${versionGroupFilter}::text IS NULL OR version_groups.identifier = ${versionGroupFilter}
			),
			candidate_moves AS (
				SELECT DISTINCT pokemon_moves.pokemon_id, pokemon_moves.move_id
				FROM pokemon_moves
				WHERE ${versionGroupFilter}::text IS NULL OR pokemon_moves.version_group_id IN (SELECT id FROM version_group_context)
			),
			scored AS (
				SELECT pokemon.id AS pokemon_id,
				       pokemon.identifier AS pokemon_slug,
				       moves.identifier AS best_move,
				       move_type.identifier AS best_move_type,
				       matchup.factor AS effectiveness,
				       moves.power
				         * matchup.factor
				         * CASE WHEN EXISTS (SELECT 1 FROM pokemon_types WHERE pokemon_types.pokemon_id = pokemon.id AND pokemon_types.type_id = moves.type_id) THEN 1.5 ELSE 1.0 END
				         * (COALESCE(pokemon_stats.base_stat, 100) / 100.0) AS raw_score
				FROM candidate_moves
				JOIN moves ON moves.id = candidate_moves.move_id AND moves.power IS NOT NULL
				-- Aliased because types is also joined as the defender elsewhere in this statement.
				JOIN types move_type ON move_type.id = moves.type_id
				JOIN matchup ON matchup.damage_type_id = moves.type_id
				JOIN pokemon ON pokemon.id = candidate_moves.pokemon_id AND pokemon.is_default = 1
				JOIN move_damage_classes ON move_damage_classes.id = moves.damage_class_id
				LEFT JOIN pokemon_stats
				  ON pokemon_stats.pokemon_id = pokemon.id
				 AND pokemon_stats.stat_id = CASE WHEN move_damage_classes.identifier = 'physical' THEN 2 WHEN move_damage_classes.identifier = 'special' THEN 4 ELSE NULL END
				WHERE (${versionGroupFilter}::text IS NULL OR EXISTS (
					SELECT 1 FROM pokemon_dex_numbers
					JOIN pokedex_version_groups ON pokedex_version_groups.pokedex_id = pokemon_dex_numbers.pokedex_id
					JOIN version_group_context ON version_group_context.id = pokedex_version_groups.version_group_id
					WHERE pokemon_dex_numbers.species_id = pokemon.species_id
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
				SELECT moves.id, moves.identifier, moves.type_id
				FROM moves
				WHERE moves.identifier = ANY(${moves}) AND moves.power IS NOT NULL
			),
			per_defender AS (
				SELECT defending_type.identifier AS defending_type,
				       COALESCE(type_efficacy.damage_factor, 100) / 100.0 AS factor,
				       picked.identifier AS via_move
				FROM types defending_type
				CROSS JOIN picked
				LEFT JOIN type_efficacy ON type_efficacy.damage_type_id = picked.type_id AND type_efficacy.target_type_id = defending_type.id
				WHERE defending_type.id < 10000
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
