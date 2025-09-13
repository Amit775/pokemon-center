import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormsAvgOrderByAggregateInput } from "../inputs/PokemonFormsAvgOrderByAggregateInput";
import { PokemonFormsCountOrderByAggregateInput } from "../inputs/PokemonFormsCountOrderByAggregateInput";
import { PokemonFormsMaxOrderByAggregateInput } from "../inputs/PokemonFormsMaxOrderByAggregateInput";
import { PokemonFormsMinOrderByAggregateInput } from "../inputs/PokemonFormsMinOrderByAggregateInput";
import { PokemonFormsSumOrderByAggregateInput } from "../inputs/PokemonFormsSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonFormsOrderByWithAggregationInput", {})
export class PokemonFormsOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => PokemonFormsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonFormsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonFormsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonFormsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonFormsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonFormsSumOrderByAggregateInput | undefined;
}
