import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestWarriorSpecialties as PrismaConquestWarriorSpecialties } from '@prisma/client';

@ObjectType()
export class ConquestWarriorSpecialties implements PrismaConquestWarriorSpecialties {
  @Field(() => Int)
  warrior_id: Int;

  @Field(() => Int)
  type_id: Int;

  @Field(() => Int)
  slot: Int;

}
