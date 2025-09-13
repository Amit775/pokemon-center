import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionsCreateWithoutRegionInput } from "../inputs/VersionGroupRegionsCreateWithoutRegionInput";
import { VersionGroupRegionsWhereUniqueInput } from "../inputs/VersionGroupRegionsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupRegionsCreateOrConnectWithoutRegionInput", {})
export class VersionGroupRegionsCreateOrConnectWithoutRegionInput {
  @TypeGraphQL.Field(_type => VersionGroupRegionsWhereUniqueInput, {
    nullable: false
  })
  where!: VersionGroupRegionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionGroupRegionsCreateWithoutRegionInput, {
    nullable: false
  })
  create!: VersionGroupRegionsCreateWithoutRegionInput;
}
