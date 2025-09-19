import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateNestedOneWithoutSuperContestCombosSecondInput } from "../inputs/MoveCreateNestedOneWithoutSuperContestCombosSecondInput";

@TypeGraphQL.InputType("SuperContestComboCreateWithoutFirstMoveInput", {})
export class SuperContestComboCreateWithoutFirstMoveInput {
  @TypeGraphQL.Field(_type => MoveCreateNestedOneWithoutSuperContestCombosSecondInput, {
    nullable: false
  })
  secondMove!: MoveCreateNestedOneWithoutSuperContestCombosSecondInput;
}
