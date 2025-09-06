import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AbilityChangelog as PrismaAbilityChangelog } from '@prisma/client';

@ObjectType()
export class AbilityChangelog implements PrismaAbilityChangelog {
  @Field(() => Int)
  ability_id!: number;

  @Field(() => Int)
  changed_in_version_group_id!: number;
}
