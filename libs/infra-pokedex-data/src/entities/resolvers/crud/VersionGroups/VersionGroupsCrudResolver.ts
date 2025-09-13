import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateVersionGroupsArgs } from "./args/AggregateVersionGroupsArgs";
import { FindFirstVersionGroupsArgs } from "./args/FindFirstVersionGroupsArgs";
import { FindFirstVersionGroupsOrThrowArgs } from "./args/FindFirstVersionGroupsOrThrowArgs";
import { FindManyVersionGroupsArgs } from "./args/FindManyVersionGroupsArgs";
import { FindUniqueVersionGroupsArgs } from "./args/FindUniqueVersionGroupsArgs";
import { FindUniqueVersionGroupsOrThrowArgs } from "./args/FindUniqueVersionGroupsOrThrowArgs";
import { GroupByVersionGroupsArgs } from "./args/GroupByVersionGroupsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { VersionGroups } from "../../../models/VersionGroups";
import { AggregateVersionGroups } from "../../outputs/AggregateVersionGroups";
import { VersionGroupsGroupBy } from "../../outputs/VersionGroupsGroupBy";

@TypeGraphQL.Resolver(_of => VersionGroups)
export class VersionGroupsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateVersionGroups, {
    nullable: false
  })
  async aggregateVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVersionGroupsArgs): Promise<AggregateVersionGroups> {
    return getPrismaFromContext(ctx).versionGroups.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroups, {
    nullable: true
  })
  async findFirstVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVersionGroupsArgs): Promise<VersionGroups | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroups, {
    nullable: true
  })
  async findFirstVersionGroupsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVersionGroupsOrThrowArgs): Promise<VersionGroups | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [VersionGroups], {
    nullable: false
  })
  async findManyVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyVersionGroupsArgs): Promise<VersionGroups[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroups, {
    nullable: true
  })
  async findUniqueVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVersionGroupsArgs): Promise<VersionGroups | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroups, {
    nullable: true
  })
  async findUniqueVersionGroupsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVersionGroupsOrThrowArgs): Promise<VersionGroups | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [VersionGroupsGroupBy], {
    nullable: false
  })
  async groupByVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByVersionGroupsArgs): Promise<VersionGroupsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}