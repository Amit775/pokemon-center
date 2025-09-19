import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypeAvgOrderByAggregateInput } from "../inputs/ContestTypeAvgOrderByAggregateInput";
import { ContestTypeCountOrderByAggregateInput } from "../inputs/ContestTypeCountOrderByAggregateInput";
import { ContestTypeMaxOrderByAggregateInput } from "../inputs/ContestTypeMaxOrderByAggregateInput";
import { ContestTypeMinOrderByAggregateInput } from "../inputs/ContestTypeMinOrderByAggregateInput";
import { ContestTypeSumOrderByAggregateInput } from "../inputs/ContestTypeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ContestTypeOrderByWithAggregationInput", {})
export class ContestTypeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ContestTypeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ContestTypeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ContestTypeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ContestTypeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ContestTypeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ContestTypeSumOrderByAggregateInput | undefined;
}
