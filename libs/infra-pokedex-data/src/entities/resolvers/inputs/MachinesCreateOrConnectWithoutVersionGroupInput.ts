import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachinesCreateWithoutVersionGroupInput } from "../inputs/MachinesCreateWithoutVersionGroupInput";
import { MachinesWhereUniqueInput } from "../inputs/MachinesWhereUniqueInput";

@TypeGraphQL.InputType("MachinesCreateOrConnectWithoutVersionGroupInput", {})
export class MachinesCreateOrConnectWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => MachinesWhereUniqueInput, {
    nullable: false
  })
  where!: MachinesWhereUniqueInput;

  @TypeGraphQL.Field(_type => MachinesCreateWithoutVersionGroupInput, {
    nullable: false
  })
  create!: MachinesCreateWithoutVersionGroupInput;
}
