import { Args, Query, Resolver } from '@nestjs/graphql';
import { DamageClass } from '../entities/damage-class.entity';
import { DamageClassService } from '../services/damage-class.service';

@Resolver(() => DamageClass)
export class DamageClassResolver {
	constructor(private readonly damageClassService: DamageClassService) {}

	@Query(() => [DamageClass])
	getDamageClasses(): Promise<DamageClass[]> {
		return this.damageClassService.findAll();
	}

	@Query(() => DamageClass)
	getDamageClass(@Args('id') id: number): Promise<DamageClass> {
		return this.damageClassService.findOne(id);
	}
}
