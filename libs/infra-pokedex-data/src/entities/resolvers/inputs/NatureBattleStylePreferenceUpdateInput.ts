import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStyleUpdateOneRequiredWithoutNaturePreferencesNestedInput } from "../inputs/MoveBattleStyleUpdateOneRequiredWithoutNaturePreferencesNestedInput";
import { NatureUpdateOneRequiredWithoutBattleStylePreferencesNestedInput } from "../inputs/NatureUpdateOneRequiredWithoutBattleStylePreferencesNestedInput";

@TypeGraphQL.InputType("NatureBattleStylePreferenceUpdateInput", {})
export class NatureBattleStylePreferenceUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  low_hp_preference?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  high_hp_preference?: number | undefined;

  @TypeGraphQL.Field(_type => NatureUpdateOneRequiredWithoutBattleStylePreferencesNestedInput, {
    nullable: true
  })
  nature?: NatureUpdateOneRequiredWithoutBattleStylePreferencesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStyleUpdateOneRequiredWithoutNaturePreferencesNestedInput, {
    nullable: true
  })
  battleStyle?: MoveBattleStyleUpdateOneRequiredWithoutNaturePreferencesNestedInput | undefined;
}
