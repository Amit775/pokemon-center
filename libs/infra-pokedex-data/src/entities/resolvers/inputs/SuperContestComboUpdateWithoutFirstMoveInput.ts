import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput } from "../inputs/MoveUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput";

@TypeGraphQL.InputType("SuperContestComboUpdateWithoutFirstMoveInput", {})
export class SuperContestComboUpdateWithoutFirstMoveInput {
  @TypeGraphQL.Field(_type => MoveUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput, {
    nullable: true
  })
  secondMove?: MoveUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput | undefined;
}
