import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachineCreateManyVersionGroupInputEnvelope } from "../inputs/MachineCreateManyVersionGroupInputEnvelope";
import { MachineCreateOrConnectWithoutVersionGroupInput } from "../inputs/MachineCreateOrConnectWithoutVersionGroupInput";
import { MachineCreateWithoutVersionGroupInput } from "../inputs/MachineCreateWithoutVersionGroupInput";
import { MachineScalarWhereInput } from "../inputs/MachineScalarWhereInput";
import { MachineUpdateManyWithWhereWithoutVersionGroupInput } from "../inputs/MachineUpdateManyWithWhereWithoutVersionGroupInput";
import { MachineUpdateWithWhereUniqueWithoutVersionGroupInput } from "../inputs/MachineUpdateWithWhereUniqueWithoutVersionGroupInput";
import { MachineUpsertWithWhereUniqueWithoutVersionGroupInput } from "../inputs/MachineUpsertWithWhereUniqueWithoutVersionGroupInput";
import { MachineWhereUniqueInput } from "../inputs/MachineWhereUniqueInput";

@TypeGraphQL.InputType("MachineUpdateManyWithoutVersionGroupNestedInput", {})
export class MachineUpdateManyWithoutVersionGroupNestedInput {
  @TypeGraphQL.Field(_type => [MachineCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: MachineCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: MachineCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineUpsertWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  upsert?: MachineUpsertWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => MachineCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: MachineCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MachineWhereUniqueInput], {
    nullable: true
  })
  set?: MachineWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MachineWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineWhereUniqueInput], {
    nullable: true
  })
  delete?: MachineWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineWhereUniqueInput], {
    nullable: true
  })
  connect?: MachineWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineUpdateWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  update?: MachineUpdateWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineUpdateManyWithWhereWithoutVersionGroupInput], {
    nullable: true
  })
  updateMany?: MachineUpdateManyWithWhereWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachineScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MachineScalarWhereInput[] | undefined;
}
