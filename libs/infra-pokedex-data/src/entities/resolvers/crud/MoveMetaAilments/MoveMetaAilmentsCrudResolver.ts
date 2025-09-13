import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveMetaAilmentsArgs } from "./args/AggregateMoveMetaAilmentsArgs";
import { FindFirstMoveMetaAilmentsArgs } from "./args/FindFirstMoveMetaAilmentsArgs";
import { FindFirstMoveMetaAilmentsOrThrowArgs } from "./args/FindFirstMoveMetaAilmentsOrThrowArgs";
import { FindManyMoveMetaAilmentsArgs } from "./args/FindManyMoveMetaAilmentsArgs";
import { FindUniqueMoveMetaAilmentsArgs } from "./args/FindUniqueMoveMetaAilmentsArgs";
import { FindUniqueMoveMetaAilmentsOrThrowArgs } from "./args/FindUniqueMoveMetaAilmentsOrThrowArgs";
import { GroupByMoveMetaAilmentsArgs } from "./args/GroupByMoveMetaAilmentsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MoveMetaAilments } from "../../../models/MoveMetaAilments";
import { AggregateMoveMetaAilments } from "../../outputs/AggregateMoveMetaAilments";
import { MoveMetaAilmentsGroupBy } from "../../outputs/MoveMetaAilmentsGroupBy";

@TypeGraphQL.Resolver(_of => MoveMetaAilments)
export class MoveMetaAilmentsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveMetaAilments, {
    nullable: false
  })
  async aggregateMoveMetaAilments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveMetaAilmentsArgs): Promise<AggregateMoveMetaAilments> {
    return getPrismaFromContext(ctx).moveMetaAilments.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMetaAilments, {
    nullable: true
  })
  async findFirstMoveMetaAilments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveMetaAilmentsArgs): Promise<MoveMetaAilments | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaAilments.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMetaAilments, {
    nullable: true
  })
  async findFirstMoveMetaAilmentsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveMetaAilmentsOrThrowArgs): Promise<MoveMetaAilments | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaAilments.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveMetaAilments], {
    nullable: false
  })
  async findManyMoveMetaAilments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveMetaAilmentsArgs): Promise<MoveMetaAilments[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaAilments.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMetaAilments, {
    nullable: true
  })
  async findUniqueMoveMetaAilments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveMetaAilmentsArgs): Promise<MoveMetaAilments | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaAilments.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMetaAilments, {
    nullable: true
  })
  async findUniqueMoveMetaAilmentsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveMetaAilmentsOrThrowArgs): Promise<MoveMetaAilments | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaAilments.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveMetaAilmentsGroupBy], {
    nullable: false
  })
  async groupByMoveMetaAilments(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveMetaAilmentsArgs): Promise<MoveMetaAilmentsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaAilments.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}