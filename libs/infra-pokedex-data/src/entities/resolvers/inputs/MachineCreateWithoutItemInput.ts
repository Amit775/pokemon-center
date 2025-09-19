import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateNestedOneWithoutMachinesInput } from "../inputs/MoveCreateNestedOneWithoutMachinesInput";
import { VersionGroupCreateNestedOneWithoutMachinesInput } from "../inputs/VersionGroupCreateNestedOneWithoutMachinesInput";

@TypeGraphQL.InputType("MachineCreateWithoutItemInput", {})
export class MachineCreateWithoutItemInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  machine_number!: number;

  @TypeGraphQL.Field(_type => VersionGroupCreateNestedOneWithoutMachinesInput, {
    nullable: false
  })
  versionGroup!: VersionGroupCreateNestedOneWithoutMachinesInput;

  @TypeGraphQL.Field(_type => MoveCreateNestedOneWithoutMachinesInput, {
    nullable: false
  })
  move!: MoveCreateNestedOneWithoutMachinesInput;
}
