import { Args, Int, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Abilities, Items, Types, PokemonSpecies } from '@pokemon-center/infra-pokedex-data';
import { LanguageService } from '../language.service';
import { PrismaService } from '../prisma.service';
import { whereIdOrSlug } from './lookup';

@Resolver(() => Abilities)
export class AbilityResolver {
	constructor(
		private readonly prisma: PrismaService,
		private readonly language: LanguageService,
	) {}

	@Query(() => [Abilities])
	async abilityList(
		@Args('take', { type: () => Int, defaultValue: 50 }) take: number,
		@Args('skip', { type: () => Int, defaultValue: 0 }) skip: number,
	): Promise<Abilities[]> {
		return (await this.prisma.abilities.findMany({ take, skip, orderBy: { id: 'asc' } })) as unknown as Abilities[];
	}

	@Query(() => Abilities, { nullable: true })
	async ability(
		@Args('idOrSlug') idOrSlug: string,
		@Args('language', { type: () => String, nullable: true }) language?: string,
	): Promise<Abilities | null> {
		const languageId = await this.language.idFor(language);
		return (await this.prisma.abilities.findFirst({
			where: whereIdOrSlug('ability', idOrSlug),
			include: {
				abilityProses: { where: { local_language_id: languageId } },
				pokemonAbilities: { include: { pokemon: true }, orderBy: { pokemon_id: 'asc' } },
			},
		})) as unknown as Abilities | null;
	}

	@ResolveField(() => String)
	canonicalId(@Parent() ability: Abilities): string {
		return `ability:${ability.id}`;
	}
}

@Resolver(() => Types)
export class TypeResolver {
	constructor(private readonly prisma: PrismaService) {}

	@Query(() => [Types])
	async typeList(): Promise<Types[]> {
		return (await this.prisma.types.findMany({ orderBy: { id: 'asc' } })) as unknown as Types[];
	}

	@Query(() => Types, { nullable: true })
	async type(@Args('idOrSlug') idOrSlug: string): Promise<Types | null> {
		return (await this.prisma.types.findFirst({
			where: whereIdOrSlug('type', idOrSlug),
			include: { efficacy: { include: { targetType: true } }, efficacyTarget: { include: { damageType: true } } },
		})) as unknown as Types | null;
	}

	@ResolveField(() => String)
	canonicalId(@Parent() type: Types): string {
		return `type:${type.id}`;
	}
}

@Resolver(() => Items)
export class ItemResolver {
	constructor(
		private readonly prisma: PrismaService,
		private readonly language: LanguageService,
	) {}

	@Query(() => [Items])
	async itemList(
		@Args('take', { type: () => Int, defaultValue: 50 }) take: number,
		@Args('skip', { type: () => Int, defaultValue: 0 }) skip: number,
		@Args('search', { type: () => String, nullable: true }) search?: string,
	): Promise<Items[]> {
		if (search) {
			const ids = await this.prisma.$queryRaw<{ id: number }[]>`
				SELECT id FROM items
				WHERE identifier % ${search}
				ORDER BY similarity(identifier, ${search}) DESC
				LIMIT ${take} OFFSET ${skip}`;
			return (await this.prisma.items.findMany({ where: { id: { in: ids.map((r) => r.id) } } })) as unknown as Items[];
		}
		return (await this.prisma.items.findMany({ take, skip, orderBy: { id: 'asc' }, include: { category: true } })) as unknown as Items[];
	}

	@Query(() => Items, { nullable: true })
	async item(
		@Args('idOrSlug') idOrSlug: string,
		@Args('language', { type: () => String, nullable: true }) language?: string,
	): Promise<Items | null> {
		const languageId = await this.language.idFor(language);
		return (await this.prisma.items.findFirst({
			where: whereIdOrSlug('item', idOrSlug),
			include: {
				category: true,
				itemProses: { where: { local_language_id: languageId } },
				itemFlavorTexts: { where: { language_id: languageId }, include: { versionGroup: true }, orderBy: { version_group_id: 'desc' as const }, take: 1 },
			},
		})) as unknown as Items | null;
	}

	@ResolveField(() => String)
	canonicalId(@Parent() item: Items): string {
		return `item:${item.id}`;
	}
}

@Resolver(() => PokemonSpecies)
export class SpeciesResolver {
	constructor(private readonly prisma: PrismaService) {}

	@Query(() => PokemonSpecies, { nullable: true })
	async species(@Args('idOrSlug') idOrSlug: string): Promise<PokemonSpecies | null> {
		return (await this.prisma.pokemonSpecies.findFirst({
			where: whereIdOrSlug('species', idOrSlug),
			include: { pokemon: true, evolvesFrom: true, evolvesTo: true, generation: true },
		})) as unknown as PokemonSpecies | null;
	}

	@ResolveField(() => String)
	canonicalId(@Parent() species: PokemonSpecies): string {
		return `species:${species.id}`;
	}
}
