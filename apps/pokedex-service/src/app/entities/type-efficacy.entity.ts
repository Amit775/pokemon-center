import { Field, Int, ObjectType } from '@nestjs/graphql';
import { TypeEfficacy as PrismaTypeEfficacy } from '@prisma/client';

@ObjectType()
export class TypeEfficacy implements PrismaTypeEfficacy {
  @Field(() => Int)
  damage_type_id: number;

  @Field(() => Int)
  target_type_id: number;

  @Field(() => Int)
  damage_factor: number;

}
