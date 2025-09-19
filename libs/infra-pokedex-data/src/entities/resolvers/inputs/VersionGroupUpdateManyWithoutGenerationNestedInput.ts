import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateManyGenerationInputEnvelope } from "../inputs/VersionGroupCreateManyGenerationInputEnvelope";
import { VersionGroupCreateOrConnectWithoutGenerationInput } from "../inputs/VersionGroupCreateOrConnectWithoutGenerationInput";
import { VersionGroupCreateWithoutGenerationInput } from "../inputs/VersionGroupCreateWithoutGenerationInput";
import { VersionGroupScalarWhereInput } from "../inputs/VersionGroupScalarWhereInput";
import { VersionGroupUpdateManyWithWhereWithoutGenerationInput } from "../inputs/VersionGroupUpdateManyWithWhereWithoutGenerationInput";
import { VersionGroupUpdateWithWhereUniqueWithoutGenerationInput } from "../inputs/VersionGroupUpdateWithWhereUniqueWithoutGenerationInput";
import { VersionGroupUpsertWithWhereUniqueWithoutGenerationInput } from "../inputs/VersionGroupUpsertWithWhereUniqueWithoutGenerationInput";
import { VersionGroupWhereUniqueInput } from "../inputs/VersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupUpdateManyWithoutGenerationNestedInput", {})
export class VersionGroupUpdateManyWithoutGenerationNestedInput {
  @TypeGraphQL.Field(_type => [VersionGroupCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: VersionGroupCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: VersionGroupCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupUpsertWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  upsert?: VersionGroupUpsertWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionGroupCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: VersionGroupCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupWhereUniqueInput], {
    nullable: true
  })
  set?: VersionGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupWhereUniqueInput], {
    nullable: true
  })
  disconnect?: VersionGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupWhereUniqueInput], {
    nullable: true
  })
  delete?: VersionGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupWhereUniqueInput], {
    nullable: true
  })
  connect?: VersionGroupWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupUpdateWithWhereUniqueWithoutGenerationInput], {
    nullable: true
  })
  update?: VersionGroupUpdateWithWhereUniqueWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupUpdateManyWithWhereWithoutGenerationInput], {
    nullable: true
  })
  updateMany?: VersionGroupUpdateManyWithWhereWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VersionGroupScalarWhereInput[] | undefined;
}
