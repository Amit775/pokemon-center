import { Field, Int, ObjectType } from '@nestjs/graphql';
import { NaturePokeathlonStats as PrismaNaturePokeathlonStats } from '@prisma/client';

@ObjectType()
export class NaturePokeathlonStats implements PrismaNaturePokeathlonStats {
  @Field(() => Int)
  nature_id: Int;

  @Field(() => Int)
  pokeathlon_stat_id: Int;

  @Field(() => Int)
  max_change: Int;

}
