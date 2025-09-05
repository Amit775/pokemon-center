import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveDamageClassProse as PrismaMoveDamageClassProse } from '@prisma/client';

@ObjectType()
export class MoveDamageClassProse implements PrismaMoveDamageClassProse {
  @Field(() => Int)
  move_damage_class_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String)
  name!: string;

  @Field(() => String, { nullable: true })
  description!: string | null;
}
