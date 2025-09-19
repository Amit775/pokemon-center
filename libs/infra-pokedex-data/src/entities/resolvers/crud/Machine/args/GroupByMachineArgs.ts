import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MachineOrderByWithAggregationInput } from "../../../inputs/MachineOrderByWithAggregationInput";
import { MachineScalarWhereWithAggregatesInput } from "../../../inputs/MachineScalarWhereWithAggregatesInput";
import { MachineWhereInput } from "../../../inputs/MachineWhereInput";
import { MachineScalarFieldEnum } from "../../../../enums/MachineScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMachineArgs {
  @TypeGraphQL.Field(_type => MachineWhereInput, {
    nullable: true
  })
  where?: MachineWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MachineOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MachineOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"machine_number" | "version_group_id" | "item_id" | "move_id">;

  @TypeGraphQL.Field(_type => MachineScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MachineScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
