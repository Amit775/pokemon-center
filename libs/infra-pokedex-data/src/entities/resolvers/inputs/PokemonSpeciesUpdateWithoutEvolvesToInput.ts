import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainsUpdateOneRequiredWithoutSpeciesNestedInput } from "../inputs/EvolutionChainsUpdateOneRequiredWithoutSpeciesNestedInput";
import { GenerationsUpdateOneRequiredWithoutPokemonSpeciesNestedInput } from "../inputs/GenerationsUpdateOneRequiredWithoutPokemonSpeciesNestedInput";
import { GrowthRatesUpdateOneRequiredWithoutSpeciesNestedInput } from "../inputs/GrowthRatesUpdateOneRequiredWithoutSpeciesNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { PokemonColorsUpdateOneRequiredWithoutSpeciesNestedInput } from "../inputs/PokemonColorsUpdateOneRequiredWithoutSpeciesNestedInput";
import { PokemonDexNumbersUpdateManyWithoutSpeciesNestedInput } from "../inputs/PokemonDexNumbersUpdateManyWithoutSpeciesNestedInput";
import { PokemonEggGroupsUpdateManyWithoutSpeciesNestedInput } from "../inputs/PokemonEggGroupsUpdateManyWithoutSpeciesNestedInput";
import { PokemonEvolutionUpdateManyWithoutEvolvedSpeciesNestedInput } from "../inputs/PokemonEvolutionUpdateManyWithoutEvolvedSpeciesNestedInput";
import { PokemonEvolutionUpdateManyWithoutPartySpeciesNestedInput } from "../inputs/PokemonEvolutionUpdateManyWithoutPartySpeciesNestedInput";
import { PokemonEvolutionUpdateManyWithoutTradeSpeciesNestedInput } from "../inputs/PokemonEvolutionUpdateManyWithoutTradeSpeciesNestedInput";
import { PokemonHabitatsUpdateOneWithoutSpeciesNestedInput } from "../inputs/PokemonHabitatsUpdateOneWithoutSpeciesNestedInput";
import { PokemonShapesUpdateOneRequiredWithoutSpeciesNestedInput } from "../inputs/PokemonShapesUpdateOneRequiredWithoutSpeciesNestedInput";
import { PokemonSpeciesUpdateOneWithoutEvolvesToNestedInput } from "../inputs/PokemonSpeciesUpdateOneWithoutEvolvesToNestedInput";
import { PokemonUpdateManyWithoutSpeciesNestedInput } from "../inputs/PokemonUpdateManyWithoutSpeciesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateWithoutEvolvesToInput", {})
export class PokemonSpeciesUpdateWithoutEvolvesToInput {
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
  gender_rate?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  capture_rate?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  base_happiness?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  is_baby?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  hatch_counter?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  has_gender_differences?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  forms_switchable?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  is_legendary?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  is_mythical?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  order?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  conquest_order?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateOneRequiredWithoutPokemonSpeciesNestedInput, {
    nullable: true
  })
  generation?: GenerationsUpdateOneRequiredWithoutPokemonSpeciesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateOneWithoutEvolvesToNestedInput, {
    nullable: true
  })
  evolvesFrom?: PokemonSpeciesUpdateOneWithoutEvolvesToNestedInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainsUpdateOneRequiredWithoutSpeciesNestedInput, {
    nullable: true
  })
  evolutionChain?: EvolutionChainsUpdateOneRequiredWithoutSpeciesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonColorsUpdateOneRequiredWithoutSpeciesNestedInput, {
    nullable: true
  })
  color?: PokemonColorsUpdateOneRequiredWithoutSpeciesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonShapesUpdateOneRequiredWithoutSpeciesNestedInput, {
    nullable: true
  })
  shape?: PokemonShapesUpdateOneRequiredWithoutSpeciesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatsUpdateOneWithoutSpeciesNestedInput, {
    nullable: true
  })
  habitat?: PokemonHabitatsUpdateOneWithoutSpeciesNestedInput | undefined;

  @TypeGraphQL.Field(_type => GrowthRatesUpdateOneRequiredWithoutSpeciesNestedInput, {
    nullable: true
  })
  growthRate?: GrowthRatesUpdateOneRequiredWithoutSpeciesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateManyWithoutSpeciesNestedInput, {
    nullable: true
  })
  pokemon?: PokemonUpdateManyWithoutSpeciesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupsUpdateManyWithoutSpeciesNestedInput, {
    nullable: true
  })
  eggGroups?: PokemonEggGroupsUpdateManyWithoutSpeciesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumbersUpdateManyWithoutSpeciesNestedInput, {
    nullable: true
  })
  dexNumbers?: PokemonDexNumbersUpdateManyWithoutSpeciesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateManyWithoutEvolvedSpeciesNestedInput, {
    nullable: true
  })
  evolution?: PokemonEvolutionUpdateManyWithoutEvolvedSpeciesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateManyWithoutPartySpeciesNestedInput, {
    nullable: true
  })
  partySpecies?: PokemonEvolutionUpdateManyWithoutPartySpeciesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionUpdateManyWithoutTradeSpeciesNestedInput, {
    nullable: true
  })
  tradeSpecies?: PokemonEvolutionUpdateManyWithoutTradeSpeciesNestedInput | undefined;
}
