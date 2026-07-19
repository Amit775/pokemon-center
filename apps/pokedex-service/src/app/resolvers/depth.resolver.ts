import { Args, Query, Resolver, Int } from '@nestjs/graphql';
import { Encounters, MoveFlavorText, PokemonMoves, PokemonSpecies, PokemonSpeciesFlavorText } from '@pokemon-center/infra-pokedex-data';
import { PrismaService } from '../prisma.service';
import { whereIdOrSlug } from './lookup';

/** English; display-language selection arrives with R5 i18n. */
const LANGUAGE_EN = 9;

@Resolver()
export class DepthResolver {
	constructor(private readonly prisma: PrismaService) {}

	@Query(() => [PokemonSpeciesFlavorText], { description: 'Pokedex flavor entries for a pokemon, optionally scoped to a version group' })
	async pokemonFlavor(
		@Args('idOrSlug') idOrSlug: string,
		@Args('versionGroup', { type: () => String, nullable: true }) versionGroup?: string,
	): Promise<PokemonSpeciesFlavorText[]> {
		const pokemon = await this.prisma.pokemon.findFirst({ where: whereIdOrSlug('pokemon', idOrSlug), select: { species_id: true } });
		if (!pokemon) return [];
		return (await this.prisma.pokemonSpeciesFlavorText.findMany({
			where: {
				species_id: pokemon.species_id,
				language_id: LANGUAGE_EN,
				...(versionGroup ? { version: { versionGroup: { identifier: versionGroup } } } : {}),
			},
			include: { version: true },
			orderBy: { version_id: 'asc' },
		})) as unknown as PokemonSpeciesFlavorText[];
	}

	@Query(() => [PokemonSpecies], { description: 'Every species in the pokemon evolution chain, with evolution conditions' })
	async evolutionChain(@Args('idOrSlug') idOrSlug: string): Promise<PokemonSpecies[]> {
		const pokemon = await this.prisma.pokemon.findFirst({
			where: whereIdOrSlug('pokemon', idOrSlug),
			select: { species: { select: { evolution_chain_id: true } } },
		});
		if (!pokemon) return [];
		return (await this.prisma.pokemonSpecies.findMany({
			where: { evolution_chain_id: pokemon.species.evolution_chain_id },
			include: {
				evolvesFrom: true,
				evolution: { include: { evolutionTrigger: true, triggerItem: true, heldItem: true, knownMove: true, location: true } },
				pokemon: { where: { is_default: 1 } },
			},
			orderBy: { id: 'asc' },
		})) as unknown as PokemonSpecies[];
	}

	@Query(() => [Encounters], { description: 'Where to catch a pokemon: locations, methods, levels, rarity - optionally per version group' })
	async pokemonEncounters(
		@Args('idOrSlug') idOrSlug: string,
		@Args('versionGroup', { type: () => String, nullable: true }) versionGroup?: string,
		@Args('take', { type: () => Int, defaultValue: 500 }) take = 500,
	): Promise<Encounters[]> {
		const pokemon = await this.prisma.pokemon.findFirst({ where: whereIdOrSlug('pokemon', idOrSlug), select: { id: true } });
		if (!pokemon) return [];
		return (await this.prisma.encounters.findMany({
			where: {
				pokemon_id: pokemon.id,
				...(versionGroup ? { encounterSlot: { versionGroup: { identifier: versionGroup } } } : {}),
			},
			include: {
				version: true,
				locationArea: { include: { location: true } },
				encounterSlot: { include: { encounterMethod: true } },
			},
			orderBy: [{ version_id: 'asc' }, { location_area_id: 'asc' }, { min_level: 'asc' }],
			take,
		})) as unknown as Encounters[];
	}

	@Query(() => [PokemonMoves], { description: 'Pokemon that can learn a move, optionally per version group' })
	async moveLearnedBy(
		@Args('idOrSlug') idOrSlug: string,
		@Args('versionGroup', { type: () => String, nullable: true }) versionGroup?: string,
		@Args('take', { type: () => Int, defaultValue: 500 }) take = 500,
	): Promise<PokemonMoves[]> {
		const move = await this.prisma.moves.findFirst({ where: whereIdOrSlug('move', idOrSlug), select: { id: true } });
		if (!move) return [];
		return (await this.prisma.pokemonMoves.findMany({
			where: {
				move_id: move.id,
				...(versionGroup ? { versionGroup: { identifier: versionGroup } } : {}),
			},
			include: { pokemon: true, moveMethod: true, versionGroup: true },
			orderBy: [{ pokemon_id: 'asc' }, { level: 'asc' }],
			take,
		})) as unknown as PokemonMoves[];
	}

	@Query(() => [MoveFlavorText], { description: 'Move flavor text entries, optionally per version group' })
	async moveFlavor(
		@Args('idOrSlug') idOrSlug: string,
		@Args('versionGroup', { type: () => String, nullable: true }) versionGroup?: string,
	): Promise<MoveFlavorText[]> {
		const move = await this.prisma.moves.findFirst({ where: whereIdOrSlug('move', idOrSlug), select: { id: true } });
		if (!move) return [];
		return (await this.prisma.moveFlavorText.findMany({
			where: {
				move_id: move.id,
				language_id: LANGUAGE_EN,
				...(versionGroup ? { versionGroup: { identifier: versionGroup } } : {}),
			},
			include: { versionGroup: true },
			orderBy: { version_group_id: 'asc' },
		})) as unknown as MoveFlavorText[];
	}
}
