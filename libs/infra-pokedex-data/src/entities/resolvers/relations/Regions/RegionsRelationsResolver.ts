import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Generations } from "../../../models/Generations";
import { Locations } from "../../../models/Locations";
import { Pokedexes } from "../../../models/Pokedexes";
import { Regions } from "../../../models/Regions";
import { VersionGroupRegions } from "../../../models/VersionGroupRegions";
import { RegionsGenerationsArgs } from "./args/RegionsGenerationsArgs";
import { RegionsLocationsArgs } from "./args/RegionsLocationsArgs";
import { RegionsPokedexesArgs } from "./args/RegionsPokedexesArgs";
import { RegionsVersionGroupsArgs } from "./args/RegionsVersionGroupsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Regions)
export class RegionsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Generations], {
    nullable: false
  })
  async generations(@TypeGraphQL.Root() regions: Regions, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: RegionsGenerationsArgs): Promise<Generations[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).regions.findUniqueOrThrow({
      where: {
        id: regions.id,
      },
    }).generations({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Locations], {
    nullable: false
  })
  async locations(@TypeGraphQL.Root() regions: Regions, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: RegionsLocationsArgs): Promise<Locations[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).regions.findUniqueOrThrow({
      where: {
        id: regions.id,
      },
    }).locations({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Pokedexes], {
    nullable: false
  })
  async pokedexes(@TypeGraphQL.Root() regions: Regions, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: RegionsPokedexesArgs): Promise<Pokedexes[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).regions.findUniqueOrThrow({
      where: {
        id: regions.id,
      },
    }).pokedexes({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [VersionGroupRegions], {
    nullable: false
  })
  async versionGroups(@TypeGraphQL.Root() regions: Regions, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: RegionsVersionGroupsArgs): Promise<VersionGroupRegions[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).regions.findUniqueOrThrow({
      where: {
        id: regions.id,
      },
    }).versionGroups({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
