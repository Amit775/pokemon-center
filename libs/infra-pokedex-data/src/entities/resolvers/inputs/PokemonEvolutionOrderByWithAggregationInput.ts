import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionAvgOrderByAggregateInput } from "../inputs/PokemonEvolutionAvgOrderByAggregateInput";
import { PokemonEvolutionCountOrderByAggregateInput } from "../inputs/PokemonEvolutionCountOrderByAggregateInput";
import { PokemonEvolutionMaxOrderByAggregateInput } from "../inputs/PokemonEvolutionMaxOrderByAggregateInput";
import { PokemonEvolutionMinOrderByAggregateInput } from "../inputs/PokemonEvolutionMinOrderByAggregateInput";
import { PokemonEvolutionSumOrderByAggregateInput } from "../inputs/PokemonEvolutionSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonEvolutionOrderByWithAggregationInput", {})
export class PokemonEvolutionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  evolved_species_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  evolution_trigger_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  trigger_item_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  minimum_level?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  gender_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  location_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  held_item_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  time_of_day?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  known_move_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  known_move_type_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  minimum_happiness?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  minimum_beauty?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  minimum_affection?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  relative_physical_stats?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  party_species_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  party_type_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  trade_species_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  needs_overworld_rain?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  turn_upside_down?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonEvolutionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonEvolutionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonEvolutionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonEvolutionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonEvolutionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonEvolutionSumOrderByAggregateInput | undefined;
}
