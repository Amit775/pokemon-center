import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import {
	BaseStats,
	ChampionsAbility,
	ChampionsPokedexEntry,
	ChampionsMove,
	ChampionsPokemonDetail,
	ChampionsPokemonSummary,
	ChampionsType as ChampionsTypeModel,
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
	national_pokedex_number: number;
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
	national_pokedex_number: true,
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

function toSummary(row: PokemonRow): ChampionsPokemonSummary {
	return {
		id: row.id,
		slug: row.slug,
		name: row.name,
		nationalPokedexNumber: row.national_pokedex_number,
		types: [row.type1.slug, ...(row.type2 ? [row.type2.slug] : [])],
		baseStats: toBaseStats(row),
		isMega: row.is_mega,
		spriteKey: row.sprite_key,
		megaOfSlug: row.megaOf?.slug ?? null,
	};
}

function toAbility(row: AbilityRow): ChampionsAbility {
	return { id: row.id, slug: row.slug, name: row.name, effectText: row.effect_text, isMega: row.is_mega };
}

function toMove(row: MoveRow): ChampionsMove {
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

	/**
	 * Name search for the team-preview slots.
	 *
	 * Prefix matches are ranked above substring matches: typing "gar" should offer Garchomp
	 * before Gyarados, because the slot picker has a two-second budget and the first result
	 * is the one that gets taken.
	 */
	@Query(() => [ChampionsPokemonSummary], { name: 'championsSearch' })
	async championsSearch(
		@Args('query') query: string,
		@Args('take', { type: () => Int, nullable: true, defaultValue: 12 }) take: number,
	): Promise<ChampionsPokemonSummary[]> {
		const term = query.trim();

		const rows = (await this.prisma.championsPokemon.findMany({
			where: term ? { name: { contains: term, mode: 'insensitive' } } : {},
			select: summarySelect,
			// A generous slice so ranking below has something to work with.
			take: Math.max(take * 4, 48),
			orderBy: { national_pokedex_number: 'asc' },
		})) as PokemonRow[];

		const lower = term.toLowerCase();
		const ranked = rows.sort((first, second) => {
			const aStarts = first.name.toLowerCase().startsWith(lower) ? 0 : 1;
			const bStarts = second.name.toLowerCase().startsWith(lower) ? 0 : 1;
			// Base forms before Megas: you pick Charizard, then decide about the stone.
			return aStarts - bStarts || Number(first.is_mega) - Number(second.is_mega) || first.national_pokedex_number - second.national_pokedex_number;
		});

		return ranked.slice(0, take).map(toSummary);
	}

	/**
	 * Browse the legal roster.
	 *
	 * Megas are excluded by default: a list that interleaves Charizard with Mega Charizard X
	 * and Y reads as three Pokémon when it is one line of thinking. They are one toggle away.
	 */
	@Query(() => [ChampionsPokemonSummary], { name: 'championsRoster' })
	async championsRoster(
		@Args('type', { nullable: true }) type?: string,
		@Args('search', { nullable: true }) search?: string,
		@Args('includeMegas', { nullable: true, defaultValue: false }) includeMegas?: boolean,
		@Args('take', { type: () => Int, nullable: true, defaultValue: 60 }) take?: number,
		@Args('skip', { type: () => Int, nullable: true, defaultValue: 0 }) skip?: number,
	): Promise<ChampionsPokemonSummary[]> {
		const rows = (await this.prisma.championsPokemon.findMany({
			where: {
				...(includeMegas ? {} : { is_mega: false }),
				...(search ? { name: { contains: search, mode: 'insensitive' } } : {}),
				...(type ? { OR: [{ type1: { slug: type } }, { type2: { slug: type } }] } : {}),
			},
			select: summarySelect,
			orderBy: [{ national_pokedex_number: 'asc' }, { is_mega: 'asc' }],
			take: take ?? 60,
			skip: skip ?? 0,
		})) as PokemonRow[];

		return rows.map(toSummary);
	}

	/** How many entries match a roster filter, for the "showing N of M" line. */
	@Query(() => Int, { name: 'championsRosterCount' })
	async championsRosterCount(
		@Args('type', { nullable: true }) type?: string,
		@Args('search', { nullable: true }) search?: string,
		@Args('includeMegas', { nullable: true, defaultValue: false }) includeMegas?: boolean,
	): Promise<number> {
		return this.prisma.championsPokemon.count({
			where: {
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
	@Query(() => [ChampionsPokedexEntry], { name: 'championsPokedex' })
	async championsPokedex(): Promise<ChampionsPokedexEntry[]> {
		const rows = await this.prisma.championsPokemon.findMany({
			select: {
				...summarySelect,
				learnset_is_approximate: true,
				legality_status: true,
				restriction_note: true,
				introduced_in: true,
				abilities: { select: { ability: { select: { slug: true, name: true } } }, orderBy: { slot: 'asc' } },
				megaForms: { select: { id: true } },
			},
			orderBy: [{ national_pokedex_number: 'asc' }, { is_mega: 'asc' }],
		});

		return rows.map((row) => {
			const typed = row as unknown as PokemonRow & {
				learnset_is_approximate: boolean;
				legality_status: string;
				restriction_note: string | null;
				introduced_in: string | null;
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
				legalityStatus: typed.legality_status,
				restrictionNote: typed.restriction_note,
				introducedIn: typed.introduced_in,
			};
		});
	}

	/**
	 * Every ability with its effect text.
	 *
	 * A separate query rather than more fields on `championsPokedex`: an ability is shared across many
	 * Pokémon, so sending them once keyed by slug is a fraction of the size of repeating the
	 * effect text on all ~316 roster rows. The Pokédex joins the two in the browser.
	 */
	@Query(() => [ChampionsAbility], { name: 'championsAbilities' })
	async championsAbilities(): Promise<ChampionsAbility[]> {
		const rows = await this.prisma.championsAbility.findMany({
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
	 * `championsPokedex`, because the full learnset table is orders of magnitude larger than the roster
	 * and most visits never touch this filter. One round trip, the first time a move is picked.
	 */
	@Query(() => [Int], { name: 'championsMoveLearners' })
	async championsMoveLearners(@Args('moveSlug') moveSlug: string): Promise<number[]> {
		const rows = await this.prisma.championsLearnset.findMany({
			where: { move: { slug: moveSlug } },
			select: { pokemon_id: true },
		});

		return rows.map((row) => row.pokemon_id);
	}

	/** Every move on the roster, for the move filter's autocomplete. */
	@Query(() => [ChampionsMove], { name: 'championsMoveIndex' })
	async championsMoveIndex(): Promise<ChampionsMove[]> {
		const rows = await this.prisma.championsMove.findMany({
			include: { type: true },
			orderBy: { name: 'asc' },
		});

		return rows.map(toMove);
	}

	/** Every type, for the filter row. */
	@Query(() => [ChampionsTypeModel], { name: 'championsTypes' })
	async championsTypes(): Promise<ChampionsTypeModel[]> {
		return this.prisma.championsType.findMany({ orderBy: { id: 'asc' }, select: { id: true, slug: true, name: true } });
	}

	/**
	 * Moves that Champions changed, newest concern first.
	 *
	 * This is the page a mainline player most needs: everything they think they know about
	 * a move and now do not.
	 */
	@Query(() => [ChampionsMove], { name: 'championsChangedMoves' })
	async championsChangedMoves(): Promise<ChampionsMove[]> {
		const rows = await this.prisma.championsMove.findMany({
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
	@Query(() => [ChampionsPokemonDetail], { name: 'championsTeam' })
	async championsTeam(@Args('slugs', { type: () => [String] }) slugs: string[]): Promise<ChampionsPokemonDetail[]> {
		if (slugs.length === 0) return [];

		const rows = await this.prisma.championsPokemon.findMany({
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
		return slugs.map((slug) => bySlug.get(slug)).filter((slug): slug is ChampionsPokemonDetail => slug !== undefined);
	}

	/**
	 * The full type chart.
	 *
	 * 324 rows, fetched once and then driving unlimited client-side calculation — the same
	 * trade the School domain makes, and the reason the advisor can answer instantly.
	 */
	@Query(() => [TypeEfficacyEntry], { name: 'typeChart' })
	async typeChart(): Promise<TypeEfficacyEntry[]> {
		const rows = await this.prisma.championsTypeEfficacy.findMany({
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
