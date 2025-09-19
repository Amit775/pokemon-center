import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MoveBattleStyle } from "../../../models/MoveBattleStyle";
import { NatureBattleStylePreference } from "../../../models/NatureBattleStylePreference";
import { MoveBattleStyleNaturePreferencesArgs } from "./args/MoveBattleStyleNaturePreferencesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveBattleStyle)
export class MoveBattleStyleRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [NatureBattleStylePreference], {
    nullable: false
  })
  async naturePreferences(@TypeGraphQL.Root() moveBattleStyle: MoveBattleStyle, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveBattleStyleNaturePreferencesArgs): Promise<NatureBattleStylePreference[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.findUniqueOrThrow({
      where: {
        id: moveBattleStyle.id,
      },
    }).naturePreferences({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
