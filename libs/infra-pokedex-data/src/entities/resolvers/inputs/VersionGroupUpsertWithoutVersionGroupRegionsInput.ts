import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateWithoutVersionGroupRegionsInput } from "../inputs/VersionGroupCreateWithoutVersionGroupRegionsInput";
import { VersionGroupUpdateWithoutVersionGroupRegionsInput } from "../inputs/VersionGroupUpdateWithoutVersionGroupRegionsInput";
import { VersionGroupWhereInput } from "../inputs/VersionGroupWhereInput";

@TypeGraphQL.InputType("VersionGroupUpsertWithoutVersionGroupRegionsInput", {})
export class VersionGroupUpsertWithoutVersionGroupRegionsInput {
  @TypeGraphQL.Field(_type => VersionGroupUpdateWithoutVersionGroupRegionsInput, {
    nullable: false
  })
  update!: VersionGroupUpdateWithoutVersionGroupRegionsInput;

  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutVersionGroupRegionsInput, {
    nullable: false
  })
  create!: VersionGroupCreateWithoutVersionGroupRegionsInput;

  @TypeGraphQL.Field(_type => VersionGroupWhereInput, {
    nullable: true
  })
  where?: VersionGroupWhereInput | undefined;
}
