import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersOrderByRelationAggregateInput } from "../inputs/EncountersOrderByRelationAggregateInput";
import { LocationAreaEncounterRatesOrderByRelationAggregateInput } from "../inputs/LocationAreaEncounterRatesOrderByRelationAggregateInput";
import { PokemonGameIndicesOrderByRelationAggregateInput } from "../inputs/PokemonGameIndicesOrderByRelationAggregateInput";
import { PokemonItemsOrderByRelationAggregateInput } from "../inputs/PokemonItemsOrderByRelationAggregateInput";
import { VersionGroupsOrderByWithRelationInput } from "../inputs/VersionGroupsOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VersionsOrderByWithRelationInput", {})
export class VersionsOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_group_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsOrderByWithRelationInput, {
    nullable: true
  })
  versionGroup?: VersionGroupsOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => EncountersOrderByRelationAggregateInput, {
    nullable: true
  })
  encounters?: EncountersOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemsOrderByRelationAggregateInput, {
    nullable: true
  })
  pokemonItems?: PokemonItemsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndicesOrderByRelationAggregateInput, {
    nullable: true
  })
  pokemonGameIndices?: PokemonGameIndicesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRatesOrderByRelationAggregateInput, {
    nullable: true
  })
  locationAreaEncounterRates?: LocationAreaEncounterRatesOrderByRelationAggregateInput | undefined;
}
