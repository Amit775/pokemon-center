import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndexAvgOrderByAggregateInput } from "../inputs/PokemonGameIndexAvgOrderByAggregateInput";
import { PokemonGameIndexCountOrderByAggregateInput } from "../inputs/PokemonGameIndexCountOrderByAggregateInput";
import { PokemonGameIndexMaxOrderByAggregateInput } from "../inputs/PokemonGameIndexMaxOrderByAggregateInput";
import { PokemonGameIndexMinOrderByAggregateInput } from "../inputs/PokemonGameIndexMinOrderByAggregateInput";
import { PokemonGameIndexSumOrderByAggregateInput } from "../inputs/PokemonGameIndexSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonGameIndexOrderByWithAggregationInput", {})
export class PokemonGameIndexOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokemon_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  game_index?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndexCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonGameIndexCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndexAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonGameIndexAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndexMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonGameIndexMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndexMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonGameIndexMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndexSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonGameIndexSumOrderByAggregateInput | undefined;
}
