import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsUpdateWithoutVersionGroupRegionsInput } from "../inputs/VersionGroupsUpdateWithoutVersionGroupRegionsInput";
import { VersionGroupsWhereInput } from "../inputs/VersionGroupsWhereInput";

@TypeGraphQL.InputType("VersionGroupsUpdateToOneWithWhereWithoutVersionGroupRegionsInput", {})
export class VersionGroupsUpdateToOneWithWhereWithoutVersionGroupRegionsInput {
  @TypeGraphQL.Field(_type => VersionGroupsWhereInput, {
    nullable: true
  })
  where?: VersionGroupsWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateWithoutVersionGroupRegionsInput, {
    nullable: false
  })
  data!: VersionGroupsUpdateWithoutVersionGroupRegionsInput;
}
