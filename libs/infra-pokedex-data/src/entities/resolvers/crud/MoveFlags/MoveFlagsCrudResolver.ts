import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveFlagsArgs } from "./args/AggregateMoveFlagsArgs";
import { FindFirstMoveFlagsArgs } from "./args/FindFirstMoveFlagsArgs";
import { FindFirstMoveFlagsOrThrowArgs } from "./args/FindFirstMoveFlagsOrThrowArgs";
import { FindManyMoveFlagsArgs } from "./args/FindManyMoveFlagsArgs";
import { FindUniqueMoveFlagsArgs } from "./args/FindUniqueMoveFlagsArgs";
import { FindUniqueMoveFlagsOrThrowArgs } from "./args/FindUniqueMoveFlagsOrThrowArgs";
import { GroupByMoveFlagsArgs } from "./args/GroupByMoveFlagsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MoveFlags } from "../../../models/MoveFlags";
import { AggregateMoveFlags } from "../../outputs/AggregateMoveFlags";
import { MoveFlagsGroupBy } from "../../outputs/MoveFlagsGroupBy";

@TypeGraphQL.Resolver(_of => MoveFlags)
export class MoveFlagsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveFlags, {
    nullable: false
  })
  async aggregateMoveFlags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveFlagsArgs): Promise<AggregateMoveFlags> {
    return getPrismaFromContext(ctx).moveFlags.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => MoveFlags, {
    nullable: true
  })
  async findFirstMoveFlags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveFlagsArgs): Promise<MoveFlags | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveFlags, {
    nullable: true
  })
  async findFirstMoveFlagsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveFlagsOrThrowArgs): Promise<MoveFlags | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveFlags], {
    nullable: false
  })
  async findManyMoveFlags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveFlagsArgs): Promise<MoveFlags[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveFlags, {
    nullable: true
  })
  async findUniqueMoveFlags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveFlagsArgs): Promise<MoveFlags | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveFlags, {
    nullable: true
  })
  async findUniqueMoveFlagsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveFlagsOrThrowArgs): Promise<MoveFlags | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveFlagsGroupBy], {
    nullable: false
  })
  async groupByMoveFlags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveFlagsArgs): Promise<MoveFlagsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}