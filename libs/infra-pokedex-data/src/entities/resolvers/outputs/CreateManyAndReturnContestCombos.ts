import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Moves } from "../../models/Moves";

@TypeGraphQL.ObjectType("CreateManyAndReturnContestCombos", {})
export class CreateManyAndReturnContestCombos {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  first_move_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  second_move_id!: number;

  @TypeGraphQL.Field(_type => Moves, {
    nullable: false
  })
  firstMove!: Moves;

  @TypeGraphQL.Field(_type => Moves, {
    nullable: false
  })
  secondMove!: Moves;
}
