import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnPokedexesRegionArgs } from "./args/CreateManyAndReturnPokedexesRegionArgs";
import { Regions } from "../../models/Regions";

@TypeGraphQL.ObjectType("CreateManyAndReturnPokedexes", {})
export class CreateManyAndReturnPokedexes {
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

  region!: Regions | null;

  @TypeGraphQL.Field(_type => Regions, {
    name: "region",
    nullable: true
  })
  getRegion(@TypeGraphQL.Root() root: CreateManyAndReturnPokedexes, @TypeGraphQL.Args() args: CreateManyAndReturnPokedexesRegionArgs): Regions | null {
    return root.region;
  }
}
