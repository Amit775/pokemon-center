import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateManyGenerationInputEnvelope } from "../inputs/VersionGroupsCreateManyGenerationInputEnvelope";
import { VersionGroupsCreateOrConnectWithoutGenerationInput } from "../inputs/VersionGroupsCreateOrConnectWithoutGenerationInput";
import { VersionGroupsCreateWithoutGenerationInput } from "../inputs/VersionGroupsCreateWithoutGenerationInput";
import { VersionGroupsScalarWhereInput } from "../inputs/VersionGroupsScalarWhereInput";
import { VersionGroupsUpdateManyWithWhereWithoutGenerationInput } from "../inputs/VersionGroupsUpdateManyWithWhereWithoutGenerationInput";
import { VersionGroupsUpdateWithWhereUniqueWithoutGenerationInput } from "../inputs/VersionGroupsUpdateWithWhereUniqueWithoutGenerationInput";
import { VersionGroupsUpsertWithWhereUniqueWithoutGenerationInput } from "../inputs/VersionGroupsUpsertWithWhereUniqueWithoutGenerationInput";
import { VersionGroupsWhereUniqueInput } from "../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupsUpdateManyWithoutGenerationNestedInput", {})
export class VersionGroupsUpdateManyWithoutGenerationNestedInput {
  @TypeGraphQL.Field(_type => [VersionGroupsCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: VersionGroupsCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupsCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: VersionGroupsCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupsUpsertWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  upsert?: VersionGroupsUpsertWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: VersionGroupsCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupsWhereUniqueInput], {
    nullable: true
  })
  set?: VersionGroupsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: VersionGroupsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupsWhereUniqueInput], {
    nullable: true
  })
  delete?: VersionGroupsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupsWhereUniqueInput], {
    nullable: true
  })
  connect?: VersionGroupsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupsUpdateWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  update?: VersionGroupsUpdateWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupsUpdateManyWithWhereWithoutGenerationInput], {
    nullable: true
  })
  updateMany?: VersionGroupsUpdateManyWithWhereWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VersionGroupsScalarWhereInput[] | undefined;
}
