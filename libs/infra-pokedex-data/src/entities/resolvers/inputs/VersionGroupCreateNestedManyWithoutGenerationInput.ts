import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateManyGenerationInputEnvelope } from "../inputs/VersionGroupCreateManyGenerationInputEnvelope";
import { VersionGroupCreateOrConnectWithoutGenerationInput } from "../inputs/VersionGroupCreateOrConnectWithoutGenerationInput";
import { VersionGroupCreateWithoutGenerationInput } from "../inputs/VersionGroupCreateWithoutGenerationInput";
import { VersionGroupWhereUniqueInput } from "../inputs/VersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupCreateNestedManyWithoutGenerationInput", {})
export class VersionGroupCreateNestedManyWithoutGenerationInput {
  @TypeGraphQL.Field(_type => [VersionGroupCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: VersionGroupCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: VersionGroupCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionGroupCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: VersionGroupCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupWhereUniqueInput], {
    nullable: true
  })
  connect?: VersionGroupWhereUniqueInput[] | undefined;
}
