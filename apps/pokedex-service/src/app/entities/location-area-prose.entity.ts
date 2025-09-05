import { Field, Int, ObjectType } from '@nestjs/graphql';
import { LocationAreaProse as PrismaLocationAreaProse } from '@prisma/client';

@ObjectType()
export class LocationAreaProse implements PrismaLocationAreaProse {
  @Field(() => Int)
  location_area_id: number;

  @Field(() => Int)
  local_language_id: number;

  @Field(() => String, { nullable: true })
  name: string;

}
