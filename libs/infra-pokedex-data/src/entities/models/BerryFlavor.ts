import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Berry } from "../models/Berry";
import { ContestType } from "../models/ContestType";
import { Type } from "../models/Type";

@TypeGraphQL.ObjectType("BerryFlavor", {})
export class BerryFlavor {
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

  berry?: Berry;

  contestType?: ContestType;

  type?: Type;
}
