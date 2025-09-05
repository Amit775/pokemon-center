import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokeathlonStats as PrismaPokeathlonStats } from '@prisma/client';

@ObjectType()
export class PokeathlonStats implements PrismaPokeathlonStats {
  @Field(() => Int)
  id: Int;

  @Field()
  identifier: String;

}
