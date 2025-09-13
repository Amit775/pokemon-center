import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreasAvgOrderByAggregateInput } from "../inputs/LocationAreasAvgOrderByAggregateInput";
import { LocationAreasCountOrderByAggregateInput } from "../inputs/LocationAreasCountOrderByAggregateInput";
import { LocationAreasMaxOrderByAggregateInput } from "../inputs/LocationAreasMaxOrderByAggregateInput";
import { LocationAreasMinOrderByAggregateInput } from "../inputs/LocationAreasMinOrderByAggregateInput";
import { LocationAreasSumOrderByAggregateInput } from "../inputs/LocationAreasSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LocationAreasOrderByWithAggregationInput", {})
export class LocationAreasOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  location_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  game_index?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  identifier?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreasCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: LocationAreasCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreasAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: LocationAreasAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreasMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: LocationAreasMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreasMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: LocationAreasMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreasSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: LocationAreasSumOrderByAggregateInput | undefined;
}
