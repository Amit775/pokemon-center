import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateWithoutMachinesInput } from "../inputs/VersionGroupsCreateWithoutMachinesInput";
import { VersionGroupsUpdateWithoutMachinesInput } from "../inputs/VersionGroupsUpdateWithoutMachinesInput";
import { VersionGroupsWhereInput } from "../inputs/VersionGroupsWhereInput";

@TypeGraphQL.InputType("VersionGroupsUpsertWithoutMachinesInput", {})
export class VersionGroupsUpsertWithoutMachinesInput {
  @TypeGraphQL.Field(_type => VersionGroupsUpdateWithoutMachinesInput, {
    nullable: false
  })
  update!: VersionGroupsUpdateWithoutMachinesInput;

  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutMachinesInput, {
    nullable: false
  })
  create!: VersionGroupsCreateWithoutMachinesInput;

  @TypeGraphQL.Field(_type => VersionGroupsWhereInput, {
    nullable: true
  })
  where?: VersionGroupsWhereInput | undefined;
}
