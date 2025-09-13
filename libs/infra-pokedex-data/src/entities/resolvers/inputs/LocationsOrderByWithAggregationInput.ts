import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationsAvgOrderByAggregateInput } from "../inputs/LocationsAvgOrderByAggregateInput";
import { LocationsCountOrderByAggregateInput } from "../inputs/LocationsCountOrderByAggregateInput";
import { LocationsMaxOrderByAggregateInput } from "../inputs/LocationsMaxOrderByAggregateInput";
import { LocationsMinOrderByAggregateInput } from "../inputs/LocationsMinOrderByAggregateInput";
import { LocationsSumOrderByAggregateInput } from "../inputs/LocationsSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LocationsOrderByWithAggregationInput", {})
export class LocationsOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => LocationsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: LocationsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: LocationsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: LocationsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: LocationsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: LocationsSumOrderByAggregateInput | undefined;
}
