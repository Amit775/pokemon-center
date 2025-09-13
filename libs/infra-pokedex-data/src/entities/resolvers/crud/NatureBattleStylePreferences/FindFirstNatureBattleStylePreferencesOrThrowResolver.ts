import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstNatureBattleStylePreferencesOrThrowArgs } from "./args/FindFirstNatureBattleStylePreferencesOrThrowArgs";
import { NatureBattleStylePreferences } from "../../../models/NatureBattleStylePreferences";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NatureBattleStylePreferences)
export class FindFirstNatureBattleStylePreferencesOrThrowResolver {
  @TypeGraphQL.Query(_returns => NatureBattleStylePreferences, {
    nullable: true
  })
  async findFirstNatureBattleStylePreferencesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstNatureBattleStylePreferencesOrThrowArgs): Promise<NatureBattleStylePreferences | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
