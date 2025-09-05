import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AbilityFlavorText as PrismaAbilityFlavorText } from '@prisma/client';

@ObjectType()
export class AbilityFlavorText implements PrismaAbilityFlavorText {
  @Field(() => Int)
  ability_id!: number;

  @Field(() => Int)
  version_group_id!: number;

  @Field(() => Int)
  language_id!: number;

  @Field(() => String)
  flavor_text!: string;
}
