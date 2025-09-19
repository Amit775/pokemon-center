import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionOrderByWithRelationInput } from "../inputs/RegionOrderByWithRelationInput";
import { VersionGroupOrderByWithRelationInput } from "../inputs/VersionGroupOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VersionGroupRegionOrderByWithRelationInput", {})
export class VersionGroupRegionOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_group_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  region_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => VersionGroupOrderByWithRelationInput, {
    nullable: true
  })
  versionGroup?: VersionGroupOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => RegionOrderByWithRelationInput, {
    nullable: true
  })
  region?: RegionOrderByWithRelationInput | undefined;
}
