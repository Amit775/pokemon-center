import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenderCreateNestedOneWithoutEvolutionInput } from "../inputs/GenderCreateNestedOneWithoutEvolutionInput";
import { ItemCreateNestedOneWithoutHeldItemsInput } from "../inputs/ItemCreateNestedOneWithoutHeldItemsInput";
import { ItemCreateNestedOneWithoutTriggerItemsInput } from "../inputs/ItemCreateNestedOneWithoutTriggerItemsInput";
import { LocationCreateNestedOneWithoutEvolutionInput } from "../inputs/LocationCreateNestedOneWithoutEvolutionInput";
import { MoveCreateNestedOneWithoutKnownMovesInput } from "../inputs/MoveCreateNestedOneWithoutKnownMovesInput";
import { PokemonSpeciesCreateNestedOneWithoutEvolutionInput } from "../inputs/PokemonSpeciesCreateNestedOneWithoutEvolutionInput";
import { PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput } from "../inputs/PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput";
import { PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput } from "../inputs/PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput";
import { TypeCreateNestedOneWithoutKnownMoveTypesInput } from "../inputs/TypeCreateNestedOneWithoutKnownMoveTypesInput";
import { TypeCreateNestedOneWithoutPartyTypesInput } from "../inputs/TypeCreateNestedOneWithoutPartyTypesInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateWithoutEvolutionTriggerInput", {})
export class PokemonEvolutionCreateWithoutEvolutionTriggerInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minimum_level?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  time_of_day?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minimum_happiness?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minimum_beauty?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  minimum_affection?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  relative_physical_stats?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  needs_overworld_rain!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  turn_upside_down!: number;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateNestedOneWithoutEvolutionInput, {
    nullable: false
  })
  evolvedSpecies!: PokemonSpeciesCreateNestedOneWithoutEvolutionInput;

  @TypeGraphQL.Field(_type => ItemCreateNestedOneWithoutTriggerItemsInput, {
    nullable: true
  })
  triggerItem?: ItemCreateNestedOneWithoutTriggerItemsInput | undefined;

  @TypeGraphQL.Field(_type => GenderCreateNestedOneWithoutEvolutionInput, {
    nullable: true
  })
  gender?: GenderCreateNestedOneWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => LocationCreateNestedOneWithoutEvolutionInput, {
    nullable: true
  })
  location?: LocationCreateNestedOneWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => ItemCreateNestedOneWithoutHeldItemsInput, {
    nullable: true
  })
  heldItem?: ItemCreateNestedOneWithoutHeldItemsInput | undefined;

  @TypeGraphQL.Field(_type => MoveCreateNestedOneWithoutKnownMovesInput, {
    nullable: true
  })
  knownMove?: MoveCreateNestedOneWithoutKnownMovesInput | undefined;

  @TypeGraphQL.Field(_type => TypeCreateNestedOneWithoutKnownMoveTypesInput, {
    nullable: true
  })
  knownMoveType?: TypeCreateNestedOneWithoutKnownMoveTypesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput, {
    nullable: true
  })
  partySpecies?: PokemonSpeciesCreateNestedOneWithoutPartySpeciesInput | undefined;

  @TypeGraphQL.Field(_type => TypeCreateNestedOneWithoutPartyTypesInput, {
    nullable: true
  })
  partyType?: TypeCreateNestedOneWithoutPartyTypesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput, {
    nullable: true
  })
  tradeSpecies?: PokemonSpeciesCreateNestedOneWithoutTradeSpeciesInput | undefined;
}
