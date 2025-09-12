import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NatureBattleStylePreferencesUpdateManyWithoutNatureNestedInput } from "../inputs/NatureBattleStylePreferencesUpdateManyWithoutNatureNestedInput";
import { StatsUpdateOneRequiredWithoutNaturesIncreasedNestedInput } from "../inputs/StatsUpdateOneRequiredWithoutNaturesIncreasedNestedInput";
import { StatsUpdateOneRequiredWithoutNaturesNestedInput } from "../inputs/StatsUpdateOneRequiredWithoutNaturesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TypesUpdateManyWithoutNaturesNestedInput } from "../inputs/TypesUpdateManyWithoutNaturesNestedInput";

@TypeGraphQL.InputType("NaturesUpdateWithoutIncreasedStatTypesInput", {})
export class NaturesUpdateWithoutIncreasedStatTypesInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  identifier?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  hates_flavor_id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  likes_flavor_id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  game_index?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StatsUpdateOneRequiredWithoutNaturesNestedInput, {
    nullable: true
  })
  decreasedStat?: StatsUpdateOneRequiredWithoutNaturesNestedInput | undefined;

  @TypeGraphQL.Field(_type => StatsUpdateOneRequiredWithoutNaturesIncreasedNestedInput, {
    nullable: true
  })
  increasedStat?: StatsUpdateOneRequiredWithoutNaturesIncreasedNestedInput | undefined;

  @TypeGraphQL.Field(_type => NatureBattleStylePreferencesUpdateManyWithoutNatureNestedInput, {
    nullable: true
  })
  battleStylePreferences?: NatureBattleStylePreferencesUpdateManyWithoutNatureNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateManyWithoutNaturesNestedInput, {
    nullable: true
  })
  decreasedStatTypes?: TypesUpdateManyWithoutNaturesNestedInput | undefined;
}
