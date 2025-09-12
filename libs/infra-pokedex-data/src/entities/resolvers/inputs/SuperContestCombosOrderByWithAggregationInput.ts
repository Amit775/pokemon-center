import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestCombosAvgOrderByAggregateInput } from "../inputs/SuperContestCombosAvgOrderByAggregateInput";
import { SuperContestCombosCountOrderByAggregateInput } from "../inputs/SuperContestCombosCountOrderByAggregateInput";
import { SuperContestCombosMaxOrderByAggregateInput } from "../inputs/SuperContestCombosMaxOrderByAggregateInput";
import { SuperContestCombosMinOrderByAggregateInput } from "../inputs/SuperContestCombosMinOrderByAggregateInput";
import { SuperContestCombosSumOrderByAggregateInput } from "../inputs/SuperContestCombosSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SuperContestCombosOrderByWithAggregationInput", {})
export class SuperContestCombosOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  first_move_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  second_move_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SuperContestCombosCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SuperContestCombosCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestCombosAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SuperContestCombosAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestCombosMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SuperContestCombosMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestCombosMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SuperContestCombosMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestCombosSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SuperContestCombosSumOrderByAggregateInput | undefined;
}
