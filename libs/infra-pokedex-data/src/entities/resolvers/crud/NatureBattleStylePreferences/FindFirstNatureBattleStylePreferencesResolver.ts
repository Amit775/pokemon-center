import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstNatureBattleStylePreferencesArgs } from "./args/FindFirstNatureBattleStylePreferencesArgs";
import { NatureBattleStylePreferences } from "../../../models/NatureBattleStylePreferences";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NatureBattleStylePreferences)
export class FindFirstNatureBattleStylePreferencesResolver {
  @TypeGraphQL.Query(_returns => NatureBattleStylePreferences, {
    nullable: true
  })
  async findFirstNatureBattleStylePreferences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstNatureBattleStylePreferencesArgs): Promise<NatureBattleStylePreferences | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
