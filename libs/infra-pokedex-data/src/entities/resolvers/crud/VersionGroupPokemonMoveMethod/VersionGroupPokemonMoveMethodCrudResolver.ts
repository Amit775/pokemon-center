import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateVersionGroupPokemonMoveMethodArgs } from "./args/AggregateVersionGroupPokemonMoveMethodArgs";
import { FindFirstVersionGroupPokemonMoveMethodArgs } from "./args/FindFirstVersionGroupPokemonMoveMethodArgs";
import { FindFirstVersionGroupPokemonMoveMethodOrThrowArgs } from "./args/FindFirstVersionGroupPokemonMoveMethodOrThrowArgs";
import { FindManyVersionGroupPokemonMoveMethodArgs } from "./args/FindManyVersionGroupPokemonMoveMethodArgs";
import { FindUniqueVersionGroupPokemonMoveMethodArgs } from "./args/FindUniqueVersionGroupPokemonMoveMethodArgs";
import { FindUniqueVersionGroupPokemonMoveMethodOrThrowArgs } from "./args/FindUniqueVersionGroupPokemonMoveMethodOrThrowArgs";
import { GroupByVersionGroupPokemonMoveMethodArgs } from "./args/GroupByVersionGroupPokemonMoveMethodArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { VersionGroupPokemonMoveMethod } from "../../../models/VersionGroupPokemonMoveMethod";
import { AggregateVersionGroupPokemonMoveMethod } from "../../outputs/AggregateVersionGroupPokemonMoveMethod";
import { VersionGroupPokemonMoveMethodGroupBy } from "../../outputs/VersionGroupPokemonMoveMethodGroupBy";

@TypeGraphQL.Resolver(_of => VersionGroupPokemonMoveMethod)
export class VersionGroupPokemonMoveMethodCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateVersionGroupPokemonMoveMethod, {
    nullable: false
  })
  async aggregateVersionGroupPokemonMoveMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVersionGroupPokemonMoveMethodArgs): Promise<AggregateVersionGroupPokemonMoveMethod> {
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroupPokemonMoveMethod, {
    nullable: true
  })
  async findFirstVersionGroupPokemonMoveMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVersionGroupPokemonMoveMethodArgs): Promise<VersionGroupPokemonMoveMethod | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroupPokemonMoveMethod, {
    nullable: true
  })
  async findFirstVersionGroupPokemonMoveMethodOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVersionGroupPokemonMoveMethodOrThrowArgs): Promise<VersionGroupPokemonMoveMethod | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [VersionGroupPokemonMoveMethod], {
    nullable: false
  })
  async versionGroupPokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyVersionGroupPokemonMoveMethodArgs): Promise<VersionGroupPokemonMoveMethod[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroupPokemonMoveMethod, {
    nullable: true
  })
  async versionGroupPokemonMoveMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVersionGroupPokemonMoveMethodArgs): Promise<VersionGroupPokemonMoveMethod | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VersionGroupPokemonMoveMethod, {
    nullable: true
  })
  async getVersionGroupPokemonMoveMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVersionGroupPokemonMoveMethodOrThrowArgs): Promise<VersionGroupPokemonMoveMethod | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [VersionGroupPokemonMoveMethodGroupBy], {
    nullable: false
  })
  async groupByVersionGroupPokemonMoveMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByVersionGroupPokemonMoveMethodArgs): Promise<VersionGroupPokemonMoveMethodGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}