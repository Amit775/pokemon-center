import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupUpdateWithoutVersionsInput } from "../inputs/VersionGroupUpdateWithoutVersionsInput";
import { VersionGroupWhereInput } from "../inputs/VersionGroupWhereInput";

@TypeGraphQL.InputType("VersionGroupUpdateToOneWithWhereWithoutVersionsInput", {})
export class VersionGroupUpdateToOneWithWhereWithoutVersionsInput {
  @TypeGraphQL.Field(_type => VersionGroupWhereInput, {
    nullable: true
  })
  where?: VersionGroupWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupUpdateWithoutVersionsInput, {
    nullable: false
  })
  data!: VersionGroupUpdateWithoutVersionsInput;
}
