import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachineCreateWithoutVersionGroupInput } from "../inputs/MachineCreateWithoutVersionGroupInput";
import { MachineWhereUniqueInput } from "../inputs/MachineWhereUniqueInput";

@TypeGraphQL.InputType("MachineCreateOrConnectWithoutVersionGroupInput", {})
export class MachineCreateOrConnectWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => MachineWhereUniqueInput, {
    nullable: false
  })
  where!: MachineWhereUniqueInput;

  @TypeGraphQL.Field(_type => MachineCreateWithoutVersionGroupInput, {
    nullable: false
  })
  create!: MachineCreateWithoutVersionGroupInput;
}
