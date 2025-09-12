import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GendersAvgOrderByAggregateInput } from "../inputs/GendersAvgOrderByAggregateInput";
import { GendersCountOrderByAggregateInput } from "../inputs/GendersCountOrderByAggregateInput";
import { GendersMaxOrderByAggregateInput } from "../inputs/GendersMaxOrderByAggregateInput";
import { GendersMinOrderByAggregateInput } from "../inputs/GendersMinOrderByAggregateInput";
import { GendersSumOrderByAggregateInput } from "../inputs/GendersSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GendersOrderByWithAggregationInput", {})
export class GendersOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GendersCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: GendersCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GendersAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: GendersAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GendersMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: GendersMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GendersMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: GendersMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GendersSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: GendersSumOrderByAggregateInput | undefined;
}
