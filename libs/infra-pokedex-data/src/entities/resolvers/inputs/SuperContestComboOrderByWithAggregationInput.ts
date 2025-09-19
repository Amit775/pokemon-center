import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestComboAvgOrderByAggregateInput } from "../inputs/SuperContestComboAvgOrderByAggregateInput";
import { SuperContestComboCountOrderByAggregateInput } from "../inputs/SuperContestComboCountOrderByAggregateInput";
import { SuperContestComboMaxOrderByAggregateInput } from "../inputs/SuperContestComboMaxOrderByAggregateInput";
import { SuperContestComboMinOrderByAggregateInput } from "../inputs/SuperContestComboMinOrderByAggregateInput";
import { SuperContestComboSumOrderByAggregateInput } from "../inputs/SuperContestComboSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SuperContestComboOrderByWithAggregationInput", {})
export class SuperContestComboOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  first_move_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  second_move_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SuperContestComboCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SuperContestComboCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestComboAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SuperContestComboAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestComboMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SuperContestComboMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestComboMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SuperContestComboMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestComboSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SuperContestComboSumOrderByAggregateInput | undefined;
}
