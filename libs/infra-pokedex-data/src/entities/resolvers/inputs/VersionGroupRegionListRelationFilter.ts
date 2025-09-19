import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupRegionWhereInput } from "../inputs/VersionGroupRegionWhereInput";

@TypeGraphQL.InputType("VersionGroupRegionListRelationFilter", {})
export class VersionGroupRegionListRelationFilter {
  @TypeGraphQL.Field(_type => VersionGroupRegionWhereInput, {
    nullable: true
  })
  every?: VersionGroupRegionWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionWhereInput, {
    nullable: true
  })
  some?: VersionGroupRegionWhereInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRegionWhereInput, {
    nullable: true
  })
  none?: VersionGroupRegionWhereInput | undefined;
}
