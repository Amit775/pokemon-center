import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateNestedOneWithoutMachinesInput } from "../inputs/ItemCreateNestedOneWithoutMachinesInput";
import { MoveCreateNestedOneWithoutMachinesInput } from "../inputs/MoveCreateNestedOneWithoutMachinesInput";
import { VersionGroupCreateNestedOneWithoutMachinesInput } from "../inputs/VersionGroupCreateNestedOneWithoutMachinesInput";

@TypeGraphQL.InputType("MachineCreateInput", {})
export class MachineCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  machine_number!: number;

  @TypeGraphQL.Field(_type => VersionGroupCreateNestedOneWithoutMachinesInput, {
    nullable: false
  })
  versionGroup!: VersionGroupCreateNestedOneWithoutMachinesInput;

  @TypeGraphQL.Field(_type => ItemCreateNestedOneWithoutMachinesInput, {
    nullable: false
  })
  item!: ItemCreateNestedOneWithoutMachinesInput;

  @TypeGraphQL.Field(_type => MoveCreateNestedOneWithoutMachinesInput, {
    nullable: false
  })
  move!: MoveCreateNestedOneWithoutMachinesInput;
}
