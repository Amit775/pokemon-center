import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AbilityFlavorText as PrismaAbilityFlavorText } from '@prisma/client';

@ObjectType()
export class AbilityFlavorText implements PrismaAbilityFlavorText {
  @Field(() => Int)
  ability_id: Int;

  @Field(() => Int)
  version_group_id: Int;

  @Field(() => Int)
  language_id: Int;

  @Field()
  flavor_text: String;

}
