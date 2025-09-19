import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateNestedOneWithoutContestCombosInput } from "../inputs/MoveCreateNestedOneWithoutContestCombosInput";

@TypeGraphQL.InputType("ContestComboCreateWithoutSecondMoveInput", {})
export class ContestComboCreateWithoutSecondMoveInput {
  @TypeGraphQL.Field(_type => MoveCreateNestedOneWithoutContestCombosInput, {
    nullable: false
  })
  firstMove!: MoveCreateNestedOneWithoutContestCombosInput;
}
