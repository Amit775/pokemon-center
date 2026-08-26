import { Args, Int, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Moves } from '@pokemon-center/infra-pokedex-data';
import { PrismaService } from '../prisma.service';
import { whereIdOrSlug } from './lookup';

const MOVE_INCLUDE = { type: true, damageClass: true, target: true, generation: true } as const;

@Resolver(() => Moves)
export class MoveResolver {
	constructor(private readonly prisma: PrismaService) {}

	@Query(() => [Moves], { description: 'Paginated move list, optionally fuzzy-filtered by name' })
	async moveList(
		@Args('take', { type: () => Int, defaultValue: 50 }) take: number,
		@Args('skip', { type: () => Int, defaultValue: 0 }) skip: number,
		@Args('search', { type: () => String, nullable: true }) search?: string,
	): Promise<Moves[]> {
		if (search) {
			const ids = await this.prisma.$queryRaw<{ id: number }[]>`
				SELECT id FROM moves
				WHERE identifier % ${search}
				ORDER BY similarity(identifier, ${search}) DESC
				LIMIT ${take} OFFSET ${skip}`;
			const rows = await this.prisma.moves.findMany({
				where: { id: { in: ids.map((id) => id.id) } },
				include: MOVE_INCLUDE,
			});
			const order = new Map(ids.map((id, index) => [id.id, index]));
			return rows.sort((first, second) => (order.get(first.id) ?? 0) - (order.get(second.id) ?? 0)) as unknown as Moves[];
		}
		return (await this.prisma.moves.findMany({
			take,
			skip,
			orderBy: { id: 'asc' },
			include: MOVE_INCLUDE,
		})) as unknown as Moves[];
	}

	@Query(() => Moves, { nullable: true, description: 'Lookup by canonical id (move:63), numeric id, or slug (thunderbolt)' })
	async move(@Args('idOrSlug') idOrSlug: string): Promise<Moves | null> {
		return (await this.prisma.moves.findFirst({
			where: whereIdOrSlug('move', idOrSlug),
			include: MOVE_INCLUDE,
		})) as unknown as Moves | null;
	}

	@ResolveField(() => String)
	canonicalId(@Parent() move: Moves): string {
		return `move:${move.id}`;
	}

	@ResolveField(() => String)
	slug(@Parent() move: Moves): string {
		return move.identifier;
	}
}
