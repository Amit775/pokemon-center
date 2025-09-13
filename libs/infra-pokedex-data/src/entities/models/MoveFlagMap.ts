import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { MoveFlags } from "../models/MoveFlags";
import { Moves } from "../models/Moves";

@TypeGraphQL.ObjectType("MoveFlagMap", {})
export class MoveFlagMap {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  move_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  move_flag_id!: number;

  move?: Moves;

  flag?: MoveFlags;
}
