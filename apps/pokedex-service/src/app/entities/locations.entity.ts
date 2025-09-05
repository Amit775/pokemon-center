import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Locations as PrismaLocations } from '@prisma/client';

@ObjectType()
export class Locations implements PrismaLocations {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  region_id: number;

  @Field(() => String)
  identifier: string;

}
