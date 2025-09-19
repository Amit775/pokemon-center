import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupUpdateWithoutMachinesInput } from "../inputs/VersionGroupUpdateWithoutMachinesInput";
import { VersionGroupWhereInput } from "../inputs/VersionGroupWhereInput";

@TypeGraphQL.InputType("VersionGroupUpdateToOneWithWhereWithoutMachinesInput", {})
export class VersionGroupUpdateToOneWithWhereWithoutMachinesInput {
  @TypeGraphQL.Field(_type => VersionGroupWhereInput, {
    nullable: true
  })
  where?: VersionGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpdateWithoutMachinesInput, {
    nullable: false
  })
  data!: VersionGroupUpdateWithoutMachinesInput;
}
