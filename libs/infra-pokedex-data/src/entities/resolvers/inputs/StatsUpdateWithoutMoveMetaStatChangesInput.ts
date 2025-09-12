import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicsUpdateManyWithoutStatNestedInput } from "../inputs/CharacteristicsUpdateManyWithoutStatNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NaturesUpdateManyWithoutDecreasedStatNestedInput } from "../inputs/NaturesUpdateManyWithoutDecreasedStatNestedInput";
import { NaturesUpdateManyWithoutIncreasedStatNestedInput } from "../inputs/NaturesUpdateManyWithoutIncreasedStatNestedInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { PokemonStatsUpdateManyWithoutStatNestedInput } from "../inputs/PokemonStatsUpdateManyWithoutStatNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("StatsUpdateWithoutMoveMetaStatChangesInput", {})
export class StatsUpdateWithoutMoveMetaStatChangesInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  damage_class_id?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  identifier?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  is_battle_only?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  game_index?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonStatsUpdateManyWithoutStatNestedInput, {
    nullable: true
  })
  pokemonStats?: PokemonStatsUpdateManyWithoutStatNestedInput | undefined;

  @TypeGraphQL.Field(_type => CharacteristicsUpdateManyWithoutStatNestedInput, {
    nullable: true
  })
  characteristics?: CharacteristicsUpdateManyWithoutStatNestedInput | undefined;

  @TypeGraphQL.Field(_type => NaturesUpdateManyWithoutDecreasedStatNestedInput, {
    nullable: true
  })
  natures?: NaturesUpdateManyWithoutDecreasedStatNestedInput | undefined;

  @TypeGraphQL.Field(_type => NaturesUpdateManyWithoutIncreasedStatNestedInput, {
    nullable: true
  })
  naturesIncreased?: NaturesUpdateManyWithoutIncreasedStatNestedInput | undefined;
}
