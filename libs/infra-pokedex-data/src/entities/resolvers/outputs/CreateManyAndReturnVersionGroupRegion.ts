import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Region } from "../../models/Region";
import { VersionGroup } from "../../models/VersionGroup";

@TypeGraphQL.ObjectType("CreateManyAndReturnVersionGroupRegion", {})
export class CreateManyAndReturnVersionGroupRegion {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  version_group_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  region_id!: number;

  @TypeGraphQL.Field(_type => VersionGroup, {
    nullable: false
  })
  versionGroup!: VersionGroup;

  @TypeGraphQL.Field(_type => Region, {
    nullable: false
  })
  region!: Region;
}
