import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateWithoutVersionsInput } from "../inputs/VersionGroupsCreateWithoutVersionsInput";
import { VersionGroupsUpdateWithoutVersionsInput } from "../inputs/VersionGroupsUpdateWithoutVersionsInput";
import { VersionGroupsWhereInput } from "../inputs/VersionGroupsWhereInput";

@TypeGraphQL.InputType("VersionGroupsUpsertWithoutVersionsInput", {})
export class VersionGroupsUpsertWithoutVersionsInput {
  @TypeGraphQL.Field(_type => VersionGroupsUpdateWithoutVersionsInput, {
    nullable: false
  })
  update!: VersionGroupsUpdateWithoutVersionsInput;

  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutVersionsInput, {
    nullable: false
  })
  create!: VersionGroupsCreateWithoutVersionsInput;

  @TypeGraphQL.Field(_type => VersionGroupsWhereInput, {
    nullable: true
  })
  where?: VersionGroupsWhereInput | undefined;
}
