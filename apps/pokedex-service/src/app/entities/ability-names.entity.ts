import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AbilityNames as PrismaAbilityNames } from '@prisma/client';

@ObjectType()
export class AbilityNames implements PrismaAbilityNames {
  @Field(() => Int)
  ability_id: number;

  @Field(() => Int)
  local_language_id: number;

  @Field(() => String)
  name: string;

}
