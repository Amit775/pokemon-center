import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterSlotOrderByRelationAggregateInput } from "../inputs/EncounterSlotOrderByRelationAggregateInput";
import { GenerationOrderByWithRelationInput } from "../inputs/GenerationOrderByWithRelationInput";
import { MachineOrderByRelationAggregateInput } from "../inputs/MachineOrderByRelationAggregateInput";
import { PokedexVersionGroupOrderByRelationAggregateInput } from "../inputs/PokedexVersionGroupOrderByRelationAggregateInput";
import { PokemonFormOrderByRelationAggregateInput } from "../inputs/PokemonFormOrderByRelationAggregateInput";
import { PokemonMoveOrderByRelationAggregateInput } from "../inputs/PokemonMoveOrderByRelationAggregateInput";
import { VersionGroupPokemonMoveMethodOrderByRelationAggregateInput } from "../inputs/VersionGroupPokemonMoveMethodOrderByRelationAggregateInput";
import { VersionGroupRegionOrderByRelationAggregateInput } from "../inputs/VersionGroupRegionOrderByRelationAggregateInput";
import { VersionOrderByRelationAggregateInput } from "../inputs/VersionOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VersionGroupOrderByWithRelationInput", {})
export class VersionGroupOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => GenerationOrderByWithRelationInput, {
    nullable: true
  })
  generation?: GenerationOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => VersionOrderByRelationAggregateInput, {
    nullable: true
  })
  versions?: VersionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncounterSlotOrderByRelationAggregateInput, {
    nullable: true
  })
  encounterSlots?: EncounterSlotOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MachineOrderByRelationAggregateInput, {
    nullable: true
  })
  machines?: MachineOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupPokemonMoveMethodOrderByRelationAggregateInput, {
    nullable: true
  })
  versionGroupPokemonMoveMethods?: VersionGroupPokemonMoveMethodOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionOrderByRelationAggregateInput, {
    nullable: true
  })
  versionGroupRegions?: VersionGroupRegionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokedexVersionGroupOrderByRelationAggregateInput, {
    nullable: true
  })
  pokedexVersionGroups?: PokedexVersionGroupOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveOrderByRelationAggregateInput, {
    nullable: true
  })
  pokemonMoves?: PokemonMoveOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormOrderByRelationAggregateInput, {
    nullable: true
  })
  pokemonForms?: PokemonFormOrderByRelationAggregateInput | undefined;
}
