import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AbilityChangelogProse as PrismaAbilityChangelogProse } from '@prisma/client';

@ObjectType()
export class AbilityChangelogProse implements PrismaAbilityChangelogProse {
  @Field(() => Int)
  ability_changelog_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  effect: String;

}
