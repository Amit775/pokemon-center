import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokedexesAvgOrderByAggregateInput } from "../inputs/PokedexesAvgOrderByAggregateInput";
import { PokedexesCountOrderByAggregateInput } from "../inputs/PokedexesCountOrderByAggregateInput";
import { PokedexesMaxOrderByAggregateInput } from "../inputs/PokedexesMaxOrderByAggregateInput";
import { PokedexesMinOrderByAggregateInput } from "../inputs/PokedexesMinOrderByAggregateInput";
import { PokedexesSumOrderByAggregateInput } from "../inputs/PokedexesSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokedexesOrderByWithAggregationInput", {})
export class PokedexesOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => PokedexesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokedexesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokedexesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokedexesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokedexesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokedexesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokedexesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokedexesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokedexesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokedexesSumOrderByAggregateInput | undefined;
}
