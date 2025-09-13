import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EncountersOrderByRelationAggregateInput } from "../inputs/EncountersOrderByRelationAggregateInput";
import { PokemonAbilitiesOrderByRelationAggregateInput } from "../inputs/PokemonAbilitiesOrderByRelationAggregateInput";
import { PokemonFormsOrderByRelationAggregateInput } from "../inputs/PokemonFormsOrderByRelationAggregateInput";
import { PokemonGameIndicesOrderByRelationAggregateInput } from "../inputs/PokemonGameIndicesOrderByRelationAggregateInput";
import { PokemonItemsOrderByRelationAggregateInput } from "../inputs/PokemonItemsOrderByRelationAggregateInput";
import { PokemonMovesOrderByRelationAggregateInput } from "../inputs/PokemonMovesOrderByRelationAggregateInput";
import { PokemonSpeciesOrderByWithRelationInput } from "../inputs/PokemonSpeciesOrderByWithRelationInput";
import { PokemonStatsOrderByRelationAggregateInput } from "../inputs/PokemonStatsOrderByRelationAggregateInput";
import { PokemonTypesOrderByRelationAggregateInput } from "../inputs/PokemonTypesOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonOrderByWithRelationInput", {})
export class PokemonOrderByWithRelationInput {
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
  species_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  height?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  weight?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  base_experience?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  order?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_default?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesOrderByWithRelationInput, {
    nullable: true
  })
  species?: PokemonSpeciesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsOrderByRelationAggregateInput, {
    nullable: true
  })
  forms?: PokemonFormsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilitiesOrderByRelationAggregateInput, {
    nullable: true
  })
  abilities?: PokemonAbilitiesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesOrderByRelationAggregateInput, {
    nullable: true
  })
  moves?: PokemonMovesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonStatsOrderByRelationAggregateInput, {
    nullable: true
  })
  stats?: PokemonStatsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonTypesOrderByRelationAggregateInput, {
    nullable: true
  })
  types?: PokemonTypesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonItemsOrderByRelationAggregateInput, {
    nullable: true
  })
  items?: PokemonItemsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndicesOrderByRelationAggregateInput, {
    nullable: true
  })
  gameIndices?: PokemonGameIndicesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EncountersOrderByRelationAggregateInput, {
    nullable: true
  })
  encounters?: EncountersOrderByRelationAggregateInput | undefined;
}
