import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveTargetsAvgOrderByAggregateInput } from "../inputs/MoveTargetsAvgOrderByAggregateInput";
import { MoveTargetsCountOrderByAggregateInput } from "../inputs/MoveTargetsCountOrderByAggregateInput";
import { MoveTargetsMaxOrderByAggregateInput } from "../inputs/MoveTargetsMaxOrderByAggregateInput";
import { MoveTargetsMinOrderByAggregateInput } from "../inputs/MoveTargetsMinOrderByAggregateInput";
import { MoveTargetsSumOrderByAggregateInput } from "../inputs/MoveTargetsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MoveTargetsOrderByWithAggregationInput", {})
export class MoveTargetsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MoveTargetsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MoveTargetsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveTargetsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MoveTargetsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveTargetsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MoveTargetsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveTargetsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MoveTargetsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveTargetsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MoveTargetsSumOrderByAggregateInput | undefined;
}
