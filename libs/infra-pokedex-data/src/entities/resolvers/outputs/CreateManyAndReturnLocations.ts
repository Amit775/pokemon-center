import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnLocationsRegionArgs } from "./args/CreateManyAndReturnLocationsRegionArgs";
import { Regions } from "../../models/Regions";

@TypeGraphQL.ObjectType("CreateManyAndReturnLocations", {})
export class CreateManyAndReturnLocations {
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

  region!: Regions | null;

  @TypeGraphQL.Field(_type => Regions, {
    name: "region",
    nullable: true
  })
  getRegion(@TypeGraphQL.Root() root: CreateManyAndReturnLocations, @TypeGraphQL.Args() args: CreateManyAndReturnLocationsRegionArgs): Regions | null {
    return root.region;
  }
}
