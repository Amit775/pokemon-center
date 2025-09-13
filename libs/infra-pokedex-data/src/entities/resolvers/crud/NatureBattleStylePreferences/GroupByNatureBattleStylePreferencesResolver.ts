import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByNatureBattleStylePreferencesArgs } from "./args/GroupByNatureBattleStylePreferencesArgs";
import { NatureBattleStylePreferences } from "../../../models/NatureBattleStylePreferences";
import { NatureBattleStylePreferencesGroupBy } from "../../outputs/NatureBattleStylePreferencesGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NatureBattleStylePreferences)
export class GroupByNatureBattleStylePreferencesResolver {
  @TypeGraphQL.Query(_returns => [NatureBattleStylePreferencesGroupBy], {
    nullable: false
  })
  async groupByNatureBattleStylePreferences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByNatureBattleStylePreferencesArgs): Promise<NatureBattleStylePreferencesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
