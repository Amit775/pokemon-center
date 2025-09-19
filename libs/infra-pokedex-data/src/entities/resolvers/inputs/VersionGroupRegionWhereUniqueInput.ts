import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { RegionRelationFilter } from "../inputs/RegionRelationFilter";
import { VersionGroupRegionWhereInput } from "../inputs/VersionGroupRegionWhereInput";
import { VersionGroupRelationFilter } from "../inputs/VersionGroupRelationFilter";

@TypeGraphQL.InputType("VersionGroupRegionWhereUniqueInput", {})
export class VersionGroupRegionWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  version_group_id?: number | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionWhereInput], {
    nullable: true
  })
  AND?: VersionGroupRegionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionWhereInput], {
    nullable: true
  })
  OR?: VersionGroupRegionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionGroupRegionWhereInput], {
    nullable: true
  })
  NOT?: VersionGroupRegionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  region_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => VersionGroupRelationFilter, {
    nullable: true
  })
  versionGroup?: VersionGroupRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RegionRelationFilter, {
    nullable: true
  })
  region?: RegionRelationFilter | undefined;
}
