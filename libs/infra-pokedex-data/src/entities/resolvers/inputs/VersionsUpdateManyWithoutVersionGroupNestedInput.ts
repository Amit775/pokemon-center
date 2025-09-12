import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsCreateManyVersionGroupInputEnvelope } from "../inputs/VersionsCreateManyVersionGroupInputEnvelope";
import { VersionsCreateOrConnectWithoutVersionGroupInput } from "../inputs/VersionsCreateOrConnectWithoutVersionGroupInput";
import { VersionsCreateWithoutVersionGroupInput } from "../inputs/VersionsCreateWithoutVersionGroupInput";
import { VersionsScalarWhereInput } from "../inputs/VersionsScalarWhereInput";
import { VersionsUpdateManyWithWhereWithoutVersionGroupInput } from "../inputs/VersionsUpdateManyWithWhereWithoutVersionGroupInput";
import { VersionsUpdateWithWhereUniqueWithoutVersionGroupInput } from "../inputs/VersionsUpdateWithWhereUniqueWithoutVersionGroupInput";
import { VersionsUpsertWithWhereUniqueWithoutVersionGroupInput } from "../inputs/VersionsUpsertWithWhereUniqueWithoutVersionGroupInput";
import { VersionsWhereUniqueInput } from "../inputs/VersionsWhereUniqueInput";

@TypeGraphQL.InputType("VersionsUpdateManyWithoutVersionGroupNestedInput", {})
export class VersionsUpdateManyWithoutVersionGroupNestedInput {
  @TypeGraphQL.Field(_type => [VersionsCreateWithoutVersionGroupInput], {
    nullable: true
  })
  create?: VersionsCreateWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionsCreateOrConnectWithoutVersionGroupInput], {
    nullable: true
  })
  connectOrCreate?: VersionsCreateOrConnectWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionsUpsertWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  upsert?: VersionsUpsertWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionsCreateManyVersionGroupInputEnvelope, {
    nullable: true
  })
  createMany?: VersionsCreateManyVersionGroupInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VersionsWhereUniqueInput], {
    nullable: true
  })
  set?: VersionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: VersionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionsWhereUniqueInput], {
    nullable: true
  })
  delete?: VersionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionsWhereUniqueInput], {
    nullable: true
  })
  connect?: VersionsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionsUpdateWithWhereUniqueWithoutVersionGroupInput], {
    nullable: true
  })
  update?: VersionsUpdateWithWhereUniqueWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionsUpdateManyWithWhereWithoutVersionGroupInput], {
    nullable: true
  })
  updateMany?: VersionsUpdateManyWithWhereWithoutVersionGroupInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VersionsScalarWhereInput[] | undefined;
}
