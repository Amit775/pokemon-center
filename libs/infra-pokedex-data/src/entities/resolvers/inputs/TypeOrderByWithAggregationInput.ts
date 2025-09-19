import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TypeAvgOrderByAggregateInput } from "../inputs/TypeAvgOrderByAggregateInput";
import { TypeCountOrderByAggregateInput } from "../inputs/TypeCountOrderByAggregateInput";
import { TypeMaxOrderByAggregateInput } from "../inputs/TypeMaxOrderByAggregateInput";
import { TypeMinOrderByAggregateInput } from "../inputs/TypeMinOrderByAggregateInput";
import { TypeSumOrderByAggregateInput } from "../inputs/TypeSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TypeOrderByWithAggregationInput", {})
export class TypeOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => TypeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TypeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TypeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TypeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TypeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TypeSumOrderByAggregateInput | undefined;
}
