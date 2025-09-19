import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupUpdateWithoutVersionGroupRegionsInput } from "../inputs/VersionGroupUpdateWithoutVersionGroupRegionsInput";
import { VersionGroupWhereInput } from "../inputs/VersionGroupWhereInput";

@TypeGraphQL.InputType("VersionGroupUpdateToOneWithWhereWithoutVersionGroupRegionsInput", {})
export class VersionGroupUpdateToOneWithWhereWithoutVersionGroupRegionsInput {
  @TypeGraphQL.Field(_type => VersionGroupWhereInput, {
    nullable: true
  })
  where?: VersionGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpdateWithoutVersionGroupRegionsInput, {
    nullable: false
  })
  data!: VersionGroupUpdateWithoutVersionGroupRegionsInput;
}
