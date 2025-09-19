import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionCreateWithoutVersionGroupInput } from "../inputs/VersionCreateWithoutVersionGroupInput";
import { VersionWhereUniqueInput } from "../inputs/VersionWhereUniqueInput";

@TypeGraphQL.InputType("VersionCreateOrConnectWithoutVersionGroupInput", {})
export class VersionCreateOrConnectWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => VersionWhereUniqueInput, {
    nullable: false
  })
  where!: VersionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionCreateWithoutVersionGroupInput, {
    nullable: false
  })
  create!: VersionCreateWithoutVersionGroupInput;
}
