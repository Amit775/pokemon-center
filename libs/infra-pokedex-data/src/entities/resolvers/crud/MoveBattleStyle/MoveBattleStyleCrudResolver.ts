import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveBattleStyleArgs } from "./args/AggregateMoveBattleStyleArgs";
import { FindFirstMoveBattleStyleArgs } from "./args/FindFirstMoveBattleStyleArgs";
import { FindFirstMoveBattleStyleOrThrowArgs } from "./args/FindFirstMoveBattleStyleOrThrowArgs";
import { FindManyMoveBattleStyleArgs } from "./args/FindManyMoveBattleStyleArgs";
import { FindUniqueMoveBattleStyleArgs } from "./args/FindUniqueMoveBattleStyleArgs";
import { FindUniqueMoveBattleStyleOrThrowArgs } from "./args/FindUniqueMoveBattleStyleOrThrowArgs";
import { GroupByMoveBattleStyleArgs } from "./args/GroupByMoveBattleStyleArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MoveBattleStyle } from "../../../models/MoveBattleStyle";
import { AggregateMoveBattleStyle } from "../../outputs/AggregateMoveBattleStyle";
import { MoveBattleStyleGroupBy } from "../../outputs/MoveBattleStyleGroupBy";

@TypeGraphQL.Resolver(_of => MoveBattleStyle)
export class MoveBattleStyleCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveBattleStyle, {
    nullable: false
  })
  async aggregateMoveBattleStyle(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveBattleStyleArgs): Promise<AggregateMoveBattleStyle> {
    return getPrismaFromContext(ctx).moveBattleStyles.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => MoveBattleStyle, {
    nullable: true
  })
  async findFirstMoveBattleStyle(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveBattleStyleArgs): Promise<MoveBattleStyle | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveBattleStyle, {
    nullable: true
  })
  async findFirstMoveBattleStyleOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveBattleStyleOrThrowArgs): Promise<MoveBattleStyle | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveBattleStyle], {
    nullable: false
  })
  async moveBattleStyles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveBattleStyleArgs): Promise<MoveBattleStyle[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveBattleStyle, {
    nullable: true
  })
  async moveBattleStyle(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveBattleStyleArgs): Promise<MoveBattleStyle | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveBattleStyle, {
    nullable: true
  })
  async getMoveBattleStyle(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveBattleStyleOrThrowArgs): Promise<MoveBattleStyle | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveBattleStyleGroupBy], {
    nullable: false
  })
  async groupByMoveBattleStyle(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveBattleStyleArgs): Promise<MoveBattleStyleGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}