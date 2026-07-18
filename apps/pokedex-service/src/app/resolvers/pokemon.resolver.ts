import { Args, Int, Query, ResolveField, Resolver, Parent } from '@nestjs/graphql';
import { Pokemon, PokemonMoves } from '@pokemon-center/infra-pokedex-data';
import { PrismaService } from '../prisma.service';
import { whereIdOrSlug } from './lookup';

const POKEMON_INCLUDE = {
	species: true,
	types: { include: { type: true } },
	stats: { include: { stat: true } },
	abilities: { include: { ability: true } },
} as const;

@Resolver(() => Pokemon)
export class PokemonResolver {
	constructor(private readonly prisma: PrismaService) {}

	@Query(() => [Pokemon], {
		description: 'Paginated pokemon list; optionally fuzzy-filtered by name and scoped to a version group regional dex',
	})
	async pokemonList(
		@Args('take', { type: () => Int, defaultValue: 50 }) take: number,
		@Args('skip', { type: () => Int, defaultValue: 0 }) skip: number,
		@Args('search', { type: () => String, nullable: true }) search?: string,
		@Args('versionGroup', { type: () => String, nullable: true, description: 'Version group slug, e.g. firered-leafgreen' })
		versionGroup?: string,
		@Args('types', { type: () => [String], nullable: true, description: 'Type slugs; pokemon matching ANY of them' })
		types?: string[],
		@Args('generation', { type: () => Int, nullable: true, description: 'Introduced-in generation id' })
		generation?: number,
		@Args('sortBy', { type: () => String, nullable: true, description: 'id | name | height | weight' })
		sortBy?: string,
		@Args('sortDesc', { type: () => Boolean, defaultValue: false }) sortDesc = false,
	): Promise<Pokemon[]> {
		// Regional dex scoping + facets. generation and versionGroup both constrain species.
		const speciesWhere = {
			...(versionGroup
				? { dexNumbers: { some: { pokedex: { versionGroups: { some: { versionGroup: { identifier: versionGroup } } } } } } }
				: {}),
			...(generation ? { generation_id: generation } : {}),
		};
		const contextWhere = {
			...(Object.keys(speciesWhere).length ? { species: speciesWhere } : {}),
			...(types?.length ? { types: { some: { type: { identifier: { in: types } } } } } : {}),
		};
		const direction = sortDesc ? ('desc' as const) : ('asc' as const);
		const orderBy =
			sortBy === 'name'
				? { identifier: direction }
				: sortBy === 'height'
					? { height: direction }
					: sortBy === 'weight'
						? { weight: direction }
						: { id: direction };

		if (search) {
			const ids = await this.prisma.$queryRaw<{ id: number }[]>`
				SELECT id FROM pokemon
				WHERE identifier % ${search}
				ORDER BY similarity(identifier, ${search}) DESC
				LIMIT 100`;
			const rows = await this.prisma.pokemon.findMany({
				where: { id: { in: ids.map((r) => r.id) }, ...contextWhere },
				include: POKEMON_INCLUDE,
			});
			const order = new Map(ids.map((r, i) => [r.id, i]));
			return rows
				.sort((a, b) => (order.get(a.id) ?? 0) - (order.get(b.id) ?? 0))
				.slice(skip, skip + take) as unknown as Pokemon[];
		}
		return (await this.prisma.pokemon.findMany({
			where: contextWhere,
			take,
			skip,
			orderBy,
			include: POKEMON_INCLUDE,
		})) as unknown as Pokemon[];
	}

	@Query(() => Pokemon, { nullable: true, description: 'Lookup by canonical id (pokemon:25), numeric id, or slug (pikachu)' })
	async pokemon(@Args('idOrSlug') idOrSlug: string): Promise<Pokemon | null> {
		const where = whereIdOrSlug('pokemon', idOrSlug);
		return (await this.prisma.pokemon.findFirst({
			where,
			include: POKEMON_INCLUDE,
		})) as unknown as Pokemon | null;
	}

	@Query(() => [PokemonMoves], { description: 'Moves learnable by a pokemon, optionally per version group' })
	async pokemonMoves(
		@Args('idOrSlug') idOrSlug: string,
		@Args('versionGroup', { type: () => String, nullable: true }) versionGroup?: string,
		@Args('take', { type: () => Int, defaultValue: 100 }) take = 100,
		@Args('skip', { type: () => Int, defaultValue: 0 }) skip = 0,
	): Promise<PokemonMoves[]> {
		const pokemon = await this.prisma.pokemon.findFirst({ where: whereIdOrSlug('pokemon', idOrSlug), select: { id: true } });
		if (!pokemon) return [];
		return (await this.prisma.pokemonMoves.findMany({
			where: {
				pokemon_id: pokemon.id,
				...(versionGroup ? { versionGroup: { identifier: versionGroup } } : {}),
			},
			include: { move: { include: { type: true, damageClass: true } }, moveMethod: true, versionGroup: true },
			orderBy: [{ level: 'asc' }, { move_id: 'asc' }],
			take,
			skip,
		})) as unknown as PokemonMoves[];
	}

	@ResolveField(() => String, { description: 'Canonical resource id, e.g. pokemon:25' })
	canonicalId(@Parent() pokemon: Pokemon): string {
		return `pokemon:${pokemon.id}`;
	}

	@ResolveField(() => String, { description: 'URL-safe human slug' })
	slug(@Parent() pokemon: Pokemon): string {
		return pokemon.identifier;
	}
}
