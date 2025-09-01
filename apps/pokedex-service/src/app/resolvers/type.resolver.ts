import { Args, Query, Resolver } from '@nestjs/graphql';
import { Type } from '../entities/type.entity';
import { TypeService } from '../services/type.service';

@Resolver(() => Type)
export class TypeResolver {
	constructor(private readonly typeService: TypeService) {}

	@Query(() => [Type])
	getPokemonTypes(): Promise<Type[]> {
		console.log('getPokemonTypes');
		return this.typeService.findAll();
	}

	@Query(() => Type)
	getPokemonType(@Args('id') id: number): Promise<Type> {
		return this.typeService.findOne(id);
	}
}
