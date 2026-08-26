import { BadRequestException } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoxPokemon, BoxPokemonInput, StatPointSpreadInput, Team, TeamInput } from '../models/box.model';
import { PrismaService } from '../prisma.service';

/**
 * Box and team writes.
 *
 * The first mutable surface in this workspace. The mainline API is read-only by decree; this
 * one is not, because a companion you cannot save a team into is a calculator.
 *
 * Every write validates the SP budget server-side as well as in the UI. The client check is
 * for feedback while typing; this one is for correctness, because a spread that breaks the
 * 66/32 rule would make every downstream number quietly wrong.
 */

const MAX_MOVES = 4;
const TEAM_SIZE = 6;

/**
 * Champions' Stat Point budget.
 *
 * Duplicated from `SP_TOTAL_BUDGET` / `SP_PER_STAT_CAP` in champions-engine rather than
 * imported: this service compiles with a `rootDir` that cannot reach across libraries.
 * The engine remains the source of truth — the UI validates against it live, and these two
 * are a server-side backstop. If they ever drift, the server rejects something the client
 * accepted, which is a loud failure rather than a silent one.
 */
const SP_TOTAL_BUDGET = 66;
const SP_PER_STAT_CAP = 32;

/** Shape returned by the includes below. */
const boxInclude = {
	pokemon: {
		select: {
			id: true,
			slug: true,
			name: true,
			national_dex_no: true,
			base_hp: true,
			base_attack: true,
			base_defense: true,
			base_special_attack: true,
			base_special_defense: true,
			base_speed: true,
			is_mega: true,
			sprite_key: true,
			type1: { select: { slug: true, name: true } },
			type2: { select: { slug: true, name: true } },
			megaOf: { select: { slug: true } },
		},
	},
	ability: { select: { id: true, slug: true, name: true, effect_text: true, is_mega: true } },
	moves: {
		orderBy: { slot: 'asc' },
		select: {
			move: {
				select: {
					id: true,
					slug: true,
					name: true,
					damage_class: true,
					power: true,
					pp: true,
					accuracy: true,
					priority: true,
					flags: true,
					effect_text: true,
					effect_chance: true,
					is_overridden: true,
					override_note: true,
					type: { select: { slug: true, name: true } },
				},
			},
		},
	},
} as const;

/* eslint-disable @typescript-eslint/no-explicit-any -- the mapping below is deliberately
   structural; typing every Prisma select shape by hand would be noise. */

function toSummary(row: any) {
	const total =
		row.base_hp + row.base_attack + row.base_defense + row.base_special_attack + row.base_special_defense + row.base_speed;
	return {
		id: row.id,
		slug: row.slug,
		name: row.name,
		nationalDexNo: row.national_dex_no,
		types: [row.type1.slug, ...(row.type2 ? [row.type2.slug] : [])],
		baseStats: {
			hp: row.base_hp,
			attack: row.base_attack,
			defense: row.base_defense,
			specialAttack: row.base_special_attack,
			specialDefense: row.base_special_defense,
			speed: row.base_speed,
			total,
		},
		isMega: row.is_mega,
		spriteKey: row.sprite_key,
		megaOfSlug: row.megaOf?.slug ?? null,
	};
}

function toMove(row: any) {
	return {
		id: row.id,
		slug: row.slug,
		name: row.name,
		type: row.type.slug,
		damageClass: row.damage_class,
		power: row.power,
		pp: row.pp,
		accuracy: row.accuracy,
		priority: row.priority,
		flags: row.flags,
		effectText: row.effect_text,
		effectChance: row.effect_chance,
		isOverridden: row.is_overridden,
		overrideNote: row.override_note,
	};
}

function toBoxPokemon(row: any): BoxPokemon {
	const statPoints = {
		hp: row.sp_hp,
		attack: row.sp_attack,
		defense: row.sp_defense,
		specialAttack: row.sp_special_attack,
		specialDefense: row.sp_special_defense,
		speed: row.sp_speed,
		total: row.sp_hp + row.sp_attack + row.sp_defense + row.sp_special_attack + row.sp_special_defense + row.sp_speed,
	};

	return {
		id: row.id,
		pokemon: toSummary(row.pokemon),
		nickname: row.nickname,
		nature: row.nature,
		ability: row.ability
			? { id: row.ability.id, slug: row.ability.slug, name: row.ability.name, effectText: row.ability.effect_text, isMega: row.ability.is_mega }
			: null,
		item: row.item,
		statPoints,
		moves: row.moves.map((move: any) => toMove(move.move)),
		notes: row.notes,
	};
}

/* eslint-enable @typescript-eslint/no-explicit-any */

/**
 * Reject a spread that breaks Champions' budget.
 *
 * Mirrors `validateSpread` in champions-engine, which the UI uses for live feedback. Checked
 * again here because an invalid spread does not fail loudly — it silently produces stats the
 * game cannot produce, and every damage number downstream inherits the error.
 */
function assertLegalSpread(spread: StatPointSpreadInput): void {
	const values = Object.entries(spread) as [string, number][];
	const total = values.reduce((sum, [, value]) => sum + value, 0);

	const negative = values.filter(([, value]) => value < 0).map(([key]) => key);
	if (negative.length > 0) throw new BadRequestException(`Stat points cannot be negative: ${negative.join(', ')}.`);

	const overCap = values.filter(([, value]) => value > SP_PER_STAT_CAP).map(([key]) => key);
	if (overCap.length > 0) {
		throw new BadRequestException(`At most ${SP_PER_STAT_CAP} stat points per stat; over the cap: ${overCap.join(', ')}.`);
	}

	if (total > SP_TOTAL_BUDGET) {
		throw new BadRequestException(`At most ${SP_TOTAL_BUDGET} stat points in total; this spread uses ${total}.`);
	}
}

@Resolver()
export class BoxResolver {
	constructor(private readonly prisma: PrismaService) {}

	@Query(() => [BoxPokemon], { name: 'box' })
	async box(): Promise<BoxPokemon[]> {
		const rows = await this.prisma.boxPokemon.findMany({ include: boxInclude, orderBy: { created_at: 'desc' } });
		return rows.map(toBoxPokemon);
	}

	@Query(() => [Team], { name: 'teams' })
	async teams(@Args('isMine', { nullable: true, defaultValue: true }) isMine?: boolean): Promise<Team[]> {
		const rows = await this.prisma.team.findMany({
			where: isMine === undefined ? {} : { is_mine: isMine },
			orderBy: { updated_at: 'desc' },
			include: {
				members: {
					orderBy: { slot: 'asc' },
					include: { pokemon: { select: boxInclude.pokemon.select }, boxPokemon: { include: boxInclude } },
				},
			},
		});

		return rows.map((team) => ({
			id: team.id,
			label: team.label,
			isMine: team.is_mine,
			notes: team.notes,
			members: team.members.map((member) => ({
				slot: member.slot,
				pokemon: toSummary(member.pokemon),
				boxPokemon: member.boxPokemon ? toBoxPokemon(member.boxPokemon) : null,
			})),
		}));
	}

	/** Create or update one Box entry, moves and all. */
	@Mutation(() => BoxPokemon, { name: 'saveBoxPokemon' })
	async saveBoxPokemon(@Args('input') input: BoxPokemonInput): Promise<BoxPokemon> {
		assertLegalSpread(input.statPoints);

		const moveIds = [...new Set(input.moveIds)].slice(0, MAX_MOVES);
		const fields = {
			pokemon_id: input.pokemonId,
			nickname: input.nickname ?? null,
			nature: input.nature ?? null,
			ability_id: input.abilityId ?? null,
			item: input.item ?? null,
			sp_hp: input.statPoints.hp,
			sp_attack: input.statPoints.attack,
			sp_defense: input.statPoints.defense,
			sp_special_attack: input.statPoints.specialAttack,
			sp_special_defense: input.statPoints.specialDefense,
			sp_speed: input.statPoints.speed,
			notes: input.notes ?? null,
		};

		const saved = input.id
			? await this.prisma.boxPokemon.update({ where: { id: input.id }, data: fields })
			: await this.prisma.boxPokemon.create({ data: fields });

		// Moves are rebuilt wholesale — four rows, and it keeps slot order honest.
		await this.prisma.boxPokemonMove.deleteMany({ where: { box_pokemon_id: saved.id } });
		if (moveIds.length > 0) {
			await this.prisma.boxPokemonMove.createMany({
				data: moveIds.map((moveId, index) => ({ box_pokemon_id: saved.id, move_id: moveId, slot: index + 1 })),
			});
		}

		const row = await this.prisma.boxPokemon.findUniqueOrThrow({ where: { id: saved.id }, include: boxInclude });
		return toBoxPokemon(row);
	}

	@Mutation(() => Boolean, { name: 'deleteBoxPokemon' })
	async deleteBoxPokemon(@Args('id', { type: () => Int }) id: number): Promise<boolean> {
		await this.prisma.boxPokemon.delete({ where: { id } });
		return true;
	}

	/** Create or update a team. Members are replaced wholesale. */
	@Mutation(() => Team, { name: 'saveTeam' })
	async saveTeam(@Args('input') input: TeamInput): Promise<Team> {
		const members = input.members.filter((member) => member.slot >= 1 && member.slot <= TEAM_SIZE);
		const slots = new Set(members.map((member) => member.slot));
		if (slots.size !== members.length) throw new BadRequestException('Two members cannot share a slot.');

		const regulation =
			(await this.prisma.regulation.findFirst({ where: { is_current: true }, select: { id: true } })) ??
			(await this.prisma.regulation.findFirst({ orderBy: { starts_on: 'desc' }, select: { id: true } }));
		if (!regulation) throw new BadRequestException('No regulation is loaded; seed one before saving a team.');

		const fields = { label: input.label, is_mine: input.isMine, notes: input.notes ?? null, regulation_id: regulation.id };

		const team = input.id
			? await this.prisma.team.update({ where: { id: input.id }, data: fields })
			: await this.prisma.team.create({ data: fields });

		await this.prisma.teamMember.deleteMany({ where: { team_id: team.id } });
		if (members.length > 0) {
			await this.prisma.teamMember.createMany({
				data: members.map((member) => ({
					team_id: team.id,
					slot: member.slot,
					pokemon_id: member.pokemonId,
					box_pokemon_id: member.boxPokemonId ?? null,
				})),
			});
		}

		return (await this.teams(input.isMine)).find((existingTeam) => existingTeam.id === team.id) as Team;
	}

	@Mutation(() => Boolean, { name: 'deleteTeam' })
	async deleteTeam(@Args('id', { type: () => Int }) id: number): Promise<boolean> {
		await this.prisma.team.delete({ where: { id } });
		return true;
	}
}
