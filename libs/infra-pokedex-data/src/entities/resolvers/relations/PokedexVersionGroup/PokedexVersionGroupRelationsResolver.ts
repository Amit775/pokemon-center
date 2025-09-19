import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Pokedex } from "../../../models/Pokedex";
import { PokedexVersionGroup } from "../../../models/PokedexVersionGroup";
import { VersionGroup } from "../../../models/VersionGroup";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokedexVersionGroup)
export class PokedexVersionGroupRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Pokedex, {
    nullable: false
  })
  async pokedex(@TypeGraphQL.Root() pokedexVersionGroup: PokedexVersionGroup, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Pokedex> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.findUniqueOrThrow({
      where: {
        pokedex_id: pokedexVersionGroup.pokedex_id,
      },
    }).pokedex({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => VersionGroup, {
    nullable: false
  })
  async versionGroup(@TypeGraphQL.Root() pokedexVersionGroup: PokedexVersionGroup, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<VersionGroup> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.findUniqueOrThrow({
      where: {
        pokedex_id: pokedexVersionGroup.pokedex_id,
      },
    }).versionGroup({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
