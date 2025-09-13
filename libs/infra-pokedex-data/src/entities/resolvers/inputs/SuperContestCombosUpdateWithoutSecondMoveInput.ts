import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateOneRequiredWithoutSuperContestCombosNestedInput } from "../inputs/MovesUpdateOneRequiredWithoutSuperContestCombosNestedInput";

@TypeGraphQL.InputType("SuperContestCombosUpdateWithoutSecondMoveInput", {})
export class SuperContestCombosUpdateWithoutSecondMoveInput {
  @TypeGraphQL.Field(_type => MovesUpdateOneRequiredWithoutSuperContestCombosNestedInput, {
    nullable: true
  })
  firstMove?: MovesUpdateOneRequiredWithoutSuperContestCombosNestedInput | undefined;
}
