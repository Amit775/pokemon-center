import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionsWhereInput } from "../inputs/VersionGroupRegionsWhereInput";

@TypeGraphQL.InputType("VersionGroupRegionsListRelationFilter", {})
export class VersionGroupRegionsListRelationFilter {
  @TypeGraphQL.Field(_type => VersionGroupRegionsWhereInput, {
    nullable: true
  })
  every?: VersionGroupRegionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionsWhereInput, {
    nullable: true
  })
  some?: VersionGroupRegionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionsWhereInput, {
    nullable: true
  })
  none?: VersionGroupRegionsWhereInput | undefined;
}
