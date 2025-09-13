import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateManyGenerationInputEnvelope } from "../inputs/VersionGroupsCreateManyGenerationInputEnvelope";
import { VersionGroupsCreateOrConnectWithoutGenerationInput } from "../inputs/VersionGroupsCreateOrConnectWithoutGenerationInput";
import { VersionGroupsCreateWithoutGenerationInput } from "../inputs/VersionGroupsCreateWithoutGenerationInput";
import { VersionGroupsWhereUniqueInput } from "../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupsCreateNestedManyWithoutGenerationInput", {})
export class VersionGroupsCreateNestedManyWithoutGenerationInput {
  @TypeGraphQL.Field(_type => [VersionGroupsCreateWithoutGenerationInput], {
    nullable: true
  })
  create?: VersionGroupsCreateWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupsCreateOrConnectWithoutGenerationInput], {
    nullable: true
  })
  connectOrCreate?: VersionGroupsCreateOrConnectWithoutGenerationInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsCreateManyGenerationInputEnvelope, {
    nullable: true
  })
  createMany?: VersionGroupsCreateManyGenerationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupsWhereUniqueInput], {
    nullable: true
  })
  connect?: VersionGroupsWhereUniqueInput[] | undefined;
}
