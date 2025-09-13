import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateOneRequiredWithoutContestCombosNestedInput } from "../inputs/MovesUpdateOneRequiredWithoutContestCombosNestedInput";
import { MovesUpdateOneRequiredWithoutContestCombosSecondNestedInput } from "../inputs/MovesUpdateOneRequiredWithoutContestCombosSecondNestedInput";

@TypeGraphQL.InputType("ContestCombosUpdateInput", {})
export class ContestCombosUpdateInput {
  @TypeGraphQL.Field(_type => MovesUpdateOneRequiredWithoutContestCombosNestedInput, {
    nullable: true
  })
  firstMove?: MovesUpdateOneRequiredWithoutContestCombosNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateOneRequiredWithoutContestCombosSecondNestedInput, {
    nullable: true
  })
  secondMove?: MovesUpdateOneRequiredWithoutContestCombosSecondNestedInput | undefined;
}
