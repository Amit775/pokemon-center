import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CharacteristicText as PrismaCharacteristicText } from '@prisma/client';

@ObjectType()
export class CharacteristicText implements PrismaCharacteristicText {
  @Field(() => Int)
  characteristic_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String)
  message!: string;
}
