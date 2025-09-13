import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { PokemonMoveMethods } from "../../../models/PokemonMoveMethods";
import { VersionGroupPokemonMoveMethods } from "../../../models/VersionGroupPokemonMoveMethods";
import { VersionGroups } from "../../../models/VersionGroups";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroupPokemonMoveMethods)
export class VersionGroupPokemonMoveMethodsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => VersionGroups, {
    nullable: false
  })
  async versionGroup(@TypeGraphQL.Root() versionGroupPokemonMoveMethods: VersionGroupPokemonMoveMethods, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<VersionGroups> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.findUniqueOrThrow({
      where: {
        version_group_id: versionGroupPokemonMoveMethods.version_group_id,
      },
    }).versionGroup({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => PokemonMoveMethods, {
    nullable: false
  })
  async moveMethod(@TypeGraphQL.Root() versionGroupPokemonMoveMethods: VersionGroupPokemonMoveMethods, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<PokemonMoveMethods> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.findUniqueOrThrow({
      where: {
        version_group_id: versionGroupPokemonMoveMethods.version_group_id,
      },
    }).moveMethod({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
