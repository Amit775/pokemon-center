import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormAvgOrderByAggregateInput } from "../inputs/PokemonFormAvgOrderByAggregateInput";
import { PokemonFormCountOrderByAggregateInput } from "../inputs/PokemonFormCountOrderByAggregateInput";
import { PokemonFormMaxOrderByAggregateInput } from "../inputs/PokemonFormMaxOrderByAggregateInput";
import { PokemonFormMinOrderByAggregateInput } from "../inputs/PokemonFormMinOrderByAggregateInput";
import { PokemonFormSumOrderByAggregateInput } from "../inputs/PokemonFormSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonFormOrderByWithAggregationInput", {})
export class PokemonFormOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  form_identifier?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokemon_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  introduced_in_version_group_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_default?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_battle_only?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_mega?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  form_order?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonFormCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonFormCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonFormAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonFormMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonFormMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonFormSumOrderByAggregateInput | undefined;
}
