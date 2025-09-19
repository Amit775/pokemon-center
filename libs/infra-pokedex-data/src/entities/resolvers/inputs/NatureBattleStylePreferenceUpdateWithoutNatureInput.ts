import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveBattleStyleUpdateOneRequiredWithoutNaturePreferencesNestedInput } from "../inputs/MoveBattleStyleUpdateOneRequiredWithoutNaturePreferencesNestedInput";

@TypeGraphQL.InputType("NatureBattleStylePreferenceUpdateWithoutNatureInput", {})
export class NatureBattleStylePreferenceUpdateWithoutNatureInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  low_hp_preference?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  high_hp_preference?: number | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStyleUpdateOneRequiredWithoutNaturePreferencesNestedInput, {
    nullable: true
  })
  battleStyle?: MoveBattleStyleUpdateOneRequiredWithoutNaturePreferencesNestedInput | undefined;
}
