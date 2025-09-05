import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AbilityProse as PrismaAbilityProse } from '@prisma/client';

@ObjectType()
export class AbilityProse implements PrismaAbilityProse {
  @Field(() => Int)
  ability_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String, { nullable: true })
  short_effect!: string | null;

  @Field(() => String, { nullable: true })
  effect!: string | null;
}
