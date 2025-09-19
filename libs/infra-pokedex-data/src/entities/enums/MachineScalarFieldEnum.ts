import * as TypeGraphQL from "type-graphql";

export enum MachineScalarFieldEnum {
  machine_number = "machine_number",
  version_group_id = "version_group_id",
  item_id = "item_id",
  move_id = "move_id"
}
TypeGraphQL.registerEnumType(MachineScalarFieldEnum, {
  name: "MachineScalarFieldEnum",
  description: undefined,
});
