import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainsCreateNestedOneWithoutSpeciesInput } from "../inputs/EvolutionChainsCreateNestedOneWithoutSpeciesInput";
import { GenerationsCreateNestedOneWithoutPokemonSpeciesInput } from "../inputs/GenerationsCreateNestedOneWithoutPokemonSpeciesInput";
import { GrowthRatesCreateNestedOneWithoutSpeciesInput } from "../inputs/GrowthRatesCreateNestedOneWithoutSpeciesInput";
import { PokemonColorsCreateNestedOneWithoutSpeciesInput } from "../inputs/PokemonColorsCreateNestedOneWithoutSpeciesInput";
import { PokemonCreateNestedManyWithoutSpeciesInput } from "../inputs/PokemonCreateNestedManyWithoutSpeciesInput";
import { PokemonDexNumbersCreateNestedManyWithoutSpeciesInput } from "../inputs/PokemonDexNumbersCreateNestedManyWithoutSpeciesInput";
import { PokemonEvolutionCreateNestedManyWithoutEvolvedSpeciesInput } from "../inputs/PokemonEvolutionCreateNestedManyWithoutEvolvedSpeciesInput";
import { PokemonEvolutionCreateNestedManyWithoutPartySpeciesInput } from "../inputs/PokemonEvolutionCreateNestedManyWithoutPartySpeciesInput";
import { PokemonEvolutionCreateNestedManyWithoutTradeSpeciesInput } from "../inputs/PokemonEvolutionCreateNestedManyWithoutTradeSpeciesInput";
import { PokemonHabitatsCreateNestedOneWithoutSpeciesInput } from "../inputs/PokemonHabitatsCreateNestedOneWithoutSpeciesInput";
import { PokemonShapesCreateNestedOneWithoutSpeciesInput } from "../inputs/PokemonShapesCreateNestedOneWithoutSpeciesInput";
import { PokemonSpeciesCreateNestedManyWithoutEvolvesFromInput } from "../inputs/PokemonSpeciesCreateNestedManyWithoutEvolvesFromInput";
import { PokemonSpeciesCreateNestedOneWithoutEvolvesToInput } from "../inputs/PokemonSpeciesCreateNestedOneWithoutEvolvesToInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateWithoutEggGroupsInput", {})
export class PokemonSpeciesCreateWithoutEggGroupsInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  gender_rate!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  capture_rate!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  base_happiness!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_baby!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  hatch_counter!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  has_gender_differences!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  forms_switchable!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_legendary!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_mythical!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  order!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  conquest_order?: number | undefined;

  @TypeGraphQL.Field(_type => GenerationsCreateNestedOneWithoutPokemonSpeciesInput, {
    nullable: false
  })
  generation!: GenerationsCreateNestedOneWithoutPokemonSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateNestedOneWithoutEvolvesToInput, {
    nullable: true
  })
  evolvesFrom?: PokemonSpeciesCreateNestedOneWithoutEvolvesToInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateNestedManyWithoutEvolvesFromInput, {
    nullable: true
  })
  evolvesTo?: PokemonSpeciesCreateNestedManyWithoutEvolvesFromInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainsCreateNestedOneWithoutSpeciesInput, {
    nullable: false
  })
  evolutionChain!: EvolutionChainsCreateNestedOneWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonColorsCreateNestedOneWithoutSpeciesInput, {
    nullable: false
  })
  color!: PokemonColorsCreateNestedOneWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonShapesCreateNestedOneWithoutSpeciesInput, {
    nullable: false
  })
  shape!: PokemonShapesCreateNestedOneWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonHabitatsCreateNestedOneWithoutSpeciesInput, {
    nullable: true
  })
  habitat?: PokemonHabitatsCreateNestedOneWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => GrowthRatesCreateNestedOneWithoutSpeciesInput, {
    nullable: false
  })
  growthRate!: GrowthRatesCreateNestedOneWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonCreateNestedManyWithoutSpeciesInput, {
    nullable: true
  })
  pokemon?: PokemonCreateNestedManyWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumbersCreateNestedManyWithoutSpeciesInput, {
    nullable: true
  })
  dexNumbers?: PokemonDexNumbersCreateNestedManyWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateNestedManyWithoutEvolvedSpeciesInput, {
    nullable: true
  })
  evolution?: PokemonEvolutionCreateNestedManyWithoutEvolvedSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateNestedManyWithoutPartySpeciesInput, {
    nullable: true
  })
  partySpecies?: PokemonEvolutionCreateNestedManyWithoutPartySpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateNestedManyWithoutTradeSpeciesInput, {
    nullable: true
  })
  tradeSpecies?: PokemonEvolutionCreateNestedManyWithoutTradeSpeciesInput | undefined;
}
