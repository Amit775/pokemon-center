import { Query, Resolver } from '@nestjs/graphql';
import { VersionGroups } from '@pokemon-center/infra-pokedex-data';
import { PrismaService } from '../prisma.service';

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
}
