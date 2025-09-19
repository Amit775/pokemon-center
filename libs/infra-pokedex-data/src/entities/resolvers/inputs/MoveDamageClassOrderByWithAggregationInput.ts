import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveDamageClassAvgOrderByAggregateInput } from "../inputs/MoveDamageClassAvgOrderByAggregateInput";
import { MoveDamageClassCountOrderByAggregateInput } from "../inputs/MoveDamageClassCountOrderByAggregateInput";
import { MoveDamageClassMaxOrderByAggregateInput } from "../inputs/MoveDamageClassMaxOrderByAggregateInput";
import { MoveDamageClassMinOrderByAggregateInput } from "../inputs/MoveDamageClassMinOrderByAggregateInput";
import { MoveDamageClassSumOrderByAggregateInput } from "../inputs/MoveDamageClassSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MoveDamageClassOrderByWithAggregationInput", {})
export class MoveDamageClassOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MoveDamageClassCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MoveDamageClassAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MoveDamageClassMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MoveDamageClassMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MoveDamageClassSumOrderByAggregateInput | undefined;
}
