import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MoveBattleStyles } from "../../../models/MoveBattleStyles";
import { NatureBattleStylePreferences } from "../../../models/NatureBattleStylePreferences";
import { MoveBattleStylesNaturePreferencesArgs } from "./args/MoveBattleStylesNaturePreferencesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveBattleStyles)
export class MoveBattleStylesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [NatureBattleStylePreferences], {
    nullable: false
  })
  async naturePreferences(@TypeGraphQL.Root() moveBattleStyles: MoveBattleStyles, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveBattleStylesNaturePreferencesArgs): Promise<NatureBattleStylePreferences[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.findUniqueOrThrow({
      where: {
        id: moveBattleStyles.id,
      },
    }).naturePreferences({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
