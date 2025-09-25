import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateNatureBattleStylePreferenceArgs } from "./args/AggregateNatureBattleStylePreferenceArgs";
import { FindFirstNatureBattleStylePreferenceArgs } from "./args/FindFirstNatureBattleStylePreferenceArgs";
import { FindFirstNatureBattleStylePreferenceOrThrowArgs } from "./args/FindFirstNatureBattleStylePreferenceOrThrowArgs";
import { FindManyNatureBattleStylePreferenceArgs } from "./args/FindManyNatureBattleStylePreferenceArgs";
import { FindUniqueNatureBattleStylePreferenceArgs } from "./args/FindUniqueNatureBattleStylePreferenceArgs";
import { FindUniqueNatureBattleStylePreferenceOrThrowArgs } from "./args/FindUniqueNatureBattleStylePreferenceOrThrowArgs";
import { GroupByNatureBattleStylePreferenceArgs } from "./args/GroupByNatureBattleStylePreferenceArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { NatureBattleStylePreference } from "../../../models/NatureBattleStylePreference";
import { AggregateNatureBattleStylePreference } from "../../outputs/AggregateNatureBattleStylePreference";
import { NatureBattleStylePreferenceGroupBy } from "../../outputs/NatureBattleStylePreferenceGroupBy";

@TypeGraphQL.Resolver(_of => NatureBattleStylePreference)
export class NatureBattleStylePreferenceCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateNatureBattleStylePreference, {
    nullable: false
  })
  async aggregateNatureBattleStylePreference(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateNatureBattleStylePreferenceArgs): Promise<AggregateNatureBattleStylePreference> {
    return getPrismaFromContext(ctx).natureBattleStylePreferences.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => NatureBattleStylePreference, {
    nullable: true
  })
  async findFirstNatureBattleStylePreference(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstNatureBattleStylePreferenceArgs): Promise<NatureBattleStylePreference | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => NatureBattleStylePreference, {
    nullable: true
  })
  async findFirstNatureBattleStylePreferenceOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstNatureBattleStylePreferenceOrThrowArgs): Promise<NatureBattleStylePreference | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [NatureBattleStylePreference], {
    nullable: false
  })
  async natureBattleStylePreferences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyNatureBattleStylePreferenceArgs): Promise<NatureBattleStylePreference[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => NatureBattleStylePreference, {
    nullable: true
  })
  async natureBattleStylePreference(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueNatureBattleStylePreferenceArgs): Promise<NatureBattleStylePreference | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => NatureBattleStylePreference, {
    nullable: true
  })
  async getNatureBattleStylePreference(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueNatureBattleStylePreferenceOrThrowArgs): Promise<NatureBattleStylePreference | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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