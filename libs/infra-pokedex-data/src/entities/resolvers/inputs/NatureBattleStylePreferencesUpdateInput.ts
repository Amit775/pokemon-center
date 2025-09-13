import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStylesUpdateOneRequiredWithoutNaturePreferencesNestedInput } from "../inputs/MoveBattleStylesUpdateOneRequiredWithoutNaturePreferencesNestedInput";
import { NaturesUpdateOneRequiredWithoutBattleStylePreferencesNestedInput } from "../inputs/NaturesUpdateOneRequiredWithoutBattleStylePreferencesNestedInput";

@TypeGraphQL.InputType("NatureBattleStylePreferencesUpdateInput", {})
export class NatureBattleStylePreferencesUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  low_hp_preference?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  high_hp_preference?: number | undefined;

  @TypeGraphQL.Field(_type => NaturesUpdateOneRequiredWithoutBattleStylePreferencesNestedInput, {
    nullable: true
  })
  nature?: NaturesUpdateOneRequiredWithoutBattleStylePreferencesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStylesUpdateOneRequiredWithoutNaturePreferencesNestedInput, {
    nullable: true
  })
  battleStyle?: MoveBattleStylesUpdateOneRequiredWithoutNaturePreferencesNestedInput | undefined;
}
