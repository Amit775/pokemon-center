import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenderAvgOrderByAggregateInput } from "../inputs/GenderAvgOrderByAggregateInput";
import { GenderCountOrderByAggregateInput } from "../inputs/GenderCountOrderByAggregateInput";
import { GenderMaxOrderByAggregateInput } from "../inputs/GenderMaxOrderByAggregateInput";
import { GenderMinOrderByAggregateInput } from "../inputs/GenderMinOrderByAggregateInput";
import { GenderSumOrderByAggregateInput } from "../inputs/GenderSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("GenderOrderByWithAggregationInput", {})
export class GenderOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => GenderCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: GenderCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GenderAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: GenderAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GenderMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: GenderMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GenderMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: GenderMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => GenderSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: GenderSumOrderByAggregateInput | undefined;
}
