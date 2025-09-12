import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MachinesOrderByWithAggregationInput } from "../../../inputs/MachinesOrderByWithAggregationInput";
import { MachinesScalarWhereWithAggregatesInput } from "../../../inputs/MachinesScalarWhereWithAggregatesInput";
import { MachinesWhereInput } from "../../../inputs/MachinesWhereInput";
import { MachinesScalarFieldEnum } from "../../../../enums/MachinesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMachinesArgs {
  @TypeGraphQL.Field(_type => MachinesWhereInput, {
    nullable: true
  })
  where?: MachinesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MachinesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MachinesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"machine_number" | "version_group_id" | "item_id" | "move_id">;

  @TypeGraphQL.Field(_type => MachinesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MachinesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
