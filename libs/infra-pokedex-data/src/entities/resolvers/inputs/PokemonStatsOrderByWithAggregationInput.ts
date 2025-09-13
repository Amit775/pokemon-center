import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatsAvgOrderByAggregateInput } from "../inputs/PokemonStatsAvgOrderByAggregateInput";
import { PokemonStatsCountOrderByAggregateInput } from "../inputs/PokemonStatsCountOrderByAggregateInput";
import { PokemonStatsMaxOrderByAggregateInput } from "../inputs/PokemonStatsMaxOrderByAggregateInput";
import { PokemonStatsMinOrderByAggregateInput } from "../inputs/PokemonStatsMinOrderByAggregateInput";
import { PokemonStatsSumOrderByAggregateInput } from "../inputs/PokemonStatsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonStatsOrderByWithAggregationInput", {})
export class PokemonStatsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokemon_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stat_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  base_stat?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  effort?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonStatsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonStatsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonStatsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonStatsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonStatsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonStatsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonStatsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonStatsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonStatsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonStatsSumOrderByAggregateInput | undefined;
}
