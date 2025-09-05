import { Field, Int, ObjectType } from '@nestjs/graphql';
import { LocationGameIndices as PrismaLocationGameIndices } from '@prisma/client';

@ObjectType()
export class LocationGameIndices implements PrismaLocationGameIndices {
  @Field(() => Int)
  location_id: Int;

  @Field(() => Int)
  generation_id: Int;

  @Field(() => Int)
  game_index: Int;

}
