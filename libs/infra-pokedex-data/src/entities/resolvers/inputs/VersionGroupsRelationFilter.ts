import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsWhereInput } from "../inputs/VersionGroupsWhereInput";

@TypeGraphQL.InputType("VersionGroupsRelationFilter", {})
export class VersionGroupsRelationFilter {
  @TypeGraphQL.Field(_type => VersionGroupsWhereInput, {
    nullable: true
  })
  is?: VersionGroupsWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsWhereInput, {
    nullable: true
  })
  isNot?: VersionGroupsWhereInput | undefined;
}
