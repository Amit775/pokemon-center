import { Field, Int, ObjectType, Query, Resolver } from '@nestjs/graphql';
import { VersionGroups } from '@pokemon-center/infra-pokedex-data';
import { PrismaService } from '../prisma.service';

@ObjectType()
export class LanguageOption {
	@Field(() => Int)
	id!: number;

	/** Slug, e.g. 'en', 'de', 'ja' */
	@Field(() => String)
	code!: string;

	/** The language's own name (autonym), e.g. 'Deutsch', '日本語' */
	@Field(() => String)
	name!: string;
}

@Resolver(() => VersionGroups)
export class ContextResolver {
	constructor(private readonly prisma: PrismaService) {}

	@Query(() => [VersionGroups], { description: 'All version groups (games), in release order, with their versions' })
	async versionGroups(): Promise<VersionGroups[]> {
		return (await this.prisma.versionGroups.findMany({
			orderBy: { order: 'asc' },
			include: { versions: true, generation: true },
		})) as unknown as VersionGroups[];
	}

	@Query(() => [LanguageOption], { description: 'Official game languages, each with its own name (autonym), for the display-language selector' })
	async languages(): Promise<LanguageOption[]> {
		return this.prisma.$queryRaw<LanguageOption[]>`
			SELECT languages.id, languages.identifier AS code, language_names.name
			FROM languages
			JOIN language_names ON language_names.language_id = languages.id AND language_names.local_language_id = languages.id
			WHERE languages.official = 1
			ORDER BY languages."order"`;
	}
}
