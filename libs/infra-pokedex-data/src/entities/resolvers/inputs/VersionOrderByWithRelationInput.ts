import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncounterOrderByRelationAggregateInput } from "../inputs/EncounterOrderByRelationAggregateInput";
import { LocationAreaEncounterRateOrderByRelationAggregateInput } from "../inputs/LocationAreaEncounterRateOrderByRelationAggregateInput";
import { PokemonGameIndexOrderByRelationAggregateInput } from "../inputs/PokemonGameIndexOrderByRelationAggregateInput";
import { PokemonItemOrderByRelationAggregateInput } from "../inputs/PokemonItemOrderByRelationAggregateInput";
import { VersionGroupOrderByWithRelationInput } from "../inputs/VersionGroupOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VersionOrderByWithRelationInput", {})
export class VersionOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => VersionGroupOrderByWithRelationInput, {
    nullable: true
  })
  versionGroup?: VersionGroupOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => EncounterOrderByRelationAggregateInput, {
    nullable: true
  })
  encounters?: EncounterOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemOrderByRelationAggregateInput, {
    nullable: true
  })
  pokemonItems?: PokemonItemOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndexOrderByRelationAggregateInput, {
    nullable: true
  })
  pokemonGameIndices?: PokemonGameIndexOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaEncounterRateOrderByRelationAggregateInput, {
    nullable: true
  })
  locationAreaEncounterRates?: LocationAreaEncounterRateOrderByRelationAggregateInput | undefined;
}
