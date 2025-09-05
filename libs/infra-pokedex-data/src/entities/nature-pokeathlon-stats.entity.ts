import { Field, Int, ObjectType } from '@nestjs/graphql';
import { NaturePokeathlonStats as PrismaNaturePokeathlonStats } from '@prisma/client';

@ObjectType()
export class NaturePokeathlonStats implements PrismaNaturePokeathlonStats {
  @Field(() => Int)
  nature_id!: number;

  @Field(() => Int)
  pokeathlon_stat_id!: number;

  @Field(() => Int)
  max_change!: number;
}
