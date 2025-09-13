import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesAvgOrderByAggregateInput } from "../inputs/PokemonSpeciesAvgOrderByAggregateInput";
import { PokemonSpeciesCountOrderByAggregateInput } from "../inputs/PokemonSpeciesCountOrderByAggregateInput";
import { PokemonSpeciesMaxOrderByAggregateInput } from "../inputs/PokemonSpeciesMaxOrderByAggregateInput";
import { PokemonSpeciesMinOrderByAggregateInput } from "../inputs/PokemonSpeciesMinOrderByAggregateInput";
import { PokemonSpeciesSumOrderByAggregateInput } from "../inputs/PokemonSpeciesSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonSpeciesOrderByWithAggregationInput", {})
export class PokemonSpeciesOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  evolves_from_species_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  evolution_chain_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  color_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shape_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  habitat_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  gender_rate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  capture_rate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  base_happiness?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_baby?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  hatch_counter?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  has_gender_differences?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  growth_rate_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  forms_switchable?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_legendary?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_mythical?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  conquest_order?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonSpeciesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonSpeciesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonSpeciesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonSpeciesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSpeciesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonSpeciesSumOrderByAggregateInput | undefined;
}
