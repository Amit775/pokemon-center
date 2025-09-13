import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput } from "../inputs/MovesUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput";

@TypeGraphQL.InputType("SuperContestCombosUpdateWithoutFirstMoveInput", {})
export class SuperContestCombosUpdateWithoutFirstMoveInput {
  @TypeGraphQL.Field(_type => MovesUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput, {
    nullable: true
  })
  secondMove?: MovesUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput | undefined;
}
