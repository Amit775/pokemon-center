import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Regions } from "../models/Regions";
import { VersionGroups } from "../models/VersionGroups";

@TypeGraphQL.ObjectType("VersionGroupRegions", {})
export class VersionGroupRegions {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_group_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  region_id!: number;

  versionGroup?: VersionGroups;

  region?: Regions;
}
