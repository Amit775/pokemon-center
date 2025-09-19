import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MachineOrderByWithRelationInput } from "../../../inputs/MachineOrderByWithRelationInput";
import { MachineWhereInput } from "../../../inputs/MachineWhereInput";
import { MachineWhereUniqueInput } from "../../../inputs/MachineWhereUniqueInput";
import { MachineScalarFieldEnum } from "../../../../enums/MachineScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class VersionGroupMachinesArgs {
  @TypeGraphQL.Field(_type => MachineWhereInput, {
    nullable: true
  })
  where?: MachineWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MachineOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MachineOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MachineWhereUniqueInput, {
    nullable: true
  })
  cursor?: MachineWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MachineScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"machine_number" | "version_group_id" | "item_id" | "move_id"> | undefined;
}
