import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateVersionsArgs } from "./args/AggregateVersionsArgs";
import { FindFirstVersionsArgs } from "./args/FindFirstVersionsArgs";
import { FindFirstVersionsOrThrowArgs } from "./args/FindFirstVersionsOrThrowArgs";
import { FindManyVersionsArgs } from "./args/FindManyVersionsArgs";
import { FindUniqueVersionsArgs } from "./args/FindUniqueVersionsArgs";
import { FindUniqueVersionsOrThrowArgs } from "./args/FindUniqueVersionsOrThrowArgs";
import { GroupByVersionsArgs } from "./args/GroupByVersionsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Versions } from "../../../models/Versions";
import { AggregateVersions } from "../../outputs/AggregateVersions";
import { VersionsGroupBy } from "../../outputs/VersionsGroupBy";

@TypeGraphQL.Resolver(_of => Versions)
export class VersionsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateVersions, {
    nullable: false
  })
  async aggregateVersions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVersionsArgs): Promise<AggregateVersions> {
    return getPrismaFromContext(ctx).versions.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => Versions, {
    nullable: true
  })
  async findFirstVersions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVersionsArgs): Promise<Versions | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versions.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Versions, {
    nullable: true
  })
  async findFirstVersionsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVersionsOrThrowArgs): Promise<Versions | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versions.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Versions], {
    nullable: false
  })
  async findManyVersions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyVersionsArgs): Promise<Versions[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versions.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Versions, {
    nullable: true
  })
  async findUniqueVersions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVersionsArgs): Promise<Versions | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versions.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Versions, {
    nullable: true
  })
  async findUniqueVersionsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVersionsOrThrowArgs): Promise<Versions | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versions.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [VersionsGroupBy], {
    nullable: false
  })
  async groupByVersions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByVersionsArgs): Promise<VersionsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versions.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}