import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainsUpdateOneRequiredWithoutSpeciesNestedInput } from "../inputs/EvolutionChainsUpdateOneRequiredWithoutSpeciesNestedInput";
import { GenerationsUpdateOneRequiredWithoutPokemonSpeciesNestedInput } from "../inputs/GenerationsUpdateOneRequiredWithoutPokemonSpeciesNestedInput";
import { GrowthRatesUpdateOneRequiredWithoutSpeciesNestedInput } from "../inputs/GrowthRatesUpdateOneRequiredWithoutSpeciesNestedInput";
import { PokemonColorsUpdateOneRequiredWithoutSpeciesNestedInput } from "../inputs/PokemonColorsUpdateOneRequiredWithoutSpeciesNestedInput";
import { PokemonDexNumbersUpdateManyWithoutSpeciesNestedInput } from "../inputs/PokemonDexNumbersUpdateManyWithoutSpeciesNestedInput";
import { PokemonEggGroupsUpdateManyWithoutSpeciesNestedInput } from "../inputs/PokemonEggGroupsUpdateManyWithoutSpeciesNestedInput";
import { PokemonEvolutionUpdateManyWithoutEvolvedSpeciesNestedInput } from "../inputs/PokemonEvolutionUpdateManyWithoutEvolvedSpeciesNestedInput";
import { PokemonEvolutionUpdateManyWithoutPartySpeciesNestedInput } from "../inputs/PokemonEvolutionUpdateManyWithoutPartySpeciesNestedInput";
import { PokemonEvolutionUpdateManyWithoutTradeSpeciesNestedInput } from "../inputs/PokemonEvolutionUpdateManyWithoutTradeSpeciesNestedInput";
import { PokemonHabitatsUpdateOneWithoutSpeciesNestedInput } from "../inputs/PokemonHabitatsUpdateOneWithoutSpeciesNestedInput";
import { PokemonShapesUpdateOneRequiredWithoutSpeciesNestedInput } from "../inputs/PokemonShapesUpdateOneRequiredWithoutSpeciesNestedInput";
import { PokemonSpeciesUpdateManyWithoutEvolvesFromNestedInput } from "../inputs/PokemonSpeciesUpdateManyWithoutEvolvesFromNestedInput";
import { PokemonSpeciesUpdateOneWithoutEvolvesToNestedInput } from "../inputs/PokemonSpeciesUpdateOneWithoutEvolvesToNestedInput";
import { PokemonUpdateManyWithoutSpeciesNestedInput } from "../inputs/PokemonUpdateManyWithoutSpeciesNestedInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateInput", {})
export class PokemonSpeciesUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  gender_rate?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  capture_rate?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  base_happiness?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  is_baby?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  hatch_counter?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  has_gender_differences?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  forms_switchable?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  is_legendary?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  is_mythical?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  order?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  conquest_order?: number | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateOneRequiredWithoutPokemonSpeciesNestedInput, {
    nullable: true
  })
  generation?: GenerationsUpdateOneRequiredWithoutPokemonSpeciesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateOneWithoutEvolvesToNestedInput, {
    nullable: true
  })
  evolvesFrom?: PokemonSpeciesUpdateOneWithoutEvolvesToNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateManyWithoutEvolvesFromNestedInput, {
    nullable: true
  })
  evolvesTo?: PokemonSpeciesUpdateManyWithoutEvolvesFromNestedInput | undefined;

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
