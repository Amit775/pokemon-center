import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotsOrderByRelationAggregateInput } from "../inputs/EncounterSlotsOrderByRelationAggregateInput";
import { GenerationsOrderByWithRelationInput } from "../inputs/GenerationsOrderByWithRelationInput";
import { MachinesOrderByRelationAggregateInput } from "../inputs/MachinesOrderByRelationAggregateInput";
import { PokedexVersionGroupsOrderByRelationAggregateInput } from "../inputs/PokedexVersionGroupsOrderByRelationAggregateInput";
import { PokemonFormsOrderByRelationAggregateInput } from "../inputs/PokemonFormsOrderByRelationAggregateInput";
import { PokemonMovesOrderByRelationAggregateInput } from "../inputs/PokemonMovesOrderByRelationAggregateInput";
import { VersionGroupPokemonMoveMethodsOrderByRelationAggregateInput } from "../inputs/VersionGroupPokemonMoveMethodsOrderByRelationAggregateInput";
import { VersionGroupRegionsOrderByRelationAggregateInput } from "../inputs/VersionGroupRegionsOrderByRelationAggregateInput";
import { VersionsOrderByRelationAggregateInput } from "../inputs/VersionsOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VersionGroupsOrderByWithRelationInput", {})
export class VersionGroupsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  generation_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GenerationsOrderByWithRelationInput, {
    nullable: true
  })
  generation?: GenerationsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => VersionsOrderByRelationAggregateInput, {
    nullable: true
  })
  versions?: VersionsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotsOrderByRelationAggregateInput, {
    nullable: true
  })
  encounterSlots?: EncounterSlotsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MachinesOrderByRelationAggregateInput, {
    nullable: true
  })
  machines?: MachinesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodsOrderByRelationAggregateInput, {
    nullable: true
  })
  versionGroupPokemonMoveMethods?: VersionGroupPokemonMoveMethodsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionsOrderByRelationAggregateInput, {
    nullable: true
  })
  versionGroupRegions?: VersionGroupRegionsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupsOrderByRelationAggregateInput, {
    nullable: true
  })
  pokedexVersionGroups?: PokedexVersionGroupsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesOrderByRelationAggregateInput, {
    nullable: true
  })
  pokemonMoves?: PokemonMovesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsOrderByRelationAggregateInput, {
    nullable: true
  })
  pokemonForms?: PokemonFormsOrderByRelationAggregateInput | undefined;
}
