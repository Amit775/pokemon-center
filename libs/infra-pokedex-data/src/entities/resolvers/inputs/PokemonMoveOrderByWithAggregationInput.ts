import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMoveAvgOrderByAggregateInput } from "../inputs/PokemonMoveAvgOrderByAggregateInput";
import { PokemonMoveCountOrderByAggregateInput } from "../inputs/PokemonMoveCountOrderByAggregateInput";
import { PokemonMoveMaxOrderByAggregateInput } from "../inputs/PokemonMoveMaxOrderByAggregateInput";
import { PokemonMoveMinOrderByAggregateInput } from "../inputs/PokemonMoveMinOrderByAggregateInput";
import { PokemonMoveSumOrderByAggregateInput } from "../inputs/PokemonMoveSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonMoveOrderByWithAggregationInput", {})
export class PokemonMoveOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => PokemonMoveCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonMoveCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonMoveAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonMoveMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonMoveMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMoveSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonMoveSumOrderByAggregateInput | undefined;
}
