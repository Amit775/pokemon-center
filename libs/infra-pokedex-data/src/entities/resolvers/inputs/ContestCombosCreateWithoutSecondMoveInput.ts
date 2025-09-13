import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateNestedOneWithoutContestCombosInput } from "../inputs/MovesCreateNestedOneWithoutContestCombosInput";

@TypeGraphQL.InputType("ContestCombosCreateWithoutSecondMoveInput", {})
export class ContestCombosCreateWithoutSecondMoveInput {
  @TypeGraphQL.Field(_type => MovesCreateNestedOneWithoutContestCombosInput, {
    nullable: false
  })
  firstMove!: MovesCreateNestedOneWithoutContestCombosInput;
}
