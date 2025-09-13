import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsUpdateWithoutMachinesInput } from "../inputs/VersionGroupsUpdateWithoutMachinesInput";
import { VersionGroupsWhereInput } from "../inputs/VersionGroupsWhereInput";

@TypeGraphQL.InputType("VersionGroupsUpdateToOneWithWhereWithoutMachinesInput", {})
export class VersionGroupsUpdateToOneWithWhereWithoutMachinesInput {
  @TypeGraphQL.Field(_type => VersionGroupsWhereInput, {
    nullable: true
  })
  where?: VersionGroupsWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateWithoutMachinesInput, {
    nullable: false
  })
  data!: VersionGroupsUpdateWithoutMachinesInput;
}
