import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachineCreateManyVersionGroupInputEnvelope } from "../inputs/MachineCreateManyVersionGroupInputEnvelope";
import { MachineCreateOrConnectWithoutVersionGroupInput } from "../inputs/MachineCreateOrConnectWithoutVersionGroupInput";
import { MachineCreateWithoutVersionGroupInput } from "../inputs/MachineCreateWithoutVersionGroupInput";
import { MachineWhereUniqueInput } from "../inputs/MachineWhereUniqueInput";

@TypeGraphQL.InputType("MachineCreateNestedManyWithoutVersionGroupInput", {})
export class MachineCreateNestedManyWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => [MachineCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: MachineCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: MachineCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => MachineCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: MachineCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MachineWhereUniqueInput], {
    nullable: true
  })
  connect?: MachineWhereUniqueInput[] | undefined;
}
