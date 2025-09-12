import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonColorsAvgOrderByAggregateInput } from "../inputs/PokemonColorsAvgOrderByAggregateInput";
import { PokemonColorsCountOrderByAggregateInput } from "../inputs/PokemonColorsCountOrderByAggregateInput";
import { PokemonColorsMaxOrderByAggregateInput } from "../inputs/PokemonColorsMaxOrderByAggregateInput";
import { PokemonColorsMinOrderByAggregateInput } from "../inputs/PokemonColorsMinOrderByAggregateInput";
import { PokemonColorsSumOrderByAggregateInput } from "../inputs/PokemonColorsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonColorsOrderByWithAggregationInput", {})
export class PokemonColorsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonColorsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonColorsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonColorsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonColorsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonColorsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonColorsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonColorsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonColorsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonColorsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonColorsSumOrderByAggregateInput | undefined;
}
