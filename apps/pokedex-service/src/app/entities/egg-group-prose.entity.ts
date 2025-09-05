import { Field, Int, ObjectType } from '@nestjs/graphql';
import { EggGroupProse as PrismaEggGroupProse } from '@prisma/client';

@ObjectType()
export class EggGroupProse implements PrismaEggGroupProse {
  @Field(() => Int)
  egg_group_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

}
