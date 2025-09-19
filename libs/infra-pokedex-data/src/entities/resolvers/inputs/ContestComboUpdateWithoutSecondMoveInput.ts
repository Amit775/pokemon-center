import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateOneRequiredWithoutContestCombosNestedInput } from "../inputs/MoveUpdateOneRequiredWithoutContestCombosNestedInput";

@TypeGraphQL.InputType("ContestComboUpdateWithoutSecondMoveInput", {})
export class ContestComboUpdateWithoutSecondMoveInput {
  @TypeGraphQL.Field(_type => MoveUpdateOneRequiredWithoutContestCombosNestedInput, {
    nullable: true
  })
  firstMove?: MoveUpdateOneRequiredWithoutContestCombosNestedInput | undefined;
}
