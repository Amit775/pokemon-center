import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Move } from "../models/Move";
import { MoveFlag } from "../models/MoveFlag";

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

  move?: Move;

  flag?: MoveFlag;
}
