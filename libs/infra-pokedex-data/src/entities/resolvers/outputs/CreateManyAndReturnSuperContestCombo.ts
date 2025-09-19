import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Move } from "../../models/Move";

@TypeGraphQL.ObjectType("CreateManyAndReturnSuperContestCombo", {})
export class CreateManyAndReturnSuperContestCombo {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  first_move_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  second_move_id!: number;

  @TypeGraphQL.Field(_type => Move, {
    nullable: false
  })
  firstMove!: Move;

  @TypeGraphQL.Field(_type => Move, {
    nullable: false
  })
  secondMove!: Move;
}
