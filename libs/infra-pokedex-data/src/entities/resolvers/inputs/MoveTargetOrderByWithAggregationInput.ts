import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveTargetAvgOrderByAggregateInput } from "../inputs/MoveTargetAvgOrderByAggregateInput";
import { MoveTargetCountOrderByAggregateInput } from "../inputs/MoveTargetCountOrderByAggregateInput";
import { MoveTargetMaxOrderByAggregateInput } from "../inputs/MoveTargetMaxOrderByAggregateInput";
import { MoveTargetMinOrderByAggregateInput } from "../inputs/MoveTargetMinOrderByAggregateInput";
import { MoveTargetSumOrderByAggregateInput } from "../inputs/MoveTargetSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MoveTargetOrderByWithAggregationInput", {})
export class MoveTargetOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MoveTargetCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MoveTargetCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveTargetAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MoveTargetAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveTargetMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MoveTargetMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveTargetMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MoveTargetMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveTargetSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MoveTargetSumOrderByAggregateInput | undefined;
}
