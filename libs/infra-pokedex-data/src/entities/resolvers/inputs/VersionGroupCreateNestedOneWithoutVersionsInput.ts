import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateOrConnectWithoutVersionsInput } from "../inputs/VersionGroupCreateOrConnectWithoutVersionsInput";
import { VersionGroupCreateWithoutVersionsInput } from "../inputs/VersionGroupCreateWithoutVersionsInput";
import { VersionGroupWhereUniqueInput } from "../inputs/VersionGroupWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupCreateNestedOneWithoutVersionsInput", {})
export class VersionGroupCreateNestedOneWithoutVersionsInput {
  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutVersionsInput, {
    nullable: true
  })
  create?: VersionGroupCreateWithoutVersionsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupCreateOrConnectWithoutVersionsInput, {
    nullable: true
  })
  connectOrCreate?: VersionGroupCreateOrConnectWithoutVersionsInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionGroupWhereUniqueInput | undefined;
}
