import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateContestCombosArgs } from "./args/AggregateContestCombosArgs";
import { FindFirstContestCombosArgs } from "./args/FindFirstContestCombosArgs";
import { FindFirstContestCombosOrThrowArgs } from "./args/FindFirstContestCombosOrThrowArgs";
import { FindManyContestCombosArgs } from "./args/FindManyContestCombosArgs";
import { FindUniqueContestCombosArgs } from "./args/FindUniqueContestCombosArgs";
import { FindUniqueContestCombosOrThrowArgs } from "./args/FindUniqueContestCombosOrThrowArgs";
import { GroupByContestCombosArgs } from "./args/GroupByContestCombosArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ContestCombos } from "../../../models/ContestCombos";
import { AggregateContestCombos } from "../../outputs/AggregateContestCombos";
import { ContestCombosGroupBy } from "../../outputs/ContestCombosGroupBy";

@TypeGraphQL.Resolver(_of => ContestCombos)
export class ContestCombosCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateContestCombos, {
    nullable: false
  })
  async aggregateContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateContestCombosArgs): Promise<AggregateContestCombos> {
    return getPrismaFromContext(ctx).contestCombos.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => ContestCombos, {
    nullable: true
  })
  async findFirstContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstContestCombosArgs): Promise<ContestCombos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestCombos.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ContestCombos, {
    nullable: true
  })
  async findFirstContestCombosOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstContestCombosOrThrowArgs): Promise<ContestCombos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestCombos.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ContestCombos], {
    nullable: false
  })
  async findManyContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyContestCombosArgs): Promise<ContestCombos[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestCombos.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ContestCombos, {
    nullable: true
  })
  async findUniqueContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueContestCombosArgs): Promise<ContestCombos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestCombos.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ContestCombos, {
    nullable: true
  })
  async findUniqueContestCombosOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueContestCombosOrThrowArgs): Promise<ContestCombos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestCombos.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ContestCombosGroupBy], {
    nullable: false
  })
  async groupByContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByContestCombosArgs): Promise<ContestCombosGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestCombos.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}