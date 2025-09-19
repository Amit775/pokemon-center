import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EggGroupAvgOrderByAggregateInput } from "../inputs/EggGroupAvgOrderByAggregateInput";
import { EggGroupCountOrderByAggregateInput } from "../inputs/EggGroupCountOrderByAggregateInput";
import { EggGroupMaxOrderByAggregateInput } from "../inputs/EggGroupMaxOrderByAggregateInput";
import { EggGroupMinOrderByAggregateInput } from "../inputs/EggGroupMinOrderByAggregateInput";
import { EggGroupSumOrderByAggregateInput } from "../inputs/EggGroupSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EggGroupOrderByWithAggregationInput", {})
export class EggGroupOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EggGroupCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EggGroupCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EggGroupAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EggGroupAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EggGroupMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EggGroupMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EggGroupMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EggGroupMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EggGroupSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EggGroupSumOrderByAggregateInput | undefined;
}
