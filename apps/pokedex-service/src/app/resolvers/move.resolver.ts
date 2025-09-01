import { Args, Query, Resolver } from '@nestjs/graphql';
import { Move } from '../entities/move.entity';
import { MoveService } from '../services/move.service';

@Resolver(() => Move)
export class MoveResolver {
	constructor(private readonly moveService: MoveService) {}

	@Query(() => [Move])
	getMoves(): Promise<Move[]> {
		return this.moveService.findAll();
	}

	@Query(() => Move)
	getMove(@Args('id') id: number): Promise<Move> {
		return this.moveService.findOne(id);
	}

	@Query(() => [Move])
	getMovesByType(@Args('typeId') typeId: number): Promise<Move[]> {
		return this.moveService.findByType(typeId);
	}

	@Query(() => [Move])
	getMovesByDamageClass(@Args('damageClassId') damageClassId: number): Promise<Move[]> {
		return this.moveService.findByDamageClass(damageClassId);
	}
}
