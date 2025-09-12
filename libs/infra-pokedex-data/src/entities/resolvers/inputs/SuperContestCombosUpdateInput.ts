import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesUpdateOneRequiredWithoutSuperContestCombosNestedInput } from "../inputs/MovesUpdateOneRequiredWithoutSuperContestCombosNestedInput";
import { MovesUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput } from "../inputs/MovesUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput";

@TypeGraphQL.InputType("SuperContestCombosUpdateInput", {})
export class SuperContestCombosUpdateInput {
  @TypeGraphQL.Field(_type => MovesUpdateOneRequiredWithoutSuperContestCombosNestedInput, {
    nullable: true
  })
  firstMove?: MovesUpdateOneRequiredWithoutSuperContestCombosNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput, {
    nullable: true
  })
  secondMove?: MovesUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput | undefined;
}
