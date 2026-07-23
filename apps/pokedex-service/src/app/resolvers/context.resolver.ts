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
			SELECT l.id, l.identifier AS code, ln.name
			FROM languages l
			JOIN language_names ln ON ln.language_id = l.id AND ln.local_language_id = l.id
			WHERE l.official = 1
			ORDER BY l."order"`;
	}
}
