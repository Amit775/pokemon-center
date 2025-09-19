import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateOneRequiredWithoutSuperContestCombosNestedInput } from "../inputs/MoveUpdateOneRequiredWithoutSuperContestCombosNestedInput";
import { MoveUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput } from "../inputs/MoveUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput";

@TypeGraphQL.InputType("SuperContestComboUpdateInput", {})
export class SuperContestComboUpdateInput {
  @TypeGraphQL.Field(_type => MoveUpdateOneRequiredWithoutSuperContestCombosNestedInput, {
    nullable: true
  })
  firstMove?: MoveUpdateOneRequiredWithoutSuperContestCombosNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput, {
    nullable: true
  })
  secondMove?: MoveUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput | undefined;
}
