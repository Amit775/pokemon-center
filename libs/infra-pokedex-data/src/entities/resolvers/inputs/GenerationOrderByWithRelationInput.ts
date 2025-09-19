import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilityOrderByRelationAggregateInput } from "../inputs/AbilityOrderByRelationAggregateInput";
import { ItemGameIndexOrderByRelationAggregateInput } from "../inputs/ItemGameIndexOrderByRelationAggregateInput";
import { LocationGameIndexOrderByRelationAggregateInput } from "../inputs/LocationGameIndexOrderByRelationAggregateInput";
import { MoveOrderByRelationAggregateInput } from "../inputs/MoveOrderByRelationAggregateInput";
import { PokemonFormGenerationOrderByRelationAggregateInput } from "../inputs/PokemonFormGenerationOrderByRelationAggregateInput";
import { PokemonSpeciesOrderByRelationAggregateInput } from "../inputs/PokemonSpeciesOrderByRelationAggregateInput";
import { RegionOrderByWithRelationInput } from "../inputs/RegionOrderByWithRelationInput";
import { TypeGameIndexOrderByRelationAggregateInput } from "../inputs/TypeGameIndexOrderByRelationAggregateInput";
import { TypeOrderByRelationAggregateInput } from "../inputs/TypeOrderByRelationAggregateInput";
import { VersionGroupOrderByRelationAggregateInput } from "../inputs/VersionGroupOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GenerationOrderByWithRelationInput", {})
export class GenerationOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => RegionOrderByWithRelationInput, {
    nullable: true
  })
  region?: RegionOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesOrderByRelationAggregateInput, {
    nullable: true
  })
  pokemonSpecies?: PokemonSpeciesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveOrderByRelationAggregateInput, {
    nullable: true
  })
  moves?: MoveOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeOrderByRelationAggregateInput, {
    nullable: true
  })
  types?: TypeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AbilityOrderByRelationAggregateInput, {
    nullable: true
  })
  abilities?: AbilityOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormGenerationOrderByRelationAggregateInput, {
    nullable: true
  })
  pokemonFormGenerations?: PokemonFormGenerationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndexOrderByRelationAggregateInput, {
    nullable: true
  })
  itemGameIndices?: ItemGameIndexOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeGameIndexOrderByRelationAggregateInput, {
    nullable: true
  })
  typeGameIndices?: TypeGameIndexOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndexOrderByRelationAggregateInput, {
    nullable: true
  })
  locationGameIndices?: LocationGameIndexOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupOrderByRelationAggregateInput, {
    nullable: true
  })
  versionGroups?: VersionGroupOrderByRelationAggregateInput | undefined;
}
