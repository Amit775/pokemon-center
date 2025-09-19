import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaAvgOrderByAggregateInput } from "../inputs/LocationAreaAvgOrderByAggregateInput";
import { LocationAreaCountOrderByAggregateInput } from "../inputs/LocationAreaCountOrderByAggregateInput";
import { LocationAreaMaxOrderByAggregateInput } from "../inputs/LocationAreaMaxOrderByAggregateInput";
import { LocationAreaMinOrderByAggregateInput } from "../inputs/LocationAreaMinOrderByAggregateInput";
import { LocationAreaSumOrderByAggregateInput } from "../inputs/LocationAreaSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LocationAreaOrderByWithAggregationInput", {})
export class LocationAreaOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => LocationAreaCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: LocationAreaCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: LocationAreaAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: LocationAreaMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: LocationAreaMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationAreaSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: LocationAreaSumOrderByAggregateInput | undefined;
}
