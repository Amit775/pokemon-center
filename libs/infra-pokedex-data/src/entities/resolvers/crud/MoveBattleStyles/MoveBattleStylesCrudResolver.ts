import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveBattleStylesArgs } from "./args/AggregateMoveBattleStylesArgs";
import { FindFirstMoveBattleStylesArgs } from "./args/FindFirstMoveBattleStylesArgs";
import { FindFirstMoveBattleStylesOrThrowArgs } from "./args/FindFirstMoveBattleStylesOrThrowArgs";
import { FindManyMoveBattleStylesArgs } from "./args/FindManyMoveBattleStylesArgs";
import { FindUniqueMoveBattleStylesArgs } from "./args/FindUniqueMoveBattleStylesArgs";
import { FindUniqueMoveBattleStylesOrThrowArgs } from "./args/FindUniqueMoveBattleStylesOrThrowArgs";
import { GroupByMoveBattleStylesArgs } from "./args/GroupByMoveBattleStylesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MoveBattleStyles } from "../../../models/MoveBattleStyles";
import { AggregateMoveBattleStyles } from "../../outputs/AggregateMoveBattleStyles";
import { MoveBattleStylesGroupBy } from "../../outputs/MoveBattleStylesGroupBy";

@TypeGraphQL.Resolver(_of => MoveBattleStyles)
export class MoveBattleStylesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveBattleStyles, {
    nullable: false
  })
  async aggregateMoveBattleStyles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveBattleStylesArgs): Promise<AggregateMoveBattleStyles> {
    return getPrismaFromContext(ctx).moveBattleStyles.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => MoveBattleStyles, {
    nullable: true
  })
  async findFirstMoveBattleStyles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveBattleStylesArgs): Promise<MoveBattleStyles | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveBattleStyles, {
    nullable: true
  })
  async findFirstMoveBattleStylesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveBattleStylesOrThrowArgs): Promise<MoveBattleStyles | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveBattleStyles], {
    nullable: false
  })
  async findManyMoveBattleStyles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveBattleStylesArgs): Promise<MoveBattleStyles[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveBattleStyles, {
    nullable: true
  })
  async findUniqueMoveBattleStyles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveBattleStylesArgs): Promise<MoveBattleStyles | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveBattleStyles, {
    nullable: true
  })
  async findUniqueMoveBattleStylesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveBattleStylesOrThrowArgs): Promise<MoveBattleStyles | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveBattleStylesGroupBy], {
    nullable: false
  })
  async groupByMoveBattleStyles(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveBattleStylesArgs): Promise<MoveBattleStylesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveBattleStyles.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}