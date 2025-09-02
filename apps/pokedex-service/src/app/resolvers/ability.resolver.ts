import { Args, Query, Resolver } from '@nestjs/graphql';
import { Ability } from '@pokemon-center/shared-entities';
import { AbilityService } from '../services/ability.service';

@Resolver(() => Ability)
export class AbilityResolver {
	constructor(private readonly abilityService: AbilityService) {}

	@Query(() => [Ability])
	getAbilities(): Promise<Ability[]> {
		return this.abilityService.findAll();
	}

	@Query(() => Ability)
	getAbility(@Args('id') id: number): Promise<Ability> {
		return this.abilityService.findOne(id);
	}
}
