import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Berry } from "../../models/Berry";
import { ContestType } from "../../models/ContestType";
import { Type } from "../../models/Type";

@TypeGraphQL.ObjectType("CreateManyAndReturnBerryFlavor", {})
export class CreateManyAndReturnBerryFlavor {
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

  @TypeGraphQL.Field(_type => Berry, {
    nullable: false
  })
  berry!: Berry;

  @TypeGraphQL.Field(_type => ContestType, {
    nullable: false
  })
  contestType!: ContestType;

  @TypeGraphQL.Field(_type => Type, {
    nullable: false
  })
  type!: Type;
}
