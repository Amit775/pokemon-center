import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateNestedOneWithoutSuperContestCombosInput } from "../inputs/MoveCreateNestedOneWithoutSuperContestCombosInput";

@TypeGraphQL.InputType("SuperContestComboCreateWithoutSecondMoveInput", {})
export class SuperContestComboCreateWithoutSecondMoveInput {
  @TypeGraphQL.Field(_type => MoveCreateNestedOneWithoutSuperContestCombosInput, {
    nullable: false
  })
  firstMove!: MoveCreateNestedOneWithoutSuperContestCombosInput;
}
