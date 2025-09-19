import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MoveBattleStyle } from "../../../models/MoveBattleStyle";
import { Nature } from "../../../models/Nature";
import { NatureBattleStylePreference } from "../../../models/NatureBattleStylePreference";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NatureBattleStylePreference)
export class NatureBattleStylePreferenceRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Nature, {
    nullable: false
  })
  async nature(@TypeGraphQL.Root() natureBattleStylePreference: NatureBattleStylePreference, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Nature> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findUniqueOrThrow({
      where: {
        nature_id: natureBattleStylePreference.nature_id,
      },
    }).nature({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => MoveBattleStyle, {
    nullable: false
  })
  async battleStyle(@TypeGraphQL.Root() natureBattleStylePreference: NatureBattleStylePreference, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<MoveBattleStyle> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findUniqueOrThrow({
      where: {
        nature_id: natureBattleStylePreference.nature_id,
      },
    }).battleStyle({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
