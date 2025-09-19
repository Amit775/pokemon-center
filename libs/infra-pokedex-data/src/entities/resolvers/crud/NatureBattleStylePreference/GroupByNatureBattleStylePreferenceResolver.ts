import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByNatureBattleStylePreferenceArgs } from "./args/GroupByNatureBattleStylePreferenceArgs";
import { NatureBattleStylePreference } from "../../../models/NatureBattleStylePreference";
import { NatureBattleStylePreferenceGroupBy } from "../../outputs/NatureBattleStylePreferenceGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NatureBattleStylePreference)
export class GroupByNatureBattleStylePreferenceResolver {
  @TypeGraphQL.Query(_returns => [NatureBattleStylePreferenceGroupBy], {
    nullable: false
  })
  async groupByNatureBattleStylePreference(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByNatureBattleStylePreferenceArgs): Promise<NatureBattleStylePreferenceGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
