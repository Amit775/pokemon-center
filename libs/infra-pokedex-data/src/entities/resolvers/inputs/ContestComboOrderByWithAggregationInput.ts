import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestComboAvgOrderByAggregateInput } from "../inputs/ContestComboAvgOrderByAggregateInput";
import { ContestComboCountOrderByAggregateInput } from "../inputs/ContestComboCountOrderByAggregateInput";
import { ContestComboMaxOrderByAggregateInput } from "../inputs/ContestComboMaxOrderByAggregateInput";
import { ContestComboMinOrderByAggregateInput } from "../inputs/ContestComboMinOrderByAggregateInput";
import { ContestComboSumOrderByAggregateInput } from "../inputs/ContestComboSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ContestComboOrderByWithAggregationInput", {})
export class ContestComboOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  first_move_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  second_move_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ContestComboCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ContestComboCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestComboAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ContestComboAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestComboMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ContestComboMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestComboMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ContestComboMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestComboSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ContestComboSumOrderByAggregateInput | undefined;
}
