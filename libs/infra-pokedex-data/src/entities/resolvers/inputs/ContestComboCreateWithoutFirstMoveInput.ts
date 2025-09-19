import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateNestedOneWithoutContestCombosSecondInput } from "../inputs/MoveCreateNestedOneWithoutContestCombosSecondInput";

@TypeGraphQL.InputType("ContestComboCreateWithoutFirstMoveInput", {})
export class ContestComboCreateWithoutFirstMoveInput {
  @TypeGraphQL.Field(_type => MoveCreateNestedOneWithoutContestCombosSecondInput, {
    nullable: false
  })
  secondMove!: MoveCreateNestedOneWithoutContestCombosSecondInput;
}
