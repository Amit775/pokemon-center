import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainUpdateOneRequiredWithoutSpeciesNestedInput } from "../inputs/EvolutionChainUpdateOneRequiredWithoutSpeciesNestedInput";
import { GenerationUpdateOneRequiredWithoutPokemonSpeciesNestedInput } from "../inputs/GenerationUpdateOneRequiredWithoutPokemonSpeciesNestedInput";
import { GrowthRatesUpdateOneRequiredWithoutSpeciesNestedInput } from "../inputs/GrowthRatesUpdateOneRequiredWithoutSpeciesNestedInput";
import { PokemonColorUpdateOneRequiredWithoutSpeciesNestedInput } from "../inputs/PokemonColorUpdateOneRequiredWithoutSpeciesNestedInput";
import { PokemonDexNumberUpdateManyWithoutSpeciesNestedInput } from "../inputs/PokemonDexNumberUpdateManyWithoutSpeciesNestedInput";
import { PokemonEggGroupUpdateManyWithoutSpeciesNestedInput } from "../inputs/PokemonEggGroupUpdateManyWithoutSpeciesNestedInput";
import { PokemonEvolutionUpdateManyWithoutEvolvedSpeciesNestedInput } from "../inputs/PokemonEvolutionUpdateManyWithoutEvolvedSpeciesNestedInput";
import { PokemonEvolutionUpdateManyWithoutPartySpeciesNestedInput } from "../inputs/PokemonEvolutionUpdateManyWithoutPartySpeciesNestedInput";
import { PokemonEvolutionUpdateManyWithoutTradeSpeciesNestedInput } from "../inputs/PokemonEvolutionUpdateManyWithoutTradeSpeciesNestedInput";
import { PokemonHabitatUpdateOneWithoutSpeciesNestedInput } from "../inputs/PokemonHabitatUpdateOneWithoutSpeciesNestedInput";
import { PokemonShapeUpdateOneRequiredWithoutSpeciesNestedInput } from "../inputs/PokemonShapeUpdateOneRequiredWithoutSpeciesNestedInput";
import { PokemonSpeciesUpdateOneWithoutEvolvesToNestedInput } from "../inputs/PokemonSpeciesUpdateOneWithoutEvolvesToNestedInput";
import { PokemonUpdateManyWithoutSpeciesNestedInput } from "../inputs/PokemonUpdateManyWithoutSpeciesNestedInput";

@TypeGraphQL.InputType("PokemonSpeciesUpdateWithoutEvolvesToInput", {})
export class PokemonSpeciesUpdateWithoutEvolvesToInput {
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

  @TypeGraphQL.Field(_type => GenerationUpdateOneRequiredWithoutPokemonSpeciesNestedInput, {
    nullable: true
  })
  generation?: GenerationUpdateOneRequiredWithoutPokemonSpeciesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesUpdateOneWithoutEvolvesToNestedInput, {
    nullable: true
  })
  evolvesFrom?: PokemonSpeciesUpdateOneWithoutEvolvesToNestedInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainUpdateOneRequiredWithoutSpeciesNestedInput, {
    nullable: true
  })
  evolutionChain?: EvolutionChainUpdateOneRequiredWithoutSpeciesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonColorUpdateOneRequiredWithoutSpeciesNestedInput, {
    nullable: true
  })
  color?: PokemonColorUpdateOneRequiredWithoutSpeciesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonShapeUpdateOneRequiredWithoutSpeciesNestedInput, {
    nullable: true
  })
  shape?: PokemonShapeUpdateOneRequiredWithoutSpeciesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonHabitatUpdateOneWithoutSpeciesNestedInput, {
    nullable: true
  })
  habitat?: PokemonHabitatUpdateOneWithoutSpeciesNestedInput | undefined;

  @TypeGraphQL.Field(_type => GrowthRatesUpdateOneRequiredWithoutSpeciesNestedInput, {
    nullable: true
  })
  growthRate?: GrowthRatesUpdateOneRequiredWithoutSpeciesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateManyWithoutSpeciesNestedInput, {
    nullable: true
  })
  pokemon?: PokemonUpdateManyWithoutSpeciesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEggGroupUpdateManyWithoutSpeciesNestedInput, {
    nullable: true
  })
  eggGroups?: PokemonEggGroupUpdateManyWithoutSpeciesNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonDexNumberUpdateManyWithoutSpeciesNestedInput, {
    nullable: true
  })
  dexNumbers?: PokemonDexNumberUpdateManyWithoutSpeciesNestedInput | undefined;

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
