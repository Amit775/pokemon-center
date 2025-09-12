import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateWithoutVersionGroupRegionsInput } from "../inputs/VersionGroupsCreateWithoutVersionGroupRegionsInput";
import { VersionGroupsUpdateWithoutVersionGroupRegionsInput } from "../inputs/VersionGroupsUpdateWithoutVersionGroupRegionsInput";
import { VersionGroupsWhereInput } from "../inputs/VersionGroupsWhereInput";

@TypeGraphQL.InputType("VersionGroupsUpsertWithoutVersionGroupRegionsInput", {})
export class VersionGroupsUpsertWithoutVersionGroupRegionsInput {
  @TypeGraphQL.Field(_type => VersionGroupsUpdateWithoutVersionGroupRegionsInput, {
    nullable: false
  })
  update!: VersionGroupsUpdateWithoutVersionGroupRegionsInput;

  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutVersionGroupRegionsInput, {
    nullable: false
  })
  create!: VersionGroupsCreateWithoutVersionGroupRegionsInput;

  @TypeGraphQL.Field(_type => VersionGroupsWhereInput, {
    nullable: true
  })
  where?: VersionGroupsWhereInput | undefined;
}
