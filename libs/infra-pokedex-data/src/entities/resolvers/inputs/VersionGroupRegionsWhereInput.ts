import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { RegionsRelationFilter } from "../inputs/RegionsRelationFilter";
import { VersionGroupsRelationFilter } from "../inputs/VersionGroupsRelationFilter";

@TypeGraphQL.InputType("VersionGroupRegionsWhereInput", {})
export class VersionGroupRegionsWhereInput {
  @TypeGraphQL.Field(_type => [VersionGroupRegionsWhereInput], {
    nullable: true
  })
  AND?: VersionGroupRegionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionsWhereInput], {
    nullable: true
  })
  OR?: VersionGroupRegionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionsWhereInput], {
    nullable: true
  })
  NOT?: VersionGroupRegionsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  version_group_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  region_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsRelationFilter, {
    nullable: true
  })
  versionGroup?: VersionGroupsRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RegionsRelationFilter, {
    nullable: true
  })
  region?: RegionsRelationFilter | undefined;
}
