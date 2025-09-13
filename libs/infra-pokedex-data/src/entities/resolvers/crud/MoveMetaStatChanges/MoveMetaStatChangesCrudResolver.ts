import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveMetaStatChangesArgs } from "./args/AggregateMoveMetaStatChangesArgs";
import { FindFirstMoveMetaStatChangesArgs } from "./args/FindFirstMoveMetaStatChangesArgs";
import { FindFirstMoveMetaStatChangesOrThrowArgs } from "./args/FindFirstMoveMetaStatChangesOrThrowArgs";
import { FindManyMoveMetaStatChangesArgs } from "./args/FindManyMoveMetaStatChangesArgs";
import { FindUniqueMoveMetaStatChangesArgs } from "./args/FindUniqueMoveMetaStatChangesArgs";
import { FindUniqueMoveMetaStatChangesOrThrowArgs } from "./args/FindUniqueMoveMetaStatChangesOrThrowArgs";
import { GroupByMoveMetaStatChangesArgs } from "./args/GroupByMoveMetaStatChangesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MoveMetaStatChanges } from "../../../models/MoveMetaStatChanges";
import { AggregateMoveMetaStatChanges } from "../../outputs/AggregateMoveMetaStatChanges";
import { MoveMetaStatChangesGroupBy } from "../../outputs/MoveMetaStatChangesGroupBy";

@TypeGraphQL.Resolver(_of => MoveMetaStatChanges)
export class MoveMetaStatChangesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveMetaStatChanges, {
    nullable: false
  })
  async aggregateMoveMetaStatChanges(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveMetaStatChangesArgs): Promise<AggregateMoveMetaStatChanges> {
    return getPrismaFromContext(ctx).moveMetaStatChanges.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMetaStatChanges, {
    nullable: true
  })
  async findFirstMoveMetaStatChanges(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveMetaStatChangesArgs): Promise<MoveMetaStatChanges | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaStatChanges.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMetaStatChanges, {
    nullable: true
  })
  async findFirstMoveMetaStatChangesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveMetaStatChangesOrThrowArgs): Promise<MoveMetaStatChanges | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaStatChanges.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveMetaStatChanges], {
    nullable: false
  })
  async findManyMoveMetaStatChanges(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveMetaStatChangesArgs): Promise<MoveMetaStatChanges[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaStatChanges.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMetaStatChanges, {
    nullable: true
  })
  async findUniqueMoveMetaStatChanges(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveMetaStatChangesArgs): Promise<MoveMetaStatChanges | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaStatChanges.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveMetaStatChanges, {
    nullable: true
  })
  async findUniqueMoveMetaStatChangesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveMetaStatChangesOrThrowArgs): Promise<MoveMetaStatChanges | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaStatChanges.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveMetaStatChangesGroupBy], {
    nullable: false
  })
  async groupByMoveMetaStatChanges(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveMetaStatChangesArgs): Promise<MoveMetaStatChangesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaStatChanges.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}