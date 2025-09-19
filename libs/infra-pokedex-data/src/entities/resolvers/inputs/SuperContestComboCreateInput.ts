import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateNestedOneWithoutSuperContestCombosInput } from "../inputs/MoveCreateNestedOneWithoutSuperContestCombosInput";
import { MoveCreateNestedOneWithoutSuperContestCombosSecondInput } from "../inputs/MoveCreateNestedOneWithoutSuperContestCombosSecondInput";

@TypeGraphQL.InputType("SuperContestComboCreateInput", {})
export class SuperContestComboCreateInput {
  @TypeGraphQL.Field(_type => MoveCreateNestedOneWithoutSuperContestCombosInput, {
    nullable: false
  })
  firstMove!: MoveCreateNestedOneWithoutSuperContestCombosInput;

  @TypeGraphQL.Field(_type => MoveCreateNestedOneWithoutSuperContestCombosSecondInput, {
    nullable: false
  })
  secondMove!: MoveCreateNestedOneWithoutSuperContestCombosSecondInput;
}
