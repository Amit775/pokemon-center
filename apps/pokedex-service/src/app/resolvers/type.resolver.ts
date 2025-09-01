import { Args, Query, Resolver } from '@nestjs/graphql';
import { Type } from '../entities/type.entity';
import { TypeService } from '../services/type.service';

@Resolver(() => Type)
export class TypeResolver {
	constructor(private readonly typeService: TypeService) {}

	@Query(() => [Type])
	getTypes(): Promise<Type[]> {
		return this.typeService.findAll();
	}

	@Query(() => Type)
	getType(@Args('id') id: number): Promise<Type> {
		return this.typeService.findOne(id);
	}
}
