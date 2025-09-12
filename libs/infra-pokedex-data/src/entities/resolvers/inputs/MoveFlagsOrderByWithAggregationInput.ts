import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveFlagsAvgOrderByAggregateInput } from "../inputs/MoveFlagsAvgOrderByAggregateInput";
import { MoveFlagsCountOrderByAggregateInput } from "../inputs/MoveFlagsCountOrderByAggregateInput";
import { MoveFlagsMaxOrderByAggregateInput } from "../inputs/MoveFlagsMaxOrderByAggregateInput";
import { MoveFlagsMinOrderByAggregateInput } from "../inputs/MoveFlagsMinOrderByAggregateInput";
import { MoveFlagsSumOrderByAggregateInput } from "../inputs/MoveFlagsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MoveFlagsOrderByWithAggregationInput", {})
export class MoveFlagsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MoveFlagsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MoveFlagsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MoveFlagsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MoveFlagsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MoveFlagsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveFlagsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MoveFlagsSumOrderByAggregateInput | undefined;
}
