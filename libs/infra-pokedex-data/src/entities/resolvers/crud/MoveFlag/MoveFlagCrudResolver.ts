import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveFlagArgs } from "./args/AggregateMoveFlagArgs";
import { FindFirstMoveFlagArgs } from "./args/FindFirstMoveFlagArgs";
import { FindFirstMoveFlagOrThrowArgs } from "./args/FindFirstMoveFlagOrThrowArgs";
import { FindManyMoveFlagArgs } from "./args/FindManyMoveFlagArgs";
import { FindUniqueMoveFlagArgs } from "./args/FindUniqueMoveFlagArgs";
import { FindUniqueMoveFlagOrThrowArgs } from "./args/FindUniqueMoveFlagOrThrowArgs";
import { GroupByMoveFlagArgs } from "./args/GroupByMoveFlagArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MoveFlag } from "../../../models/MoveFlag";
import { AggregateMoveFlag } from "../../outputs/AggregateMoveFlag";
import { MoveFlagGroupBy } from "../../outputs/MoveFlagGroupBy";

@TypeGraphQL.Resolver(_of => MoveFlag)
export class MoveFlagCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveFlag, {
    nullable: false
  })
  async aggregateMoveFlag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveFlagArgs): Promise<AggregateMoveFlag> {
    return getPrismaFromContext(ctx).moveFlags.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => MoveFlag, {
    nullable: true
  })
  async findFirstMoveFlag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveFlagArgs): Promise<MoveFlag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveFlag, {
    nullable: true
  })
  async findFirstMoveFlagOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveFlagOrThrowArgs): Promise<MoveFlag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveFlag], {
    nullable: false
  })
  async moveFlags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveFlagArgs): Promise<MoveFlag[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveFlag, {
    nullable: true
  })
  async moveFlag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveFlagArgs): Promise<MoveFlag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveFlag, {
    nullable: true
  })
  async getMoveFlag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveFlagOrThrowArgs): Promise<MoveFlag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveFlagGroupBy], {
    nullable: false
  })
  async groupByMoveFlag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveFlagArgs): Promise<MoveFlagGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveFlags.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}