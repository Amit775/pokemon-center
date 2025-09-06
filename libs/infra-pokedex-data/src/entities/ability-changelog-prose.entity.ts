import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AbilityChangelogProse as PrismaAbilityChangelogProse } from '@prisma/client';

@ObjectType()
export class AbilityChangelogProse implements PrismaAbilityChangelogProse {
  @Field(() => Int)
  ability_changelog_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String)
  effect!: string;
}
