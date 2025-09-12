import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StatsUpdateOneRequiredWithoutNaturesIncreasedNestedInput } from "../inputs/StatsUpdateOneRequiredWithoutNaturesIncreasedNestedInput";
import { StatsUpdateOneRequiredWithoutNaturesNestedInput } from "../inputs/StatsUpdateOneRequiredWithoutNaturesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TypesUpdateManyWithoutNaturesIncreasedNestedInput } from "../inputs/TypesUpdateManyWithoutNaturesIncreasedNestedInput";
import { TypesUpdateManyWithoutNaturesNestedInput } from "../inputs/TypesUpdateManyWithoutNaturesNestedInput";

@TypeGraphQL.InputType("NaturesUpdateWithoutBattleStylePreferencesInput", {})
export class NaturesUpdateWithoutBattleStylePreferencesInput {
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

  @TypeGraphQL.Field(_type => TypesUpdateManyWithoutNaturesNestedInput, {
    nullable: true
  })
  decreasedStatTypes?: TypesUpdateManyWithoutNaturesNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateManyWithoutNaturesIncreasedNestedInput, {
    nullable: true
  })
  increasedStatTypes?: TypesUpdateManyWithoutNaturesIncreasedNestedInput | undefined;
}
