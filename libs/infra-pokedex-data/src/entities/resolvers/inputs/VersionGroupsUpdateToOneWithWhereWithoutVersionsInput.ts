import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsUpdateWithoutVersionsInput } from "../inputs/VersionGroupsUpdateWithoutVersionsInput";
import { VersionGroupsWhereInput } from "../inputs/VersionGroupsWhereInput";

@TypeGraphQL.InputType("VersionGroupsUpdateToOneWithWhereWithoutVersionsInput", {})
export class VersionGroupsUpdateToOneWithWhereWithoutVersionsInput {
  @TypeGraphQL.Field(_type => VersionGroupsWhereInput, {
    nullable: true
  })
  where?: VersionGroupsWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateWithoutVersionsInput, {
    nullable: false
  })
  data!: VersionGroupsUpdateWithoutVersionsInput;
}
