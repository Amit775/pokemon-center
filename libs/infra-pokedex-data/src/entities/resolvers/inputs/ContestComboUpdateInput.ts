import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateOneRequiredWithoutContestCombosNestedInput } from "../inputs/MoveUpdateOneRequiredWithoutContestCombosNestedInput";
import { MoveUpdateOneRequiredWithoutContestCombosSecondNestedInput } from "../inputs/MoveUpdateOneRequiredWithoutContestCombosSecondNestedInput";

@TypeGraphQL.InputType("ContestComboUpdateInput", {})
export class ContestComboUpdateInput {
  @TypeGraphQL.Field(_type => MoveUpdateOneRequiredWithoutContestCombosNestedInput, {
    nullable: true
  })
  firstMove?: MoveUpdateOneRequiredWithoutContestCombosNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateOneRequiredWithoutContestCombosSecondNestedInput, {
    nullable: true
  })
  secondMove?: MoveUpdateOneRequiredWithoutContestCombosSecondNestedInput | undefined;
}
