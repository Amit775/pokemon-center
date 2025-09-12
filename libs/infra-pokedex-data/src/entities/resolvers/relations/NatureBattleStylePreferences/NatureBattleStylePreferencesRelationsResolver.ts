import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MoveBattleStyles } from "../../../models/MoveBattleStyles";
import { NatureBattleStylePreferences } from "../../../models/NatureBattleStylePreferences";
import { Natures } from "../../../models/Natures";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NatureBattleStylePreferences)
export class NatureBattleStylePreferencesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Natures, {
    nullable: false
  })
  async nature(@TypeGraphQL.Root() natureBattleStylePreferences: NatureBattleStylePreferences, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Natures> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findUniqueOrThrow({
      where: {
        nature_id: natureBattleStylePreferences.nature_id,
      },
    }).nature({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => MoveBattleStyles, {
    nullable: false
  })
  async battleStyle(@TypeGraphQL.Root() natureBattleStylePreferences: NatureBattleStylePreferences, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<MoveBattleStyles> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findUniqueOrThrow({
      where: {
        nature_id: natureBattleStylePreferences.nature_id,
      },
    }).battleStyle({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
