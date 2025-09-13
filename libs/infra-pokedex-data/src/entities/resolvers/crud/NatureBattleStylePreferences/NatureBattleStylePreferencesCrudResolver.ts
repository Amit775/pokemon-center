import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateNatureBattleStylePreferencesArgs } from "./args/AggregateNatureBattleStylePreferencesArgs";
import { FindFirstNatureBattleStylePreferencesArgs } from "./args/FindFirstNatureBattleStylePreferencesArgs";
import { FindFirstNatureBattleStylePreferencesOrThrowArgs } from "./args/FindFirstNatureBattleStylePreferencesOrThrowArgs";
import { FindManyNatureBattleStylePreferencesArgs } from "./args/FindManyNatureBattleStylePreferencesArgs";
import { FindUniqueNatureBattleStylePreferencesArgs } from "./args/FindUniqueNatureBattleStylePreferencesArgs";
import { FindUniqueNatureBattleStylePreferencesOrThrowArgs } from "./args/FindUniqueNatureBattleStylePreferencesOrThrowArgs";
import { GroupByNatureBattleStylePreferencesArgs } from "./args/GroupByNatureBattleStylePreferencesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { NatureBattleStylePreferences } from "../../../models/NatureBattleStylePreferences";
import { AggregateNatureBattleStylePreferences } from "../../outputs/AggregateNatureBattleStylePreferences";
import { NatureBattleStylePreferencesGroupBy } from "../../outputs/NatureBattleStylePreferencesGroupBy";

@TypeGraphQL.Resolver(_of => NatureBattleStylePreferences)
export class NatureBattleStylePreferencesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateNatureBattleStylePreferences, {
    nullable: false
  })
  async aggregateNatureBattleStylePreferences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateNatureBattleStylePreferencesArgs): Promise<AggregateNatureBattleStylePreferences> {
    return getPrismaFromContext(ctx).natureBattleStylePreferences.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

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

  @TypeGraphQL.Query(_returns => [NatureBattleStylePreferences], {
    nullable: false
  })
  async findManyNatureBattleStylePreferences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyNatureBattleStylePreferencesArgs): Promise<NatureBattleStylePreferences[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => NatureBattleStylePreferences, {
    nullable: true
  })
  async findUniqueNatureBattleStylePreferences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueNatureBattleStylePreferencesArgs): Promise<NatureBattleStylePreferences | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => NatureBattleStylePreferences, {
    nullable: true
  })
  async findUniqueNatureBattleStylePreferencesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueNatureBattleStylePreferencesOrThrowArgs): Promise<NatureBattleStylePreferences | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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