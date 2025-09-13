import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Moves } from "../models/Moves";

@TypeGraphQL.ObjectType("SuperContestCombos", {})
export class SuperContestCombos {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  first_move_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  second_move_id!: number;

  firstMove?: Moves;

  secondMove?: Moves;
}
