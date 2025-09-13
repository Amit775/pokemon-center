import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonGameIndicesAvgOrderByAggregateInput } from "../inputs/PokemonGameIndicesAvgOrderByAggregateInput";
import { PokemonGameIndicesCountOrderByAggregateInput } from "../inputs/PokemonGameIndicesCountOrderByAggregateInput";
import { PokemonGameIndicesMaxOrderByAggregateInput } from "../inputs/PokemonGameIndicesMaxOrderByAggregateInput";
import { PokemonGameIndicesMinOrderByAggregateInput } from "../inputs/PokemonGameIndicesMinOrderByAggregateInput";
import { PokemonGameIndicesSumOrderByAggregateInput } from "../inputs/PokemonGameIndicesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonGameIndicesOrderByWithAggregationInput", {})
export class PokemonGameIndicesOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => PokemonGameIndicesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonGameIndicesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndicesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonGameIndicesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndicesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonGameIndicesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndicesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonGameIndicesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonGameIndicesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonGameIndicesSumOrderByAggregateInput | undefined;
}
