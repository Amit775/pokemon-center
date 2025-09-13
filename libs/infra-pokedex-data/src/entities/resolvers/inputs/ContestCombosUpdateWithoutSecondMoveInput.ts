import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateOneRequiredWithoutContestCombosNestedInput } from "../inputs/MovesUpdateOneRequiredWithoutContestCombosNestedInput";

@TypeGraphQL.InputType("ContestCombosUpdateWithoutSecondMoveInput", {})
export class ContestCombosUpdateWithoutSecondMoveInput {
  @TypeGraphQL.Field(_type => MovesUpdateOneRequiredWithoutContestCombosNestedInput, {
    nullable: true
  })
  firstMove?: MovesUpdateOneRequiredWithoutContestCombosNestedInput | undefined;
}
