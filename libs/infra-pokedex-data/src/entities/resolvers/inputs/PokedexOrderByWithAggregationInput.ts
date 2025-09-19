import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexAvgOrderByAggregateInput } from "../inputs/PokedexAvgOrderByAggregateInput";
import { PokedexCountOrderByAggregateInput } from "../inputs/PokedexCountOrderByAggregateInput";
import { PokedexMaxOrderByAggregateInput } from "../inputs/PokedexMaxOrderByAggregateInput";
import { PokedexMinOrderByAggregateInput } from "../inputs/PokedexMinOrderByAggregateInput";
import { PokedexSumOrderByAggregateInput } from "../inputs/PokedexSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokedexOrderByWithAggregationInput", {})
export class PokedexOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  region_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_main_series?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokedexCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokedexCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokedexAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokedexAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokedexMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokedexMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokedexMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokedexMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokedexSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokedexSumOrderByAggregateInput | undefined;
}
