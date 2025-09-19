import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { PokemonMoveMethod } from "../../../models/PokemonMoveMethod";
import { VersionGroup } from "../../../models/VersionGroup";
import { VersionGroupPokemonMoveMethod } from "../../../models/VersionGroupPokemonMoveMethod";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroupPokemonMoveMethod)
export class VersionGroupPokemonMoveMethodRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => VersionGroup, {
    nullable: false
  })
  async versionGroup(@TypeGraphQL.Root() versionGroupPokemonMoveMethod: VersionGroupPokemonMoveMethod, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<VersionGroup> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.findUniqueOrThrow({
      where: {
        version_group_id: versionGroupPokemonMoveMethod.version_group_id,
      },
    }).versionGroup({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => PokemonMoveMethod, {
    nullable: false
  })
  async moveMethod(@TypeGraphQL.Root() versionGroupPokemonMoveMethod: VersionGroupPokemonMoveMethod, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<PokemonMoveMethod> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.findUniqueOrThrow({
      where: {
        version_group_id: versionGroupPokemonMoveMethod.version_group_id,
      },
    }).moveMethod({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
