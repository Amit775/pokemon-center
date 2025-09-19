import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureUpdateOneRequiredWithoutBattleStylePreferencesNestedInput } from "../inputs/NatureUpdateOneRequiredWithoutBattleStylePreferencesNestedInput";

@TypeGraphQL.InputType("NatureBattleStylePreferenceUpdateWithoutBattleStyleInput", {})
export class NatureBattleStylePreferenceUpdateWithoutBattleStyleInput {
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
}
