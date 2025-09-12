import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MoveBattleStylesUpdateOneRequiredWithoutNaturePreferencesNestedInput } from "../inputs/MoveBattleStylesUpdateOneRequiredWithoutNaturePreferencesNestedInput";

@TypeGraphQL.InputType("NatureBattleStylePreferencesUpdateWithoutNatureInput", {})
export class NatureBattleStylePreferencesUpdateWithoutNatureInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  low_hp_preference?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  high_hp_preference?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MoveBattleStylesUpdateOneRequiredWithoutNaturePreferencesNestedInput, {
    nullable: true
  })
  battleStyle?: MoveBattleStylesUpdateOneRequiredWithoutNaturePreferencesNestedInput | undefined;
}
