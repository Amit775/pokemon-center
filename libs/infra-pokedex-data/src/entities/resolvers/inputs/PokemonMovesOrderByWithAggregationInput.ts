import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMovesAvgOrderByAggregateInput } from "../inputs/PokemonMovesAvgOrderByAggregateInput";
import { PokemonMovesCountOrderByAggregateInput } from "../inputs/PokemonMovesCountOrderByAggregateInput";
import { PokemonMovesMaxOrderByAggregateInput } from "../inputs/PokemonMovesMaxOrderByAggregateInput";
import { PokemonMovesMinOrderByAggregateInput } from "../inputs/PokemonMovesMinOrderByAggregateInput";
import { PokemonMovesSumOrderByAggregateInput } from "../inputs/PokemonMovesSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonMovesOrderByWithAggregationInput", {})
export class PokemonMovesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokemon_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_group_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  move_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokemon_move_method_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  level?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  order?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  mastery?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonMovesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonMovesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonMovesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonMovesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMovesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonMovesSumOrderByAggregateInput | undefined;
}
