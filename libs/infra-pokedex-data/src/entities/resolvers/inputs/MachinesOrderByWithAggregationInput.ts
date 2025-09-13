import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachinesAvgOrderByAggregateInput } from "../inputs/MachinesAvgOrderByAggregateInput";
import { MachinesCountOrderByAggregateInput } from "../inputs/MachinesCountOrderByAggregateInput";
import { MachinesMaxOrderByAggregateInput } from "../inputs/MachinesMaxOrderByAggregateInput";
import { MachinesMinOrderByAggregateInput } from "../inputs/MachinesMinOrderByAggregateInput";
import { MachinesSumOrderByAggregateInput } from "../inputs/MachinesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MachinesOrderByWithAggregationInput", {})
export class MachinesOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => MachinesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MachinesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MachinesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MachinesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MachinesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MachinesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MachinesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MachinesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MachinesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MachinesSumOrderByAggregateInput | undefined;
}
