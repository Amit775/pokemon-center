import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachineAvgOrderByAggregateInput } from "../inputs/MachineAvgOrderByAggregateInput";
import { MachineCountOrderByAggregateInput } from "../inputs/MachineCountOrderByAggregateInput";
import { MachineMaxOrderByAggregateInput } from "../inputs/MachineMaxOrderByAggregateInput";
import { MachineMinOrderByAggregateInput } from "../inputs/MachineMinOrderByAggregateInput";
import { MachineSumOrderByAggregateInput } from "../inputs/MachineSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MachineOrderByWithAggregationInput", {})
export class MachineOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  machine_number?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_group_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  item_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  move_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MachineCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MachineCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MachineAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MachineAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MachineMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MachineMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MachineMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MachineMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MachineSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MachineSumOrderByAggregateInput | undefined;
}
