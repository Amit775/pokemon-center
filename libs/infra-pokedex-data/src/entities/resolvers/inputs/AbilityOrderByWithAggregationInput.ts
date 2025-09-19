import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AbilityAvgOrderByAggregateInput } from "../inputs/AbilityAvgOrderByAggregateInput";
import { AbilityCountOrderByAggregateInput } from "../inputs/AbilityCountOrderByAggregateInput";
import { AbilityMaxOrderByAggregateInput } from "../inputs/AbilityMaxOrderByAggregateInput";
import { AbilityMinOrderByAggregateInput } from "../inputs/AbilityMinOrderByAggregateInput";
import { AbilitySumOrderByAggregateInput } from "../inputs/AbilitySumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AbilityOrderByWithAggregationInput", {})
export class AbilityOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_main_series?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AbilityCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AbilityCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AbilityAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AbilityAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AbilityMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AbilityMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AbilityMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AbilityMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AbilitySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AbilitySumOrderByAggregateInput | undefined;
}
