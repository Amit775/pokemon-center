import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Generation } from "../../../models/Generation";
import { Location } from "../../../models/Location";
import { Pokedex } from "../../../models/Pokedex";
import { Region } from "../../../models/Region";
import { VersionGroupRegion } from "../../../models/VersionGroupRegion";
import { RegionGenerationsArgs } from "./args/RegionGenerationsArgs";
import { RegionLocationsArgs } from "./args/RegionLocationsArgs";
import { RegionPokedexesArgs } from "./args/RegionPokedexesArgs";
import { RegionVersionGroupsArgs } from "./args/RegionVersionGroupsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Region)
export class RegionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Generation], {
    nullable: false
  })
  async generations(@TypeGraphQL.Root() region: Region, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: RegionGenerationsArgs): Promise<Generation[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).regions.findUniqueOrThrow({
      where: {
        id: region.id,
      },
    }).generations({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Location], {
    nullable: false
  })
  async locations(@TypeGraphQL.Root() region: Region, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: RegionLocationsArgs): Promise<Location[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).regions.findUniqueOrThrow({
      where: {
        id: region.id,
      },
    }).locations({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Pokedex], {
    nullable: false
  })
  async pokedexes(@TypeGraphQL.Root() region: Region, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: RegionPokedexesArgs): Promise<Pokedex[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).regions.findUniqueOrThrow({
      where: {
        id: region.id,
      },
    }).pokedexes({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [VersionGroupRegion], {
    nullable: false
  })
  async versionGroups(@TypeGraphQL.Root() region: Region, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: RegionVersionGroupsArgs): Promise<VersionGroupRegion[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).regions.findUniqueOrThrow({
      where: {
        id: region.id,
      },
    }).versionGroups({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
