import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndicesAvgOrderByAggregateInput } from "../inputs/LocationGameIndicesAvgOrderByAggregateInput";
import { LocationGameIndicesCountOrderByAggregateInput } from "../inputs/LocationGameIndicesCountOrderByAggregateInput";
import { LocationGameIndicesMaxOrderByAggregateInput } from "../inputs/LocationGameIndicesMaxOrderByAggregateInput";
import { LocationGameIndicesMinOrderByAggregateInput } from "../inputs/LocationGameIndicesMinOrderByAggregateInput";
import { LocationGameIndicesSumOrderByAggregateInput } from "../inputs/LocationGameIndicesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LocationGameIndicesOrderByWithAggregationInput", {})
export class LocationGameIndicesOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => LocationGameIndicesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: LocationGameIndicesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndicesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: LocationGameIndicesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndicesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: LocationGameIndicesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndicesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: LocationGameIndicesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndicesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: LocationGameIndicesSumOrderByAggregateInput | undefined;
}
