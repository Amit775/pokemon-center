import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachinesCreateManyVersionGroupInputEnvelope } from "../inputs/MachinesCreateManyVersionGroupInputEnvelope";
import { MachinesCreateOrConnectWithoutVersionGroupInput } from "../inputs/MachinesCreateOrConnectWithoutVersionGroupInput";
import { MachinesCreateWithoutVersionGroupInput } from "../inputs/MachinesCreateWithoutVersionGroupInput";
import { MachinesWhereUniqueInput } from "../inputs/MachinesWhereUniqueInput";

@TypeGraphQL.InputType("MachinesCreateNestedManyWithoutVersionGroupInput", {})
export class MachinesCreateNestedManyWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => [MachinesCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: MachinesCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: MachinesCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => MachinesCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: MachinesCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MachinesWhereUniqueInput], {
    nullable: true
  })
  connect?: MachinesWhereUniqueInput[] | undefined;
}
