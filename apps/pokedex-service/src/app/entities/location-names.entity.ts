import { Field, Int, ObjectType } from '@nestjs/graphql';
import { LocationNames as PrismaLocationNames } from '@prisma/client';

@ObjectType()
export class LocationNames implements PrismaLocationNames {
  @Field(() => Int)
  location_id: Int;

  @Field(() => Int)
  local_language_id: Int;

  @Field()
  name: String;

  @Field(, { nullable: true })
  subtitle: String;

}
