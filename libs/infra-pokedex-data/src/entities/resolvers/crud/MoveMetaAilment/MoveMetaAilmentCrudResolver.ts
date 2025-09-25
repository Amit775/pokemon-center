import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveMetaAilmentArgs } from "./args/AggregateMoveMetaAilmentArgs";
import { FindFirstMoveMetaAilmentArgs } from "./args/FindFirstMoveMetaAilmentArgs";
import { FindFirstMoveMetaAilmentOrThrowArgs } from "./args/FindFirstMoveMetaAilmentOrThrowArgs";
import { FindManyMoveMetaAilmentArgs } from "./args/FindManyMoveMetaAilmentArgs";
import { FindUniqueMoveMetaAilmentArgs } from "./args/FindUniqueMoveMetaAilmentArgs";
import { FindUniqueMoveMetaAilmentOrThrowArgs } from "./args/FindUniqueMoveMetaAilmentOrThrowArgs";
import { GroupByMoveMetaAilmentArgs } from "./args/GroupByMoveMetaAilmentArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MoveMetaAilment } from "../../../models/MoveMetaAilment";
import { AggregateMoveMetaAilment } from "../../outputs/AggregateMoveMetaAilment";
import { MoveMetaAilmentGroupBy } from "../../outputs/MoveMetaAilmentGroupBy";

@TypeGraphQL.Resolver(_of => MoveMetaAilment)
export class MoveMetaAilmentCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveMetaAilment, {
    nullable: false
  })
  async aggregateMoveMetaAilment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveMetaAilmentArgs): Promise<AggregateMoveMetaAilment> {
    return getPrismaFromContext(ctx).moveMetaAilments.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMetaAilment, {
    nullable: true
  })
  async findFirstMoveMetaAilment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveMetaAilmentArgs): Promise<MoveMetaAilment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaAilments.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMetaAilment, {
    nullable: true
  })
  async findFirstMoveMetaAilmentOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveMetaAilmentOrThrowArgs): Promise<MoveMetaAilment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaAilments.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveMetaAilment], {
    nullable: false
  })
  async moveMetaAilments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveMetaAilmentArgs): Promise<MoveMetaAilment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaAilments.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMetaAilment, {
    nullable: true
  })
  async moveMetaAilment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveMetaAilmentArgs): Promise<MoveMetaAilment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaAilments.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMetaAilment, {
    nullable: true
  })
  async getMoveMetaAilment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveMetaAilmentOrThrowArgs): Promise<MoveMetaAilment | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaAilments.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveMetaAilmentGroupBy], {
    nullable: false
  })
  async groupByMoveMetaAilment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveMetaAilmentArgs): Promise<MoveMetaAilmentGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaAilments.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}