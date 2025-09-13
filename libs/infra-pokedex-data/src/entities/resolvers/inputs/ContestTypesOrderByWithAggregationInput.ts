import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypesAvgOrderByAggregateInput } from "../inputs/ContestTypesAvgOrderByAggregateInput";
import { ContestTypesCountOrderByAggregateInput } from "../inputs/ContestTypesCountOrderByAggregateInput";
import { ContestTypesMaxOrderByAggregateInput } from "../inputs/ContestTypesMaxOrderByAggregateInput";
import { ContestTypesMinOrderByAggregateInput } from "../inputs/ContestTypesMinOrderByAggregateInput";
import { ContestTypesSumOrderByAggregateInput } from "../inputs/ContestTypesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ContestTypesOrderByWithAggregationInput", {})
export class ContestTypesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ContestTypesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ContestTypesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ContestTypesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ContestTypesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ContestTypesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ContestTypesSumOrderByAggregateInput | undefined;
}
