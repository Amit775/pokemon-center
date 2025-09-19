import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateOneRequiredWithoutSuperContestCombosNestedInput } from "../inputs/MoveUpdateOneRequiredWithoutSuperContestCombosNestedInput";

@TypeGraphQL.InputType("SuperContestComboUpdateWithoutSecondMoveInput", {})
export class SuperContestComboUpdateWithoutSecondMoveInput {
  @TypeGraphQL.Field(_type => MoveUpdateOneRequiredWithoutSuperContestCombosNestedInput, {
    nullable: true
  })
  firstMove?: MoveUpdateOneRequiredWithoutSuperContestCombosNestedInput | undefined;
}
