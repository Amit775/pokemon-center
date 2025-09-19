import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateOneRequiredWithoutContestCombosSecondNestedInput } from "../inputs/MoveUpdateOneRequiredWithoutContestCombosSecondNestedInput";

@TypeGraphQL.InputType("ContestComboUpdateWithoutFirstMoveInput", {})
export class ContestComboUpdateWithoutFirstMoveInput {
  @TypeGraphQL.Field(_type => MoveUpdateOneRequiredWithoutContestCombosSecondNestedInput, {
    nullable: true
  })
  secondMove?: MoveUpdateOneRequiredWithoutContestCombosSecondNestedInput | undefined;
}
