import { Field, Int, ObjectType } from '@nestjs/graphql';
import { LocationNames as PrismaLocationNames } from '@prisma/client';

@ObjectType()
export class LocationNames implements PrismaLocationNames {
  @Field(() => Int)
  location_id!: number;

  @Field(() => Int)
  local_language_id!: number;

  @Field(() => String)
  name!: string;

  @Field(() => String, { nullable: true })
  subtitle!: string | null;
}
