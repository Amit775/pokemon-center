import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionsCreateWithoutVersionGroupInput } from "../inputs/VersionsCreateWithoutVersionGroupInput";
import { VersionsWhereUniqueInput } from "../inputs/VersionsWhereUniqueInput";

@TypeGraphQL.InputType("VersionsCreateOrConnectWithoutVersionGroupInput", {})
export class VersionsCreateOrConnectWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => VersionsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionsCreateWithoutVersionGroupInput, {
    nullable: false
  })
  create!: VersionsCreateWithoutVersionGroupInput;
}
