import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionCreateManyRegionInputEnvelope } from "../inputs/VersionGroupRegionCreateManyRegionInputEnvelope";
import { VersionGroupRegionCreateOrConnectWithoutRegionInput } from "../inputs/VersionGroupRegionCreateOrConnectWithoutRegionInput";
import { VersionGroupRegionCreateWithoutRegionInput } from "../inputs/VersionGroupRegionCreateWithoutRegionInput";
import { VersionGroupRegionScalarWhereInput } from "../inputs/VersionGroupRegionScalarWhereInput";
import { VersionGroupRegionUpdateManyWithWhereWithoutRegionInput } from "../inputs/VersionGroupRegionUpdateManyWithWhereWithoutRegionInput";
import { VersionGroupRegionUpdateWithWhereUniqueWithoutRegionInput } from "../inputs/VersionGroupRegionUpdateWithWhereUniqueWithoutRegionInput";
import { VersionGroupRegionUpsertWithWhereUniqueWithoutRegionInput } from "../inputs/VersionGroupRegionUpsertWithWhereUniqueWithoutRegionInput";
import { VersionGroupRegionWhereUniqueInput } from "../inputs/VersionGroupRegionWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupRegionUpdateManyWithoutRegionNestedInput", {})
export class VersionGroupRegionUpdateManyWithoutRegionNestedInput {
  @TypeGraphQL.Field(_type => [VersionGroupRegionCreateWithoutRegionInput], {
    nullable: true
  })
  create?: VersionGroupRegionCreateWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionCreateOrConnectWithoutRegionInput], {
    nullable: true
  })
  connectOrCreate?: VersionGroupRegionCreateOrConnectWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionUpsertWithWhereUniqueWithoutRegionInput], {
    nullable: true
  })
  upsert?: VersionGroupRegionUpsertWithWhereUniqueWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionCreateManyRegionInputEnvelope, {
    nullable: true
  })
  createMany?: VersionGroupRegionCreateManyRegionInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [VersionGroupRegionUpdateWithWhereUniqueWithoutRegionInput], {
    nullable: true
  })
  update?: VersionGroupRegionUpdateWithWhereUniqueWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionUpdateManyWithWhereWithoutRegionInput], {
    nullable: true
  })
  updateMany?: VersionGroupRegionUpdateManyWithWhereWithoutRegionInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VersionGroupRegionScalarWhereInput[] | undefined;
}
