import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { MoveMeta } from "../models/MoveMeta";
import { Moves } from "../models/Moves";
import { Stats } from "../models/Stats";

@TypeGraphQL.ObjectType("MoveMetaStatChanges", {})
export class MoveMetaStatChanges {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  move_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  stat_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  change!: number;

  move?: Moves;

  stat?: Stats;

  meta?: MoveMeta;
}
