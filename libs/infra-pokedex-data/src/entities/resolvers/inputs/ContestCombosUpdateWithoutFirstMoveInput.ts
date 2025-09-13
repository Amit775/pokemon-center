import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateOneRequiredWithoutContestCombosSecondNestedInput } from "../inputs/MovesUpdateOneRequiredWithoutContestCombosSecondNestedInput";

@TypeGraphQL.InputType("ContestCombosUpdateWithoutFirstMoveInput", {})
export class ContestCombosUpdateWithoutFirstMoveInput {
  @TypeGraphQL.Field(_type => MovesUpdateOneRequiredWithoutContestCombosSecondNestedInput, {
    nullable: true
  })
  secondMove?: MovesUpdateOneRequiredWithoutContestCombosSecondNestedInput | undefined;
}
