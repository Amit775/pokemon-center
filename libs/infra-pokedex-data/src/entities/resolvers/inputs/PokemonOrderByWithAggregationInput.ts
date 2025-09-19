import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAvgOrderByAggregateInput } from "../inputs/PokemonAvgOrderByAggregateInput";
import { PokemonCountOrderByAggregateInput } from "../inputs/PokemonCountOrderByAggregateInput";
import { PokemonMaxOrderByAggregateInput } from "../inputs/PokemonMaxOrderByAggregateInput";
import { PokemonMinOrderByAggregateInput } from "../inputs/PokemonMinOrderByAggregateInput";
import { PokemonSumOrderByAggregateInput } from "../inputs/PokemonSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonOrderByWithAggregationInput", {})
export class PokemonOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => PokemonCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonSumOrderByAggregateInput | undefined;
}
