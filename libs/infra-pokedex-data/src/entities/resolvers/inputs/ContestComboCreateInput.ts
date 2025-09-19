import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateNestedOneWithoutContestCombosInput } from "../inputs/MoveCreateNestedOneWithoutContestCombosInput";
import { MoveCreateNestedOneWithoutContestCombosSecondInput } from "../inputs/MoveCreateNestedOneWithoutContestCombosSecondInput";

@TypeGraphQL.InputType("ContestComboCreateInput", {})
export class ContestComboCreateInput {
  @TypeGraphQL.Field(_type => MoveCreateNestedOneWithoutContestCombosInput, {
    nullable: false
  })
  firstMove!: MoveCreateNestedOneWithoutContestCombosInput;

  @TypeGraphQL.Field(_type => MoveCreateNestedOneWithoutContestCombosSecondInput, {
    nullable: false
  })
  secondMove!: MoveCreateNestedOneWithoutContestCombosSecondInput;
}
