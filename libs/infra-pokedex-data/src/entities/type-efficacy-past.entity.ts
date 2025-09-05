import { Field, Int, ObjectType } from '@nestjs/graphql';
import { TypeEfficacyPast as PrismaTypeEfficacyPast } from '@prisma/client';

@ObjectType()
export class TypeEfficacyPast implements PrismaTypeEfficacyPast {
  @Field(() => Int)
  damage_type_id!: number;

  @Field(() => Int)
  target_type_id!: number;

  @Field(() => Int)
  damage_factor!: number;

  @Field(() => Int)
  generation_id!: number;
}
