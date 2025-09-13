import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemsCreateNestedOneWithoutMachinesInput } from "../inputs/ItemsCreateNestedOneWithoutMachinesInput";
import { VersionGroupsCreateNestedOneWithoutMachinesInput } from "../inputs/VersionGroupsCreateNestedOneWithoutMachinesInput";

@TypeGraphQL.InputType("MachinesCreateWithoutMoveInput", {})
export class MachinesCreateWithoutMoveInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  machine_number!: number;

  @TypeGraphQL.Field(_type => VersionGroupsCreateNestedOneWithoutMachinesInput, {
    nullable: false
  })
  versionGroup!: VersionGroupsCreateNestedOneWithoutMachinesInput;

  @TypeGraphQL.Field(_type => ItemsCreateNestedOneWithoutMachinesInput, {
    nullable: false
  })
  item!: ItemsCreateNestedOneWithoutMachinesInput;
}
