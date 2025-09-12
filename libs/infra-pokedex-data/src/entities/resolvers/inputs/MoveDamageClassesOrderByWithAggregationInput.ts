import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveDamageClassesAvgOrderByAggregateInput } from "../inputs/MoveDamageClassesAvgOrderByAggregateInput";
import { MoveDamageClassesCountOrderByAggregateInput } from "../inputs/MoveDamageClassesCountOrderByAggregateInput";
import { MoveDamageClassesMaxOrderByAggregateInput } from "../inputs/MoveDamageClassesMaxOrderByAggregateInput";
import { MoveDamageClassesMinOrderByAggregateInput } from "../inputs/MoveDamageClassesMinOrderByAggregateInput";
import { MoveDamageClassesSumOrderByAggregateInput } from "../inputs/MoveDamageClassesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MoveDamageClassesOrderByWithAggregationInput", {})
export class MoveDamageClassesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MoveDamageClassesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MoveDamageClassesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MoveDamageClassesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MoveDamageClassesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MoveDamageClassesSumOrderByAggregateInput | undefined;
}
