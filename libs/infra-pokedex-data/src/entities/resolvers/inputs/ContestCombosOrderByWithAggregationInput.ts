import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestCombosAvgOrderByAggregateInput } from "../inputs/ContestCombosAvgOrderByAggregateInput";
import { ContestCombosCountOrderByAggregateInput } from "../inputs/ContestCombosCountOrderByAggregateInput";
import { ContestCombosMaxOrderByAggregateInput } from "../inputs/ContestCombosMaxOrderByAggregateInput";
import { ContestCombosMinOrderByAggregateInput } from "../inputs/ContestCombosMinOrderByAggregateInput";
import { ContestCombosSumOrderByAggregateInput } from "../inputs/ContestCombosSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ContestCombosOrderByWithAggregationInput", {})
export class ContestCombosOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  first_move_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  second_move_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ContestCombosCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ContestCombosCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestCombosAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ContestCombosAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestCombosMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ContestCombosMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestCombosMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ContestCombosMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContestCombosSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ContestCombosSumOrderByAggregateInput | undefined;
}
