import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveTargetArgs } from "./args/AggregateMoveTargetArgs";
import { FindFirstMoveTargetArgs } from "./args/FindFirstMoveTargetArgs";
import { FindFirstMoveTargetOrThrowArgs } from "./args/FindFirstMoveTargetOrThrowArgs";
import { FindManyMoveTargetArgs } from "./args/FindManyMoveTargetArgs";
import { FindUniqueMoveTargetArgs } from "./args/FindUniqueMoveTargetArgs";
import { FindUniqueMoveTargetOrThrowArgs } from "./args/FindUniqueMoveTargetOrThrowArgs";
import { GroupByMoveTargetArgs } from "./args/GroupByMoveTargetArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MoveTarget } from "../../../models/MoveTarget";
import { AggregateMoveTarget } from "../../outputs/AggregateMoveTarget";
import { MoveTargetGroupBy } from "../../outputs/MoveTargetGroupBy";

@TypeGraphQL.Resolver(_of => MoveTarget)
export class MoveTargetCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveTarget, {
    nullable: false
  })
  async aggregateMoveTarget(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveTargetArgs): Promise<AggregateMoveTarget> {
    return getPrismaFromContext(ctx).moveTargets.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => MoveTarget, {
    nullable: true
  })
  async findFirstMoveTarget(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveTargetArgs): Promise<MoveTarget | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveTargets.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveTarget, {
    nullable: true
  })
  async findFirstMoveTargetOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveTargetOrThrowArgs): Promise<MoveTarget | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveTargets.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveTarget], {
    nullable: false
  })
  async moveTargets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveTargetArgs): Promise<MoveTarget[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveTargets.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveTarget, {
    nullable: true
  })
  async moveTarget(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveTargetArgs): Promise<MoveTarget | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveTargets.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveTarget, {
    nullable: true
  })
  async getMoveTarget(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveTargetOrThrowArgs): Promise<MoveTarget | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveTargets.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveTargetGroupBy], {
    nullable: false
  })
  async groupByMoveTarget(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveTargetArgs): Promise<MoveTargetGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveTargets.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}