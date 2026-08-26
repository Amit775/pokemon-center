import { Args, Field, Int, ObjectType, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PrismaService } from '../prisma.service';

/**
 * Compact mechanical projections of moves and natures.
 *
 * These exist because the entity-shaped queries do not reach `move_meta`, `move_meta_ailments`
 * or `move_meta_stat_changes` at all — the tables that say what a move actually *does*. Kept
 * domain-neutral (not "school*") so any consumer can use them.
 */

@ObjectType()
export class MoveStatChange {
	@Field(() => String)
	stat!: string;

	/** Stat stages: +2 for Swords Dance, -1 for Growl. */
	@Field(() => Int)
	change!: number;
}

@ObjectType()
export class MoveMechanics {
	@Field(() => String)
	slug!: string;

	@Field(() => String)
	type!: string;

	@Field(() => String)
	damageClass!: string;

	@Field(() => Int, { nullable: true })
	power!: number | null;

	/** Null means the move cannot miss. */
	@Field(() => Int, { nullable: true })
	accuracy!: number | null;

	@Field(() => Int, { nullable: true })
	pp!: number | null;

	@Field(() => Int)
	priority!: number;

	@Field(() => String, { nullable: true })
	ailment!: string | null;

	/** 0 means the ailment is guaranteed, not that it never happens. */
	@Field(() => Int)
	ailmentChance!: number;

	@Field(() => Int)
	critRate!: number;

	@Field(() => Int)
	flinchChance!: number;

	/** Positive drains HP from the target; negative is recoil to the user. */
	@Field(() => Int)
	drain!: number;

	@Field(() => Int)
	healing!: number;

	@Field(() => Int, { nullable: true })
	minHits!: number | null;

	@Field(() => Int, { nullable: true })
	maxHits!: number | null;

	@Field(() => Int)
	statChance!: number;

	@Field(() => [MoveStatChange])
	statChanges!: MoveStatChange[];
}

@ObjectType()
export class NatureEffect {
	@Field(() => String)
	slug!: string;

	/** The five neutral natures raise and lower the same stat. */
	@Field(() => String)
	increased!: string;

	@Field(() => String)
	decreased!: string;
}

@ObjectType()
export class EvolutionStep {
	@Field(() => String)
	from!: string;

	@Field(() => String)
	to!: string;

	/** `level-up`, `trade`, `use-item`, `shed`, … */
	@Field(() => String)
	trigger!: string;

	@Field(() => Int, { nullable: true })
	minLevel!: number | null;

	@Field(() => Int, { nullable: true })
	minHappiness!: number | null;

	@Field(() => String, { nullable: true })
	timeOfDay!: string | null;

	@Field(() => String, { nullable: true })
	triggerItem!: string | null;

	@Field(() => String, { nullable: true })
	heldItem!: string | null;

	@Field(() => String, { nullable: true })
	knownMove!: string | null;

	@Field(() => String, { nullable: true })
	tradeSpecies!: string | null;

	@Field(() => String, { nullable: true })
	location!: string | null;
}

@ObjectType()
export class Machine {
	@Field(() => Int)
	number!: number;

	@Field(() => String)
	move!: string;

	/** Named explicitly because TM numbering is only meaningful within one version group. */
	@Field(() => String)
	versionGroup!: string;
}

@ObjectType()
export class GrowthRate {
	@Field(() => String)
	slug!: string;

	/** Total experience required to reach level 100 on this curve. */
	@Field(() => Int)
	experienceToLevel100!: number;
}

interface RawMove {
	slug: string;
	type: string;
	damage_class: string;
	power: number | null;
	accuracy: number | null;
	pp: number | null;
	priority: number;
	ailment: string | null;
	ailment_chance: number;
	crit_rate: number;
	flinch_chance: number;
	drain: number;
	healing: number;
	min_hits: number | null;
	max_hits: number | null;
	stat_chance: number;
}

@Resolver()
export class MechanicsResolver {
	constructor(private readonly prisma: PrismaService) {}

	private async generationOf(versionGroup: string): Promise<number | null> {
		const versionGroupRow = await this.prisma.versionGroups.findFirst({
			where: { identifier: versionGroup },
			select: { generation_id: true },
		});
		return versionGroupRow?.generation_id ?? null;
	}

	@Query(() => [MoveMechanics], {
		description:
			'Moves with their move_meta mechanics (ailment, chances, drain, multi-hit, stat changes). Pass versionGroup to drop moves introduced after that era. Note: per-generation power/accuracy changes from move_changelog are not yet applied',
	})
	async moveMechanics(
		@Args('versionGroup', { type: () => String, nullable: true }) versionGroup?: string,
		@Args('take', { type: () => Int, defaultValue: 500 }) take = 500,
	): Promise<MoveMechanics[]> {
		const generationId = versionGroup ? await this.generationOf(versionGroup) : null;
		// Unknown version group: empty rather than a silently-modern list, matching typeChart.
		if (versionGroup && generationId === null) return [];

		const eraFilter = generationId === null ? Prisma.empty : Prisma.sql`AND m.generation_id <= ${generationId}`;

		const rows = await this.prisma.$queryRaw<RawMove[]>`
			SELECT m.identifier            AS slug,
			       t.identifier            AS type,
			       dc.identifier           AS damage_class,
			       m.power, m.accuracy, m.pp, m.priority,
			       ma.identifier           AS ailment,
			       COALESCE(mm.ailment_chance, 0) AS ailment_chance,
			       COALESCE(mm.crit_rate, 0)      AS crit_rate,
			       COALESCE(mm.flinch_chance, 0)  AS flinch_chance,
			       COALESCE(mm.drain, 0)          AS drain,
			       COALESCE(mm.healing, 0)        AS healing,
			       mm.min_hits, mm.max_hits,
			       COALESCE(mm.stat_chance, 0)    AS stat_chance
			FROM moves m
			JOIN types t ON t.id = m.type_id
			JOIN move_damage_classes dc ON dc.id = m.damage_class_id
			LEFT JOIN move_meta mm ON mm.move_id = m.id
			LEFT JOIN move_meta_ailments ma ON ma.id = mm.meta_ailment_id
			WHERE m.id < 10000
			${eraFilter}
			ORDER BY m.id
			LIMIT ${take}`;

		const changes = await this.prisma.$queryRaw<{ slug: string; stat: string; change: number }[]>`
			SELECT m.identifier AS slug, s.identifier AS stat, msc.change
			FROM move_meta_stat_changes msc
			JOIN moves m ON m.id = msc.move_id
			JOIN stats s ON s.id = msc.stat_id
			WHERE msc.change <> 0`;

		const bySlug = new Map<string, MoveStatChange[]>();
		for (const row of changes) {
			const list = bySlug.get(row.slug) ?? [];
			list.push({ stat: row.stat, change: row.change });
			bySlug.set(row.slug, list);
		}

		return rows.map((row) => ({
			slug: row.slug,
			type: row.type,
			damageClass: row.damage_class,
			power: row.power,
			accuracy: row.accuracy,
			pp: row.pp,
			priority: row.priority,
			ailment: row.ailment,
			ailmentChance: row.ailment_chance,
			critRate: row.crit_rate,
			flinchChance: row.flinch_chance,
			drain: row.drain,
			healing: row.healing,
			minHits: row.min_hits,
			maxHits: row.max_hits,
			statChance: row.stat_chance,
			statChanges: bySlug.get(row.slug) ?? [],
		}));
	}

	@Query(() => [EvolutionStep], {
		description: 'Evolution steps with their conditions, from pokemon_evolution. Only steps with a known pre-evolution are returned',
	})
	async evolutionList(@Args('take', { type: () => Int, defaultValue: 600 }) take = 600): Promise<EvolutionStep[]> {
		return this.prisma.$queryRaw<EvolutionStep[]>`
			SELECT pre.identifier   AS "from",
			       s.identifier     AS "to",
			       t.identifier     AS trigger,
			       pe.minimum_level     AS "minLevel",
			       pe.minimum_happiness AS "minHappiness",
			       NULLIF(pe.time_of_day, '') AS "timeOfDay",
			       ti.identifier    AS "triggerItem",
			       hi.identifier    AS "heldItem",
			       km.identifier    AS "knownMove",
			       ts.identifier    AS "tradeSpecies",
			       loc.identifier   AS location
			FROM pokemon_evolution pe
			JOIN pokemon_species s   ON s.id = pe.evolved_species_id
			JOIN pokemon_species pre ON pre.id = s.evolves_from_species_id
			JOIN evolution_triggers t ON t.id = pe.evolution_trigger_id
			LEFT JOIN items ti          ON ti.id = pe.trigger_item_id
			LEFT JOIN items hi          ON hi.id = pe.held_item_id
			LEFT JOIN moves km          ON km.id = pe.known_move_id
			LEFT JOIN pokemon_species ts ON ts.id = pe.trade_species_id
			LEFT JOIN locations loc     ON loc.id = pe.location_id
			ORDER BY pe.id
			LIMIT ${take}`;
	}

	@Query(() => [Machine], {
		description:
			'TM/HM numbers for a version group. TM numbering only means anything within one game, so when versionGroup is omitted the most recent group that has machines is used and named on every row',
	})
	async machineList(@Args('versionGroup', { type: () => String, nullable: true }) versionGroup?: string): Promise<Machine[]> {
		let versionGroupId: number | null = null;

		if (versionGroup) {
			const group = await this.prisma.versionGroups.findFirst({ where: { identifier: versionGroup }, select: { id: true } });
			versionGroupId = group?.id ?? null;
		} else {
			// Fullest list rather than newest: the highest version_group_id is a DLC group with a
			// handful of machines, which makes for a thin and unrepresentative TM set.
			const [fullest] = await this.prisma.$queryRaw<{ version_group_id: number }[]>`
				SELECT version_group_id
				FROM machines
				GROUP BY version_group_id
				ORDER BY count(*) DESC, version_group_id DESC
				LIMIT 1`;
			versionGroupId = fullest?.version_group_id ?? null;
		}

		if (versionGroupId === null) return [];

		return this.prisma.$queryRaw<Machine[]>`
			SELECT m.machine_number AS number,
			       mv.identifier    AS move,
			       vg.identifier    AS "versionGroup"
			FROM machines m
			JOIN moves mv          ON mv.id = m.move_id
			JOIN version_groups vg ON vg.id = m.version_group_id
			WHERE m.version_group_id = ${versionGroupId}
			ORDER BY m.machine_number`;
	}

	@Query(() => [GrowthRate], { description: 'The experience curves and the total experience each needs to reach level 100' })
	async growthRateList(): Promise<GrowthRate[]> {
		return this.prisma.$queryRaw<GrowthRate[]>`
			SELECT g.identifier AS slug, e.experience AS "experienceToLevel100"
			FROM growth_rates g
			JOIN experience e ON e.growth_rate_id = g.id AND e.level = 100
			ORDER BY e.experience`;
	}

	@Query(() => [NatureEffect], {
		description: 'The 25 natures and the stats each raises and lowers. Neutral natures raise and lower the same stat',
	})
	async natureList(): Promise<NatureEffect[]> {
		const rows = await this.prisma.$queryRaw<{ slug: string; increased: string; decreased: string }[]>`
			SELECT n.identifier   AS slug,
			       inc.identifier AS increased,
			       dec.identifier AS decreased
			FROM natures n
			JOIN stats inc ON inc.id = n.increased_stat_id
			JOIN stats dec ON dec.id = n.decreased_stat_id
			ORDER BY n.id`;

		return rows;
	}
}
