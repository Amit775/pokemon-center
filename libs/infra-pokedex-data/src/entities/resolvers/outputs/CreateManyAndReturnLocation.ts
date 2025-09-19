import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnLocationRegionArgs } from "./args/CreateManyAndReturnLocationRegionArgs";
import { Region } from "../../models/Region";

@TypeGraphQL.ObjectType("CreateManyAndReturnLocation", {})
export class CreateManyAndReturnLocation {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  region_id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  region!: Region | null;

  @TypeGraphQL.Field(_type => Region, {
    name: "region",
    nullable: true
  })
  getRegion(@TypeGraphQL.Root() root: CreateManyAndReturnLocation, @TypeGraphQL.Args() args: CreateManyAndReturnLocationRegionArgs): Region | null {
    return root.region;
  }
}
