import { Args, Query, Resolver } from '@nestjs/graphql';
import { Regulation } from '../models/regulation.model';
import { PrismaService } from '../prisma.service';

/** Shape returned by Prisma with the legality count included. */
type RegulationRow = {
	id: number;
	code: string;
	name: string;
	starts_on: Date;
	ends_on: Date;
	is_current: boolean;
	notes: string | null;
	_count: { legality: number };
};

const toModel = (row: RegulationRow): Regulation => ({
	id: row.id,
	code: row.code,
	name: row.name,
	startsOn: row.starts_on,
	endsOn: row.ends_on,
	isCurrent: row.is_current,
	notes: row.notes,
	legalCount: row._count.legality,
});

@Resolver(() => Regulation)
export class RegulationResolver {
	constructor(private readonly prisma: PrismaService) {}

	/** Every regulation we hold, newest first. History is retained so rosters stay diffable. */
	@Query(() => [Regulation], { name: 'regulations' })
	async regulations(): Promise<Regulation[]> {
		const rows = await this.prisma.regulation.findMany({
			orderBy: { starts_on: 'desc' },
			include: { _count: { select: { legality: true } } },
		});
		return rows.map(toModel);
	}

	/**
	 * The regulation in force. Falls back to the most recent one when nothing is flagged
	 * current — which happens in the window between a set ending and the next being seeded.
	 */
	@Query(() => Regulation, { name: 'currentRegulation', nullable: true })
	async currentRegulation(): Promise<Regulation | null> {
		const row =
			(await this.prisma.regulation.findFirst({
				where: { is_current: true },
				include: { _count: { select: { legality: true } } },
			})) ??
			(await this.prisma.regulation.findFirst({
				orderBy: { starts_on: 'desc' },
				include: { _count: { select: { legality: true } } },
			}));
		return row ? toModel(row) : null;
	}

	@Query(() => Regulation, { name: 'regulation', nullable: true })
	async regulation(@Args('code') code: string): Promise<Regulation | null> {
		const row = await this.prisma.regulation.findUnique({
			where: { code },
			include: { _count: { select: { legality: true } } },
		});
		return row ? toModel(row) : null;
	}
}
