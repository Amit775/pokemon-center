import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NaturesAvgOrderByAggregateInput } from "../inputs/NaturesAvgOrderByAggregateInput";
import { NaturesCountOrderByAggregateInput } from "../inputs/NaturesCountOrderByAggregateInput";
import { NaturesMaxOrderByAggregateInput } from "../inputs/NaturesMaxOrderByAggregateInput";
import { NaturesMinOrderByAggregateInput } from "../inputs/NaturesMinOrderByAggregateInput";
import { NaturesSumOrderByAggregateInput } from "../inputs/NaturesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("NaturesOrderByWithAggregationInput", {})
export class NaturesOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => NaturesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: NaturesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NaturesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: NaturesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NaturesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: NaturesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NaturesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: NaturesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NaturesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: NaturesSumOrderByAggregateInput | undefined;
}
