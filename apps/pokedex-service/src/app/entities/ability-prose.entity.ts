import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AbilityProse as PrismaAbilityProse } from '@prisma/client';

@ObjectType()
export class AbilityProse implements PrismaAbilityProse {
  @Field(() => Int)
  ability_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field(, { nullable: true })
  short_effect: String;

  @Field(, { nullable: true })
  effect: String;

}
