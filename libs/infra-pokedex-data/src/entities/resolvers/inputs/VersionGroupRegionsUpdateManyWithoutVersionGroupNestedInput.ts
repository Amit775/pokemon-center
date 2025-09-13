import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionsCreateManyVersionGroupInputEnvelope } from "../inputs/VersionGroupRegionsCreateManyVersionGroupInputEnvelope";
import { VersionGroupRegionsCreateOrConnectWithoutVersionGroupInput } from "../inputs/VersionGroupRegionsCreateOrConnectWithoutVersionGroupInput";
import { VersionGroupRegionsCreateWithoutVersionGroupInput } from "../inputs/VersionGroupRegionsCreateWithoutVersionGroupInput";
import { VersionGroupRegionsScalarWhereInput } from "../inputs/VersionGroupRegionsScalarWhereInput";
import { VersionGroupRegionsUpdateManyWithWhereWithoutVersionGroupInput } from "../inputs/VersionGroupRegionsUpdateManyWithWhereWithoutVersionGroupInput";
import { VersionGroupRegionsUpdateWithWhereUniqueWithoutVersionGroupInput } from "../inputs/VersionGroupRegionsUpdateWithWhereUniqueWithoutVersionGroupInput";
import { VersionGroupRegionsUpsertWithWhereUniqueWithoutVersionGroupInput } from "../inputs/VersionGroupRegionsUpsertWithWhereUniqueWithoutVersionGroupInput";
import { VersionGroupRegionsWhereUniqueInput } from "../inputs/VersionGroupRegionsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupRegionsUpdateManyWithoutVersionGroupNestedInput", {})
export class VersionGroupRegionsUpdateManyWithoutVersionGroupNestedInput {
  @TypeGraphQL.Field(_type => [VersionGroupRegionsCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: VersionGroupRegionsCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionsCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: VersionGroupRegionsCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionsUpsertWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  upsert?: VersionGroupRegionsUpsertWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionsCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: VersionGroupRegionsCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionsWhereUniqueInput], {
    nullable: true
  })
  set?: VersionGroupRegionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: VersionGroupRegionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionsWhereUniqueInput], {
    nullable: true
  })
  delete?: VersionGroupRegionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionsWhereUniqueInput], {
    nullable: true
  })
  connect?: VersionGroupRegionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionsUpdateWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  update?: VersionGroupRegionsUpdateWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionsUpdateManyWithWhereWithoutVersionGroupInput], {
    nullable: true
  })
  updateMany?: VersionGroupRegionsUpdateManyWithWhereWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VersionGroupRegionsScalarWhereInput[] | undefined;
}
