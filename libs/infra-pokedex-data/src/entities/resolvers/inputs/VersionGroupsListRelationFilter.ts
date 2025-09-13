import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsWhereInput } from "../inputs/VersionGroupsWhereInput";

@TypeGraphQL.InputType("VersionGroupsListRelationFilter", {})
export class VersionGroupsListRelationFilter {
  @TypeGraphQL.Field(_type => VersionGroupsWhereInput, {
    nullable: true
  })
  every?: VersionGroupsWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsWhereInput, {
    nullable: true
  })
  some?: VersionGroupsWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsWhereInput, {
    nullable: true
  })
  none?: VersionGroupsWhereInput | undefined;
}
