import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionsCreateManyRegionInputEnvelope } from "../inputs/VersionGroupRegionsCreateManyRegionInputEnvelope";
import { VersionGroupRegionsCreateOrConnectWithoutRegionInput } from "../inputs/VersionGroupRegionsCreateOrConnectWithoutRegionInput";
import { VersionGroupRegionsCreateWithoutRegionInput } from "../inputs/VersionGroupRegionsCreateWithoutRegionInput";
import { VersionGroupRegionsScalarWhereInput } from "../inputs/VersionGroupRegionsScalarWhereInput";
import { VersionGroupRegionsUpdateManyWithWhereWithoutRegionInput } from "../inputs/VersionGroupRegionsUpdateManyWithWhereWithoutRegionInput";
import { VersionGroupRegionsUpdateWithWhereUniqueWithoutRegionInput } from "../inputs/VersionGroupRegionsUpdateWithWhereUniqueWithoutRegionInput";
import { VersionGroupRegionsUpsertWithWhereUniqueWithoutRegionInput } from "../inputs/VersionGroupRegionsUpsertWithWhereUniqueWithoutRegionInput";
import { VersionGroupRegionsWhereUniqueInput } from "../inputs/VersionGroupRegionsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupRegionsUpdateManyWithoutRegionNestedInput", {})
export class VersionGroupRegionsUpdateManyWithoutRegionNestedInput {
  @TypeGraphQL.Field(_type => [VersionGroupRegionsCreateWithoutRegionInput], {
    nullable: true
  })
  create?: VersionGroupRegionsCreateWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionsCreateOrConnectWithoutRegionInput], {
    nullable: true
  })
  connectOrCreate?: VersionGroupRegionsCreateOrConnectWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionsUpsertWithWhereUniqueWithoutRegionInput], {
    nullable: true
  })
  upsert?: VersionGroupRegionsUpsertWithWhereUniqueWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionsCreateManyRegionInputEnvelope, {
    nullable: true
  })
  createMany?: VersionGroupRegionsCreateManyRegionInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [VersionGroupRegionsUpdateWithWhereUniqueWithoutRegionInput], {
    nullable: true
  })
  update?: VersionGroupRegionsUpdateWithWhereUniqueWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionsUpdateManyWithWhereWithoutRegionInput], {
    nullable: true
  })
  updateMany?: VersionGroupRegionsUpdateManyWithWhereWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VersionGroupRegionsScalarWhereInput[] | undefined;
}
