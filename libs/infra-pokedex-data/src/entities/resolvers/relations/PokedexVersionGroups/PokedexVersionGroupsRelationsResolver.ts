import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { PokedexVersionGroups } from "../../../models/PokedexVersionGroups";
import { Pokedexes } from "../../../models/Pokedexes";
import { VersionGroups } from "../../../models/VersionGroups";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokedexVersionGroups)
export class PokedexVersionGroupsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Pokedexes, {
    nullable: false
  })
  async pokedex(@TypeGraphQL.Root() pokedexVersionGroups: PokedexVersionGroups, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Pokedexes> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.findUniqueOrThrow({
      where: {
        pokedex_id: pokedexVersionGroups.pokedex_id,
      },
    }).pokedex({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => VersionGroups, {
    nullable: false
  })
  async versionGroup(@TypeGraphQL.Root() pokedexVersionGroups: PokedexVersionGroups, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<VersionGroups> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.findUniqueOrThrow({
      where: {
        pokedex_id: pokedexVersionGroups.pokedex_id,
      },
    }).versionGroup({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
