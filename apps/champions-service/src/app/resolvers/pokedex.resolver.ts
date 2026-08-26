import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import {
	BaseStats,
	ChampAbility,
	ChampDexEntry,
	ChampMove,
	ChampPokemonDetail,
	ChampPokemonSummary,
	ChampType as ChampTypeModel,
	DamageClass,
	TypeEfficacyEntry,
} from '../models/pokemon.model';
import { PrismaService } from '../prisma.service';

/**
 * Read side of the Champions API.
 *
 * Every query is scoped to a regulation. Champions has no fixed dex, so "is this Pokémon
 * legal?" is meaningless without one — the default is whatever regulation is current, and
 * callers can pin an older code to see what a past roster looked like.
 */

/** Prisma shapes, kept local so the mapping stays explicit rather than structural. */
type TypeRow = { slug: string; name: string };
type AbilityRow = { id: number; slug: string; name: string; effect_text: string | null; is_mega: boolean };
type MoveRow = {
	id: number;
	slug: string;
	name: string;
	damage_class: string;
	power: number | null;
	pp: number | null;
	accuracy: number | null;
	priority: number;
	flags: string[];
	effect_text: string | null;
	effect_chance: number | null;
	is_overridden: boolean;
	override_note: string | null;
	type: TypeRow;
};
type PokemonRow = {
	id: number;
	slug: string;
	name: string;
	national_dex_no: number;
	base_hp: number;
	base_attack: number;
	base_defense: number;
	base_special_attack: number;
	base_special_defense: number;
	base_speed: number;
	is_mega: boolean;
	sprite_key: string | null;
	type1: TypeRow;
	type2: TypeRow | null;
	megaOf?: { slug: string } | null;
};

const summarySelect = {
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
} as const;

function toBaseStats(row: PokemonRow): BaseStats {
	const total =
		row.base_hp + row.base_attack + row.base_defense + row.base_special_attack + row.base_special_defense + row.base_speed;
	return {
		hp: row.base_hp,
		attack: row.base_attack,
		defense: row.base_defense,
		specialAttack: row.base_special_attack,
		specialDefense: row.base_special_defense,
		speed: row.base_speed,
		total,
	};
}

function toSummary(row: PokemonRow): ChampPokemonSummary {
	return {
		id: row.id,
		slug: row.slug,
		name: row.name,
		nationalDexNo: row.national_dex_no,
		types: [row.type1.slug, ...(row.type2 ? [row.type2.slug] : [])],
		baseStats: toBaseStats(row),
		isMega: row.is_mega,
		spriteKey: row.sprite_key,
		megaOfSlug: row.megaOf?.slug ?? null,
	};
}

function toAbility(row: AbilityRow): ChampAbility {
	return { id: row.id, slug: row.slug, name: row.name, effectText: row.effect_text, isMega: row.is_mega };
}

function toMove(row: MoveRow): ChampMove {
	return {
		id: row.id,
		slug: row.slug,
		name: row.name,
		type: row.type.slug,
		damageClass: row.damage_class as DamageClass,
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

@Resolver()
export class PokedexResolver {
	constructor(private readonly prisma: PrismaService) {}

	/** Ids of every Pokémon legal in a regulation; defaults to the current one. */
	private async legalIds(regulationCode?: string): Promise<number[]> {
		const regulation = regulationCode
			? await this.prisma.regulation.findUnique({ where: { code: regulationCode }, select: { id: true } })
			: ((await this.prisma.regulation.findFirst({ where: { is_current: true }, select: { id: true } })) ??
				(await this.prisma.regulation.findFirst({ orderBy: { starts_on: 'desc' }, select: { id: true } })));

		if (!regulation) return [];

		const rows = await this.prisma.regulationLegality.findMany({
			where: { regulation_id: regulation.id },
			select: { pokemon_id: true },
		});
		return rows.map((row) => row.pokemon_id);
	}

	/**
	 * Name search for the team-preview slots.
	 *
	 * Prefix matches are ranked above substring matches: typing "gar" should offer Garchomp
	 * before Gyarados, because the slot picker has a two-second budget and the first result
	 * is the one that gets taken.
	 */
	@Query(() => [ChampPokemonSummary], { name: 'champSearch' })
	async champSearch(
		@Args('query') query: string,
		@Args('take', { type: () => Int, nullable: true, defaultValue: 12 }) take: number,
		@Args('regulation', { nullable: true }) regulation?: string,
	): Promise<ChampPokemonSummary[]> {
		const term = query.trim();
		const legal = await this.legalIds(regulation);
		if (legal.length === 0) return [];

		const rows = (await this.prisma.champPokemon.findMany({
			where: { id: { in: legal }, ...(term ? { name: { contains: term, mode: 'insensitive' } } : {}) },
			select: summarySelect,
			// A generous slice so ranking below has something to work with.
			take: Math.max(take * 4, 48),
			orderBy: { national_dex_no: 'asc' },
		})) as PokemonRow[];

		const lower = term.toLowerCase();
		const ranked = rows.sort((first, second) => {
			const aStarts = first.name.toLowerCase().startsWith(lower) ? 0 : 1;
			const bStarts = second.name.toLowerCase().startsWith(lower) ? 0 : 1;
			// Base forms before Megas: you pick Charizard, then decide about the stone.
			return aStarts - bStarts || Number(first.is_mega) - Number(second.is_mega) || first.national_dex_no - second.national_dex_no;
		});

		return ranked.slice(0, take).map(toSummary);
	}

	/**
	 * Browse the legal roster.
	 *
	 * Megas are excluded by default: a list that interleaves Charizard with Mega Charizard X
	 * and Y reads as three Pokémon when it is one line of thinking. They are one toggle away.
	 */
	@Query(() => [ChampPokemonSummary], { name: 'champRoster' })
	async champRoster(
		@Args('type', { nullable: true }) type?: string,
		@Args('search', { nullable: true }) search?: string,
		@Args('includeMegas', { nullable: true, defaultValue: false }) includeMegas?: boolean,
		@Args('take', { type: () => Int, nullable: true, defaultValue: 60 }) take?: number,
		@Args('skip', { type: () => Int, nullable: true, defaultValue: 0 }) skip?: number,
		@Args('regulation', { nullable: true }) regulation?: string,
	): Promise<ChampPokemonSummary[]> {
		const legal = await this.legalIds(regulation);
		if (legal.length === 0) return [];

		const rows = (await this.prisma.champPokemon.findMany({
			where: {
				id: { in: legal },
				...(includeMegas ? {} : { is_mega: false }),
				...(search ? { name: { contains: search, mode: 'insensitive' } } : {}),
				...(type ? { OR: [{ type1: { slug: type } }, { type2: { slug: type } }] } : {}),
			},
			select: summarySelect,
			orderBy: [{ national_dex_no: 'asc' }, { is_mega: 'asc' }],
			take: take ?? 60,
			skip: skip ?? 0,
		})) as PokemonRow[];

		return rows.map(toSummary);
	}

	/** How many entries match a roster filter, for the "showing N of M" line. */
	@Query(() => Int, { name: 'champRosterCount' })
	async champRosterCount(
		@Args('type', { nullable: true }) type?: string,
		@Args('search', { nullable: true }) search?: string,
		@Args('includeMegas', { nullable: true, defaultValue: false }) includeMegas?: boolean,
		@Args('regulation', { nullable: true }) regulation?: string,
	): Promise<number> {
		const legal = await this.legalIds(regulation);
		if (legal.length === 0) return 0;

		return this.prisma.champPokemon.count({
			where: {
				id: { in: legal },
				...(includeMegas ? {} : { is_mega: false }),
				...(search ? { name: { contains: search, mode: 'insensitive' } } : {}),
				...(type ? { OR: [{ type1: { slug: type } }, { type2: { slug: type } }] } : {}),
			},
		});
	}

	/**
	 * The entire legal roster in one call.
	 *
	 * This is the query the Pokédex is built on. Sending ~316 rows once and filtering in the
	 * browser is what makes the filters instant and freely combinable; paginating it would
	 * mean a round trip per keystroke and a much weaker product.
	 */
	@Query(() => [ChampDexEntry], { name: 'champDex' })
	async champDex(@Args('regulation', { nullable: true }) regulation?: string): Promise<ChampDexEntry[]> {
		const legal = await this.legalIds(regulation);
		if (legal.length === 0) return [];

		const rows = await this.prisma.champPokemon.findMany({
			where: { id: { in: legal } },
			select: {
				...summarySelect,
				learnset_is_approximate: true,
				abilities: { select: { ability: { select: { slug: true, name: true } } }, orderBy: { slot: 'asc' } },
				// Only Megas that are themselves legal count — a Mega filter must not promise a
				// form the current regulation has removed.
				megaForms: { where: { id: { in: legal } }, select: { id: true } },
			},
			orderBy: [{ national_dex_no: 'asc' }, { is_mega: 'asc' }],
		});

		return rows.map((row) => {
			const typed = row as unknown as PokemonRow & {
				learnset_is_approximate: boolean;
				abilities: { ability: { slug: string; name: string } }[];
				megaForms: { id: number }[];
			};
			const summary = toSummary(typed);

			return {
				...summary,
				hasMega: typed.megaForms.length > 0,
				abilitySlugs: typed.abilities.map((ability) => ability.ability.slug),
				abilityNames: typed.abilities.map((ability) => ability.ability.name),
				learnsetIsApproximate: typed.learnset_is_approximate,
			};
		});
	}

	/**
	 * Every ability with its effect text.
	 *
	 * A separate query rather than more fields on `champDex`: an ability is shared across many
	 * Pokémon, so sending them once keyed by slug is a fraction of the size of repeating the
	 * effect text on all ~316 roster rows. The Pokédex joins the two in the browser.
	 */
	@Query(() => [ChampAbility], { name: 'champAbilities' })
	async champAbilities(): Promise<ChampAbility[]> {
		const rows = await this.prisma.champAbility.findMany({
			select: { id: true, slug: true, name: true, effect_text: true, is_mega: true },
			orderBy: { name: 'asc' },
		});

		return rows.map(toAbility);
	}

	/**
	 * Ids of every Pokémon that learns a move — "who learns Fake Out".
	 *
	 * Ids rather than whole rows, because the Pokédex already holds the roster in memory and
	 * only needs to know which of it to keep. And a query per move rather than learnsets on
	 * `champDex`, because the full learnset table is orders of magnitude larger than the roster
	 * and most visits never touch this filter. One round trip, the first time a move is picked.
	 */
	@Query(() => [Int], { name: 'champMoveLearners' })
	async champMoveLearners(@Args('moveSlug') moveSlug: string): Promise<number[]> {
		const rows = await this.prisma.champLearnset.findMany({
			where: { move: { slug: moveSlug } },
			select: { pokemon_id: true },
		});

		return rows.map((row) => row.pokemon_id);
	}

	/** Every move on the roster, for the move filter's autocomplete. */
	@Query(() => [ChampMove], { name: 'champMoveIndex' })
	async champMoveIndex(): Promise<ChampMove[]> {
		const rows = await this.prisma.champMove.findMany({
			include: { type: true },
			orderBy: { name: 'asc' },
		});

		return rows.map(toMove);
	}

	/** Every type, for the filter row. */
	@Query(() => [ChampTypeModel], { name: 'champTypes' })
	async champTypes(): Promise<ChampTypeModel[]> {
		return this.prisma.champType.findMany({ orderBy: { id: 'asc' }, select: { id: true, slug: true, name: true } });
	}

	/**
	 * Moves that Champions changed, newest concern first.
	 *
	 * This is the page a mainline player most needs: everything they think they know about
	 * a move and now do not.
	 */
	@Query(() => [ChampMove], { name: 'champChangedMoves' })
	async champChangedMoves(): Promise<ChampMove[]> {
		const rows = await this.prisma.champMove.findMany({
			where: { is_overridden: true },
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
			orderBy: { name: 'asc' },
		});

		return (rows as MoveRow[]).map(toMove);
	}

	/** Full detail for a set of slugs — what the advisor needs to calculate with a team. */
	@Query(() => [ChampPokemonDetail], { name: 'champTeam' })
	async champTeam(@Args('slugs', { type: () => [String] }) slugs: string[]): Promise<ChampPokemonDetail[]> {
		if (slugs.length === 0) return [];

		const rows = await this.prisma.champPokemon.findMany({
			where: { slug: { in: slugs } },
			select: {
				...summarySelect,
				learnset_is_approximate: true,
				megaAbility: { select: { id: true, slug: true, name: true, effect_text: true, is_mega: true } },
				abilities: {
					select: {
						slot: true,
						is_hidden: true,
						ability: { select: { id: true, slug: true, name: true, effect_text: true, is_mega: true } },
					},
					orderBy: { slot: 'asc' },
				},
				megaForms: { select: summarySelect },
				learnset: {
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
			},
		});

		const details = rows.map((row) => {
			const typed = row as unknown as PokemonRow & {
				learnset_is_approximate: boolean;
				megaAbility: AbilityRow | null;
				abilities: { slot: number; is_hidden: boolean; ability: AbilityRow }[];
				megaForms: PokemonRow[];
				learnset: { move: MoveRow }[];
			};

			return {
				...toSummary(typed),
				learnsetIsApproximate: typed.learnset_is_approximate,
				megaAbility: typed.megaAbility ? toAbility(typed.megaAbility) : null,
				abilities: typed.abilities.map((ability) => ({ ability: toAbility(ability.ability), slot: ability.slot, isHidden: ability.is_hidden })),
				megaForms: typed.megaForms.map(toSummary),
				// Strongest first: the advisor and the UI both want the damaging moves at the top.
				moves: typed.learnset
					.map((learnsetEntry) => toMove(learnsetEntry.move))
					.sort((first, second) => (second.power ?? 0) - (first.power ?? 0) || first.name.localeCompare(second.name)),
			};
		});

		// Preserve the order the caller asked for, so team slots do not shuffle.
		const bySlug = new Map(details.map((detail) => [detail.slug, detail]));
		return slugs.map((slug) => bySlug.get(slug)).filter((slug): slug is ChampPokemonDetail => slug !== undefined);
	}

	/**
	 * The full type chart.
	 *
	 * 324 rows, fetched once and then driving unlimited client-side calculation — the same
	 * trade the School domain makes, and the reason the advisor can answer instantly.
	 */
	@Query(() => [TypeEfficacyEntry], { name: 'typeChart' })
	async typeChart(): Promise<TypeEfficacyEntry[]> {
		const rows = await this.prisma.champTypeEfficacy.findMany({
			select: {
				damage_factor: true,
				attackingType: { select: { slug: true } },
				defendingType: { select: { slug: true } },
			},
		});

		return rows.map((row) => ({
			attacking: row.attackingType.slug,
			defending: row.defendingType.slug,
			// Stored as a percentage upstream (0, 50, 100, 200); the engine wants a multiplier.
			factor: row.damage_factor / 100,
		}));
	}
}
