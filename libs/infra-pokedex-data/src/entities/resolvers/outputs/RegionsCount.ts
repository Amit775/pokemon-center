import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsCountGenerationsArgs } from "./args/RegionsCountGenerationsArgs";
import { RegionsCountLocationsArgs } from "./args/RegionsCountLocationsArgs";
import { RegionsCountPokedexesArgs } from "./args/RegionsCountPokedexesArgs";
import { RegionsCountVersionGroupsArgs } from "./args/RegionsCountVersionGroupsArgs";

@TypeGraphQL.ObjectType("RegionsCount", {})
export class RegionsCount {
  generations!: number;
  locations!: number;
  pokedexes!: number;
  versionGroups!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "generations",
    nullable: false
  })
  getGenerations(@TypeGraphQL.Root() root: RegionsCount, @TypeGraphQL.Args() args: RegionsCountGenerationsArgs): number {
    return root.generations;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "locations",
    nullable: false
  })
  getLocations(@TypeGraphQL.Root() root: RegionsCount, @TypeGraphQL.Args() args: RegionsCountLocationsArgs): number {
    return root.locations;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "pokedexes",
    nullable: false
  })
  getPokedexes(@TypeGraphQL.Root() root: RegionsCount, @TypeGraphQL.Args() args: RegionsCountPokedexesArgs): number {
    return root.pokedexes;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "versionGroups",
    nullable: false
  })
  getVersionGroups(@TypeGraphQL.Root() root: RegionsCount, @TypeGraphQL.Args() args: RegionsCountVersionGroupsArgs): number {
    return root.versionGroups;
  }
}
