import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MachinesCreateManyVersionGroupInputEnvelope } from "../inputs/MachinesCreateManyVersionGroupInputEnvelope";
import { MachinesCreateOrConnectWithoutVersionGroupInput } from "../inputs/MachinesCreateOrConnectWithoutVersionGroupInput";
import { MachinesCreateWithoutVersionGroupInput } from "../inputs/MachinesCreateWithoutVersionGroupInput";
import { MachinesScalarWhereInput } from "../inputs/MachinesScalarWhereInput";
import { MachinesUpdateManyWithWhereWithoutVersionGroupInput } from "../inputs/MachinesUpdateManyWithWhereWithoutVersionGroupInput";
import { MachinesUpdateWithWhereUniqueWithoutVersionGroupInput } from "../inputs/MachinesUpdateWithWhereUniqueWithoutVersionGroupInput";
import { MachinesUpsertWithWhereUniqueWithoutVersionGroupInput } from "../inputs/MachinesUpsertWithWhereUniqueWithoutVersionGroupInput";
import { MachinesWhereUniqueInput } from "../inputs/MachinesWhereUniqueInput";

@TypeGraphQL.InputType("MachinesUpdateManyWithoutVersionGroupNestedInput", {})
export class MachinesUpdateManyWithoutVersionGroupNestedInput {
  @TypeGraphQL.Field(_type => [MachinesCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: MachinesCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: MachinesCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesUpsertWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  upsert?: MachinesUpsertWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => MachinesCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: MachinesCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MachinesWhereUniqueInput], {
    nullable: true
  })
  set?: MachinesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MachinesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesWhereUniqueInput], {
    nullable: true
  })
  delete?: MachinesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesWhereUniqueInput], {
    nullable: true
  })
  connect?: MachinesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesUpdateWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  update?: MachinesUpdateWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesUpdateManyWithWhereWithoutVersionGroupInput], {
    nullable: true
  })
  updateMany?: MachinesUpdateManyWithWhereWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [MachinesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MachinesScalarWhereInput[] | undefined;
}
