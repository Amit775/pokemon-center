import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateVersionGroupRegionsArgs } from "./args/AggregateVersionGroupRegionsArgs";
import { FindFirstVersionGroupRegionsArgs } from "./args/FindFirstVersionGroupRegionsArgs";
import { FindFirstVersionGroupRegionsOrThrowArgs } from "./args/FindFirstVersionGroupRegionsOrThrowArgs";
import { FindManyVersionGroupRegionsArgs } from "./args/FindManyVersionGroupRegionsArgs";
import { FindUniqueVersionGroupRegionsArgs } from "./args/FindUniqueVersionGroupRegionsArgs";
import { FindUniqueVersionGroupRegionsOrThrowArgs } from "./args/FindUniqueVersionGroupRegionsOrThrowArgs";
import { GroupByVersionGroupRegionsArgs } from "./args/GroupByVersionGroupRegionsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { VersionGroupRegions } from "../../../models/VersionGroupRegions";
import { AggregateVersionGroupRegions } from "../../outputs/AggregateVersionGroupRegions";
import { VersionGroupRegionsGroupBy } from "../../outputs/VersionGroupRegionsGroupBy";

@TypeGraphQL.Resolver(_of => VersionGroupRegions)
export class VersionGroupRegionsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateVersionGroupRegions, {
    nullable: false
  })
  async aggregateVersionGroupRegions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVersionGroupRegionsArgs): Promise<AggregateVersionGroupRegions> {
    return getPrismaFromContext(ctx).versionGroupRegions.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroupRegions, {
    nullable: true
  })
  async findFirstVersionGroupRegions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVersionGroupRegionsArgs): Promise<VersionGroupRegions | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupRegions.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroupRegions, {
    nullable: true
  })
  async findFirstVersionGroupRegionsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVersionGroupRegionsOrThrowArgs): Promise<VersionGroupRegions | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupRegions.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [VersionGroupRegions], {
    nullable: false
  })
  async findManyVersionGroupRegions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyVersionGroupRegionsArgs): Promise<VersionGroupRegions[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupRegions.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroupRegions, {
    nullable: true
  })
  async findUniqueVersionGroupRegions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVersionGroupRegionsArgs): Promise<VersionGroupRegions | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupRegions.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroupRegions, {
    nullable: true
  })
  async findUniqueVersionGroupRegionsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVersionGroupRegionsOrThrowArgs): Promise<VersionGroupRegions | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupRegions.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [VersionGroupRegionsGroupBy], {
    nullable: false
  })
  async groupByVersionGroupRegions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByVersionGroupRegionsArgs): Promise<VersionGroupRegionsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupRegions.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}