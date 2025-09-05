import { Args, Query, Resolver } from '@nestjs/graphql';
import { Stat } from '@pokemon-center/shared-entities';
import { StatService } from '../services/stat.service';

@Resolver(() => Stat)
export class StatResolver {
	constructor(private readonly statService: StatService) {}

	@Query(() => [Stat])
	getStats(): Promise<Stat[]> {
		return this.statService.findAll();
	}

	@Query(() => Stat)
	getStat(@Args('id') id: number): Promise<Stat> {
		return this.statService.findOne(id);
	}
}
