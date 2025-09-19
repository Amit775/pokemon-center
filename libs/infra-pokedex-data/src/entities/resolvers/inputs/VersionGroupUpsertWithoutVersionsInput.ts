import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateWithoutVersionsInput } from "../inputs/VersionGroupCreateWithoutVersionsInput";
import { VersionGroupUpdateWithoutVersionsInput } from "../inputs/VersionGroupUpdateWithoutVersionsInput";
import { VersionGroupWhereInput } from "../inputs/VersionGroupWhereInput";

@TypeGraphQL.InputType("VersionGroupUpsertWithoutVersionsInput", {})
export class VersionGroupUpsertWithoutVersionsInput {
  @TypeGraphQL.Field(_type => VersionGroupUpdateWithoutVersionsInput, {
    nullable: false
  })
  update!: VersionGroupUpdateWithoutVersionsInput;

  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutVersionsInput, {
    nullable: false
  })
  create!: VersionGroupCreateWithoutVersionsInput;

  @TypeGraphQL.Field(_type => VersionGroupWhereInput, {
    nullable: true
  })
  where?: VersionGroupWhereInput | undefined;
}
