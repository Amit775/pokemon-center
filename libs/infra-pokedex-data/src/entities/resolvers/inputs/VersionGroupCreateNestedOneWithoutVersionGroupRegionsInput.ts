import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateOrConnectWithoutVersionGroupRegionsInput } from "../inputs/VersionGroupCreateOrConnectWithoutVersionGroupRegionsInput";
import { VersionGroupCreateWithoutVersionGroupRegionsInput } from "../inputs/VersionGroupCreateWithoutVersionGroupRegionsInput";
import { VersionGroupWhereUniqueInput } from "../inputs/VersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupCreateNestedOneWithoutVersionGroupRegionsInput", {})
export class VersionGroupCreateNestedOneWithoutVersionGroupRegionsInput {
  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutVersionGroupRegionsInput, {
    nullable: true
  })
  create?: VersionGroupCreateWithoutVersionGroupRegionsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupCreateOrConnectWithoutVersionGroupRegionsInput, {
    nullable: true
  })
  connectOrCreate?: VersionGroupCreateOrConnectWithoutVersionGroupRegionsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionGroupWhereUniqueInput | undefined;
}
