import { Args, Query, Resolver } from '@nestjs/graphql';
import { Regulation } from '../models/regulation.model';
import { PrismaService } from '../prisma.service';

/** Shape returned by Prisma for the single regulation row. */
type RegulationRow = {
	id: number;
	code: string;
	name: string;
	starts_on: Date;
	ends_on: Date;
	notes: string | null;
};

const toModel = (row: RegulationRow, legalCount: number): Regulation => ({
	id: row.id,
	code: row.code,
	name: row.name,
	startsOn: row.starts_on,
	endsOn: row.ends_on,
	notes: row.notes,
	legalCount,
});

@Resolver(() => Regulation)
export class RegulationResolver {
	constructor(private readonly prisma: PrismaService) {}

	/**
	 * The regulation in force — the only one the database holds.
	 *
	 * The database is a disposable projection of a single regulation, rebuilt from scratch when
	 * one rotates, so there is no set to choose between and no "current" flag to consult. Every
	 * row in `champions_pokemon` belongs to this regulation, which is why `legalCount` is a
	 * count of that table rather than of a join.
	 */
	@Query(() => Regulation, { name: 'currentRegulation', nullable: true })
	async currentRegulation(): Promise<Regulation | null> {
		const row = await this.prisma.regulation.findFirst();
		if (!row) return null;

		return toModel(row, await this.prisma.championsPokemon.count());
	}

	@Query(() => Regulation, { name: 'regulation', nullable: true })
	async regulation(@Args('code') code: string): Promise<Regulation | null> {
		const row = await this.prisma.regulation.findUnique({ where: { code } });
		if (!row) return null;

		return toModel(row, await this.prisma.championsPokemon.count());
	}
}
