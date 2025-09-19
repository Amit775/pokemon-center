import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndexAvgOrderByAggregateInput } from "../inputs/LocationGameIndexAvgOrderByAggregateInput";
import { LocationGameIndexCountOrderByAggregateInput } from "../inputs/LocationGameIndexCountOrderByAggregateInput";
import { LocationGameIndexMaxOrderByAggregateInput } from "../inputs/LocationGameIndexMaxOrderByAggregateInput";
import { LocationGameIndexMinOrderByAggregateInput } from "../inputs/LocationGameIndexMinOrderByAggregateInput";
import { LocationGameIndexSumOrderByAggregateInput } from "../inputs/LocationGameIndexSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LocationGameIndexOrderByWithAggregationInput", {})
export class LocationGameIndexOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  location_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  generation_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  game_index?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndexCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: LocationGameIndexCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndexAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: LocationGameIndexAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndexMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: LocationGameIndexMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndexMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: LocationGameIndexMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndexSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: LocationGameIndexSumOrderByAggregateInput | undefined;
}
