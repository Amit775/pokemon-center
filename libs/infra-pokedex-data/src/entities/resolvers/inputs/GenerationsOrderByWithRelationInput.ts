import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilitiesOrderByRelationAggregateInput } from "../inputs/AbilitiesOrderByRelationAggregateInput";
import { ItemGameIndicesOrderByRelationAggregateInput } from "../inputs/ItemGameIndicesOrderByRelationAggregateInput";
import { LocationGameIndicesOrderByRelationAggregateInput } from "../inputs/LocationGameIndicesOrderByRelationAggregateInput";
import { MovesOrderByRelationAggregateInput } from "../inputs/MovesOrderByRelationAggregateInput";
import { PokemonFormGenerationsOrderByRelationAggregateInput } from "../inputs/PokemonFormGenerationsOrderByRelationAggregateInput";
import { PokemonSpeciesOrderByRelationAggregateInput } from "../inputs/PokemonSpeciesOrderByRelationAggregateInput";
import { RegionsOrderByWithRelationInput } from "../inputs/RegionsOrderByWithRelationInput";
import { TypeGameIndicesOrderByRelationAggregateInput } from "../inputs/TypeGameIndicesOrderByRelationAggregateInput";
import { TypesOrderByRelationAggregateInput } from "../inputs/TypesOrderByRelationAggregateInput";
import { VersionGroupsOrderByRelationAggregateInput } from "../inputs/VersionGroupsOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GenerationsOrderByWithRelationInput", {})
export class GenerationsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  main_region_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RegionsOrderByWithRelationInput, {
    nullable: true
  })
  region?: RegionsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesOrderByRelationAggregateInput, {
    nullable: true
  })
  pokemonSpecies?: PokemonSpeciesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MovesOrderByRelationAggregateInput, {
    nullable: true
  })
  moves?: MovesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypesOrderByRelationAggregateInput, {
    nullable: true
  })
  types?: TypesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AbilitiesOrderByRelationAggregateInput, {
    nullable: true
  })
  abilities?: AbilitiesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationsOrderByRelationAggregateInput, {
    nullable: true
  })
  pokemonFormGenerations?: PokemonFormGenerationsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndicesOrderByRelationAggregateInput, {
    nullable: true
  })
  itemGameIndices?: ItemGameIndicesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndicesOrderByRelationAggregateInput, {
    nullable: true
  })
  typeGameIndices?: TypeGameIndicesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndicesOrderByRelationAggregateInput, {
    nullable: true
  })
  locationGameIndices?: LocationGameIndicesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsOrderByRelationAggregateInput, {
    nullable: true
  })
  versionGroups?: VersionGroupsOrderByRelationAggregateInput | undefined;
}
