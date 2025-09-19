import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainCreateNestedOneWithoutSpeciesInput } from "../inputs/EvolutionChainCreateNestedOneWithoutSpeciesInput";
import { GenerationCreateNestedOneWithoutPokemonSpeciesInput } from "../inputs/GenerationCreateNestedOneWithoutPokemonSpeciesInput";
import { GrowthRatesCreateNestedOneWithoutSpeciesInput } from "../inputs/GrowthRatesCreateNestedOneWithoutSpeciesInput";
import { PokemonColorCreateNestedOneWithoutSpeciesInput } from "../inputs/PokemonColorCreateNestedOneWithoutSpeciesInput";
import { PokemonCreateNestedManyWithoutSpeciesInput } from "../inputs/PokemonCreateNestedManyWithoutSpeciesInput";
import { PokemonDexNumberCreateNestedManyWithoutSpeciesInput } from "../inputs/PokemonDexNumberCreateNestedManyWithoutSpeciesInput";
import { PokemonEggGroupCreateNestedManyWithoutSpeciesInput } from "../inputs/PokemonEggGroupCreateNestedManyWithoutSpeciesInput";
import { PokemonEvolutionCreateNestedManyWithoutEvolvedSpeciesInput } from "../inputs/PokemonEvolutionCreateNestedManyWithoutEvolvedSpeciesInput";
import { PokemonEvolutionCreateNestedManyWithoutTradeSpeciesInput } from "../inputs/PokemonEvolutionCreateNestedManyWithoutTradeSpeciesInput";
import { PokemonHabitatCreateNestedOneWithoutSpeciesInput } from "../inputs/PokemonHabitatCreateNestedOneWithoutSpeciesInput";
import { PokemonShapeCreateNestedOneWithoutSpeciesInput } from "../inputs/PokemonShapeCreateNestedOneWithoutSpeciesInput";
import { PokemonSpeciesCreateNestedManyWithoutEvolvesFromInput } from "../inputs/PokemonSpeciesCreateNestedManyWithoutEvolvesFromInput";
import { PokemonSpeciesCreateNestedOneWithoutEvolvesToInput } from "../inputs/PokemonSpeciesCreateNestedOneWithoutEvolvesToInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateWithoutPartySpeciesInput", {})
export class PokemonSpeciesCreateWithoutPartySpeciesInput {
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

  @TypeGraphQL.Field(_type => GenerationCreateNestedOneWithoutPokemonSpeciesInput, {
    nullable: false
  })
  generation!: GenerationCreateNestedOneWithoutPokemonSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateNestedOneWithoutEvolvesToInput, {
    nullable: true
  })
  evolvesFrom?: PokemonSpeciesCreateNestedOneWithoutEvolvesToInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateNestedManyWithoutEvolvesFromInput, {
    nullable: true
  })
  evolvesTo?: PokemonSpeciesCreateNestedManyWithoutEvolvesFromInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainCreateNestedOneWithoutSpeciesInput, {
    nullable: false
  })
  evolutionChain!: EvolutionChainCreateNestedOneWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonColorCreateNestedOneWithoutSpeciesInput, {
    nullable: false
  })
  color!: PokemonColorCreateNestedOneWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonShapeCreateNestedOneWithoutSpeciesInput, {
    nullable: false
  })
  shape!: PokemonShapeCreateNestedOneWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonHabitatCreateNestedOneWithoutSpeciesInput, {
    nullable: true
  })
  habitat?: PokemonHabitatCreateNestedOneWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => GrowthRatesCreateNestedOneWithoutSpeciesInput, {
    nullable: false
  })
  growthRate!: GrowthRatesCreateNestedOneWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => PokemonCreateNestedManyWithoutSpeciesInput, {
    nullable: true
  })
  pokemon?: PokemonCreateNestedManyWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupCreateNestedManyWithoutSpeciesInput, {
    nullable: true
  })
  eggGroups?: PokemonEggGroupCreateNestedManyWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumberCreateNestedManyWithoutSpeciesInput, {
    nullable: true
  })
  dexNumbers?: PokemonDexNumberCreateNestedManyWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateNestedManyWithoutEvolvedSpeciesInput, {
    nullable: true
  })
  evolution?: PokemonEvolutionCreateNestedManyWithoutEvolvedSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCreateNestedManyWithoutTradeSpeciesInput, {
    nullable: true
  })
  tradeSpecies?: PokemonEvolutionCreateNestedManyWithoutTradeSpeciesInput | undefined;
}
