import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCountGenerationsArgs } from "./args/RegionCountGenerationsArgs";
import { RegionCountLocationsArgs } from "./args/RegionCountLocationsArgs";
import { RegionCountPokedexesArgs } from "./args/RegionCountPokedexesArgs";
import { RegionCountVersionGroupsArgs } from "./args/RegionCountVersionGroupsArgs";

@TypeGraphQL.ObjectType("RegionCount", {})
export class RegionCount {
  generations!: number;
  locations!: number;
  pokedexes!: number;
  versionGroups!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "generations",
    nullable: false
  })
  getGenerations(@TypeGraphQL.Root() root: RegionCount, @TypeGraphQL.Args() args: RegionCountGenerationsArgs): number {
    return root.generations;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "locations",
    nullable: false
  })
  getLocations(@TypeGraphQL.Root() root: RegionCount, @TypeGraphQL.Args() args: RegionCountLocationsArgs): number {
    return root.locations;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "pokedexes",
    nullable: false
  })
  getPokedexes(@TypeGraphQL.Root() root: RegionCount, @TypeGraphQL.Args() args: RegionCountPokedexesArgs): number {
    return root.pokedexes;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "versionGroups",
    nullable: false
  })
  getVersionGroups(@TypeGraphQL.Root() root: RegionCount, @TypeGraphQL.Args() args: RegionCountVersionGroupsArgs): number {
    return root.versionGroups;
  }
}
