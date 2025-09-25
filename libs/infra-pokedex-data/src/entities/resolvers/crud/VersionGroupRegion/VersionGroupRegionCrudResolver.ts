import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateVersionGroupRegionArgs } from "./args/AggregateVersionGroupRegionArgs";
import { FindFirstVersionGroupRegionArgs } from "./args/FindFirstVersionGroupRegionArgs";
import { FindFirstVersionGroupRegionOrThrowArgs } from "./args/FindFirstVersionGroupRegionOrThrowArgs";
import { FindManyVersionGroupRegionArgs } from "./args/FindManyVersionGroupRegionArgs";
import { FindUniqueVersionGroupRegionArgs } from "./args/FindUniqueVersionGroupRegionArgs";
import { FindUniqueVersionGroupRegionOrThrowArgs } from "./args/FindUniqueVersionGroupRegionOrThrowArgs";
import { GroupByVersionGroupRegionArgs } from "./args/GroupByVersionGroupRegionArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { VersionGroupRegion } from "../../../models/VersionGroupRegion";
import { AggregateVersionGroupRegion } from "../../outputs/AggregateVersionGroupRegion";
import { VersionGroupRegionGroupBy } from "../../outputs/VersionGroupRegionGroupBy";

@TypeGraphQL.Resolver(_of => VersionGroupRegion)
export class VersionGroupRegionCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateVersionGroupRegion, {
    nullable: false
  })
  async aggregateVersionGroupRegion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVersionGroupRegionArgs): Promise<AggregateVersionGroupRegion> {
    return getPrismaFromContext(ctx).versionGroupRegions.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroupRegion, {
    nullable: true
  })
  async findFirstVersionGroupRegion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVersionGroupRegionArgs): Promise<VersionGroupRegion | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupRegions.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroupRegion, {
    nullable: true
  })
  async findFirstVersionGroupRegionOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVersionGroupRegionOrThrowArgs): Promise<VersionGroupRegion | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupRegions.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [VersionGroupRegion], {
    nullable: false
  })
  async versionGroupRegions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyVersionGroupRegionArgs): Promise<VersionGroupRegion[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupRegions.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroupRegion, {
    nullable: true
  })
  async versionGroupRegion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVersionGroupRegionArgs): Promise<VersionGroupRegion | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupRegions.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroupRegion, {
    nullable: true
  })
  async getVersionGroupRegion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVersionGroupRegionOrThrowArgs): Promise<VersionGroupRegion | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupRegions.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [VersionGroupRegionGroupBy], {
    nullable: false
  })
  async groupByVersionGroupRegion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByVersionGroupRegionArgs): Promise<VersionGroupRegionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupRegions.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}