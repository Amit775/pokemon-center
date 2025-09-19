import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionCreateManyVersionGroupInputEnvelope } from "../inputs/VersionGroupRegionCreateManyVersionGroupInputEnvelope";
import { VersionGroupRegionCreateOrConnectWithoutVersionGroupInput } from "../inputs/VersionGroupRegionCreateOrConnectWithoutVersionGroupInput";
import { VersionGroupRegionCreateWithoutVersionGroupInput } from "../inputs/VersionGroupRegionCreateWithoutVersionGroupInput";
import { VersionGroupRegionScalarWhereInput } from "../inputs/VersionGroupRegionScalarWhereInput";
import { VersionGroupRegionUpdateManyWithWhereWithoutVersionGroupInput } from "../inputs/VersionGroupRegionUpdateManyWithWhereWithoutVersionGroupInput";
import { VersionGroupRegionUpdateWithWhereUniqueWithoutVersionGroupInput } from "../inputs/VersionGroupRegionUpdateWithWhereUniqueWithoutVersionGroupInput";
import { VersionGroupRegionUpsertWithWhereUniqueWithoutVersionGroupInput } from "../inputs/VersionGroupRegionUpsertWithWhereUniqueWithoutVersionGroupInput";
import { VersionGroupRegionWhereUniqueInput } from "../inputs/VersionGroupRegionWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupRegionUpdateManyWithoutVersionGroupNestedInput", {})
export class VersionGroupRegionUpdateManyWithoutVersionGroupNestedInput {
  @TypeGraphQL.Field(_type => [VersionGroupRegionCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: VersionGroupRegionCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: VersionGroupRegionCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionUpsertWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  upsert?: VersionGroupRegionUpsertWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: VersionGroupRegionCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionWhereUniqueInput], {
    nullable: true
  })
  set?: VersionGroupRegionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: VersionGroupRegionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionWhereUniqueInput], {
    nullable: true
  })
  delete?: VersionGroupRegionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionWhereUniqueInput], {
    nullable: true
  })
  connect?: VersionGroupRegionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionUpdateWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  update?: VersionGroupRegionUpdateWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionUpdateManyWithWhereWithoutVersionGroupInput], {
    nullable: true
  })
  updateMany?: VersionGroupRegionUpdateManyWithWhereWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VersionGroupRegionScalarWhereInput[] | undefined;
}
