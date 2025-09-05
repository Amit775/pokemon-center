import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MoveDamageClassProse as PrismaMoveDamageClassProse } from '@prisma/client';

@ObjectType()
export class MoveDamageClassProse implements PrismaMoveDamageClassProse {
  @Field(() => Int)
  move_damage_class_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

  @Field(, { nullable: true })
  description: String;

}
