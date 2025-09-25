import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateVersionGroupArgs } from "./args/AggregateVersionGroupArgs";
import { FindFirstVersionGroupArgs } from "./args/FindFirstVersionGroupArgs";
import { FindFirstVersionGroupOrThrowArgs } from "./args/FindFirstVersionGroupOrThrowArgs";
import { FindManyVersionGroupArgs } from "./args/FindManyVersionGroupArgs";
import { FindUniqueVersionGroupArgs } from "./args/FindUniqueVersionGroupArgs";
import { FindUniqueVersionGroupOrThrowArgs } from "./args/FindUniqueVersionGroupOrThrowArgs";
import { GroupByVersionGroupArgs } from "./args/GroupByVersionGroupArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { VersionGroup } from "../../../models/VersionGroup";
import { AggregateVersionGroup } from "../../outputs/AggregateVersionGroup";
import { VersionGroupGroupBy } from "../../outputs/VersionGroupGroupBy";

@TypeGraphQL.Resolver(_of => VersionGroup)
export class VersionGroupCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateVersionGroup, {
    nullable: false
  })
  async aggregateVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVersionGroupArgs): Promise<AggregateVersionGroup> {
    return getPrismaFromContext(ctx).versionGroups.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroup, {
    nullable: true
  })
  async findFirstVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVersionGroupArgs): Promise<VersionGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroup, {
    nullable: true
  })
  async findFirstVersionGroupOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVersionGroupOrThrowArgs): Promise<VersionGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [VersionGroup], {
    nullable: false
  })
  async versionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyVersionGroupArgs): Promise<VersionGroup[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroup, {
    nullable: true
  })
  async versionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVersionGroupArgs): Promise<VersionGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroup, {
    nullable: true
  })
  async getVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVersionGroupOrThrowArgs): Promise<VersionGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [VersionGroupGroupBy], {
    nullable: false
  })
  async groupByVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByVersionGroupArgs): Promise<VersionGroupGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroups.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}