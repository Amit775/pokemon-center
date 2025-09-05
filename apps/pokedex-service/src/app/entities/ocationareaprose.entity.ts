import { Field, Int, ObjectType } from '@nestjs/graphql';
import { LocationAreaProse as PrismaLocationAreaProse } from '@prisma/client';

@ObjectType()
export class LocationAreaProse implements PrismaLocationAreaProse {
  @Field(() => Int)
  location_area_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field(, { nullable: true })
  name: String;

}
