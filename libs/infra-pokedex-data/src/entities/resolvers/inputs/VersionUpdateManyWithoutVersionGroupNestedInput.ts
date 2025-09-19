import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionCreateManyVersionGroupInputEnvelope } from "../inputs/VersionCreateManyVersionGroupInputEnvelope";
import { VersionCreateOrConnectWithoutVersionGroupInput } from "../inputs/VersionCreateOrConnectWithoutVersionGroupInput";
import { VersionCreateWithoutVersionGroupInput } from "../inputs/VersionCreateWithoutVersionGroupInput";
import { VersionScalarWhereInput } from "../inputs/VersionScalarWhereInput";
import { VersionUpdateManyWithWhereWithoutVersionGroupInput } from "../inputs/VersionUpdateManyWithWhereWithoutVersionGroupInput";
import { VersionUpdateWithWhereUniqueWithoutVersionGroupInput } from "../inputs/VersionUpdateWithWhereUniqueWithoutVersionGroupInput";
import { VersionUpsertWithWhereUniqueWithoutVersionGroupInput } from "../inputs/VersionUpsertWithWhereUniqueWithoutVersionGroupInput";
import { VersionWhereUniqueInput } from "../inputs/VersionWhereUniqueInput";

@TypeGraphQL.InputType("VersionUpdateManyWithoutVersionGroupNestedInput", {})
export class VersionUpdateManyWithoutVersionGroupNestedInput {
  @TypeGraphQL.Field(_type => [VersionCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: VersionCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: VersionCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionUpsertWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  upsert?: VersionUpsertWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: VersionCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VersionWhereUniqueInput], {
    nullable: true
  })
  set?: VersionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: VersionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionWhereUniqueInput], {
    nullable: true
  })
  delete?: VersionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionWhereUniqueInput], {
    nullable: true
  })
  connect?: VersionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionUpdateWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  update?: VersionUpdateWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionUpdateManyWithWhereWithoutVersionGroupInput], {
    nullable: true
  })
  updateMany?: VersionUpdateManyWithWhereWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VersionScalarWhereInput[] | undefined;
}
