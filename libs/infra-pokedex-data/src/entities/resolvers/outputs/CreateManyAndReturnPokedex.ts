import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnPokedexRegionArgs } from "./args/CreateManyAndReturnPokedexRegionArgs";
import { Region } from "../../models/Region";

@TypeGraphQL.ObjectType("CreateManyAndReturnPokedex", {})
export class CreateManyAndReturnPokedex {
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

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  is_main_series!: number;

  region!: Region | null;

  @TypeGraphQL.Field(_type => Region, {
    name: "region",
    nullable: true
  })
  getRegion(@TypeGraphQL.Root() root: CreateManyAndReturnPokedex, @TypeGraphQL.Args() args: CreateManyAndReturnPokedexRegionArgs): Region | null {
    return root.region;
  }
}
