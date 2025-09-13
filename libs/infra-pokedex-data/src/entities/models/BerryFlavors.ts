import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Berries } from "../models/Berries";
import { ContestTypes } from "../models/ContestTypes";
import { Types } from "../models/Types";

@TypeGraphQL.ObjectType("BerryFlavors", {})
export class BerryFlavors {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  berry_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  contest_type_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  flavor!: number;

  berry?: Berries;

  contestType?: ContestTypes;

  type?: Types;
}
