import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureAvgOrderByAggregateInput } from "../inputs/NatureAvgOrderByAggregateInput";
import { NatureCountOrderByAggregateInput } from "../inputs/NatureCountOrderByAggregateInput";
import { NatureMaxOrderByAggregateInput } from "../inputs/NatureMaxOrderByAggregateInput";
import { NatureMinOrderByAggregateInput } from "../inputs/NatureMinOrderByAggregateInput";
import { NatureSumOrderByAggregateInput } from "../inputs/NatureSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("NatureOrderByWithAggregationInput", {})
export class NatureOrderByWithAggregationInput {
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
  decreased_stat_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  increased_stat_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  hates_flavor_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  likes_flavor_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  game_index?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => NatureCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: NatureCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NatureAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: NatureAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NatureMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: NatureMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NatureMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: NatureMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NatureSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: NatureSumOrderByAggregateInput | undefined;
}
