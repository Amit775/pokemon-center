import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaStatChangesAvgOrderByAggregateInput } from "../inputs/MoveMetaStatChangesAvgOrderByAggregateInput";
import { MoveMetaStatChangesCountOrderByAggregateInput } from "../inputs/MoveMetaStatChangesCountOrderByAggregateInput";
import { MoveMetaStatChangesMaxOrderByAggregateInput } from "../inputs/MoveMetaStatChangesMaxOrderByAggregateInput";
import { MoveMetaStatChangesMinOrderByAggregateInput } from "../inputs/MoveMetaStatChangesMinOrderByAggregateInput";
import { MoveMetaStatChangesSumOrderByAggregateInput } from "../inputs/MoveMetaStatChangesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MoveMetaStatChangesOrderByWithAggregationInput", {})
export class MoveMetaStatChangesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  move_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stat_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  change?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MoveMetaStatChangesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MoveMetaStatChangesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MoveMetaStatChangesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MoveMetaStatChangesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MoveMetaStatChangesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MoveMetaStatChangesSumOrderByAggregateInput | undefined;
}
