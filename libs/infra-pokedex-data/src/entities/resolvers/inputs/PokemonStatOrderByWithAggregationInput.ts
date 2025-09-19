import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonStatAvgOrderByAggregateInput } from "../inputs/PokemonStatAvgOrderByAggregateInput";
import { PokemonStatCountOrderByAggregateInput } from "../inputs/PokemonStatCountOrderByAggregateInput";
import { PokemonStatMaxOrderByAggregateInput } from "../inputs/PokemonStatMaxOrderByAggregateInput";
import { PokemonStatMinOrderByAggregateInput } from "../inputs/PokemonStatMinOrderByAggregateInput";
import { PokemonStatSumOrderByAggregateInput } from "../inputs/PokemonStatSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonStatOrderByWithAggregationInput", {})
export class PokemonStatOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => PokemonStatCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonStatCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonStatAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonStatAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonStatMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonStatMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonStatMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonStatMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonStatSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonStatSumOrderByAggregateInput | undefined;
}
