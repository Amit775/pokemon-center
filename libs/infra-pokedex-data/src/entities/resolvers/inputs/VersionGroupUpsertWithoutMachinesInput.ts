import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupCreateWithoutMachinesInput } from "../inputs/VersionGroupCreateWithoutMachinesInput";
import { VersionGroupUpdateWithoutMachinesInput } from "../inputs/VersionGroupUpdateWithoutMachinesInput";
import { VersionGroupWhereInput } from "../inputs/VersionGroupWhereInput";

@TypeGraphQL.InputType("VersionGroupUpsertWithoutMachinesInput", {})
export class VersionGroupUpsertWithoutMachinesInput {
  @TypeGraphQL.Field(_type => VersionGroupUpdateWithoutMachinesInput, {
    nullable: false
  })
  update!: VersionGroupUpdateWithoutMachinesInput;

  @TypeGraphQL.Field(_type => VersionGroupCreateWithoutMachinesInput, {
    nullable: false
  })
  create!: VersionGroupCreateWithoutMachinesInput;

  @TypeGraphQL.Field(_type => VersionGroupWhereInput, {
    nullable: true
  })
  where?: VersionGroupWhereInput | undefined;
}
