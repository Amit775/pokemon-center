import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TypesAvgOrderByAggregateInput } from "../inputs/TypesAvgOrderByAggregateInput";
import { TypesCountOrderByAggregateInput } from "../inputs/TypesCountOrderByAggregateInput";
import { TypesMaxOrderByAggregateInput } from "../inputs/TypesMaxOrderByAggregateInput";
import { TypesMinOrderByAggregateInput } from "../inputs/TypesMinOrderByAggregateInput";
import { TypesSumOrderByAggregateInput } from "../inputs/TypesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TypesOrderByWithAggregationInput", {})
export class TypesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  generation_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  damage_class_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => TypesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TypesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TypesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TypesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TypesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TypesSumOrderByAggregateInput | undefined;
}
