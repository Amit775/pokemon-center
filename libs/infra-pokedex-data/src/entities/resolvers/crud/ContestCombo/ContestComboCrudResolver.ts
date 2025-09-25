import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateContestComboArgs } from "./args/AggregateContestComboArgs";
import { FindFirstContestComboArgs } from "./args/FindFirstContestComboArgs";
import { FindFirstContestComboOrThrowArgs } from "./args/FindFirstContestComboOrThrowArgs";
import { FindManyContestComboArgs } from "./args/FindManyContestComboArgs";
import { FindUniqueContestComboArgs } from "./args/FindUniqueContestComboArgs";
import { FindUniqueContestComboOrThrowArgs } from "./args/FindUniqueContestComboOrThrowArgs";
import { GroupByContestComboArgs } from "./args/GroupByContestComboArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ContestCombo } from "../../../models/ContestCombo";
import { AggregateContestCombo } from "../../outputs/AggregateContestCombo";
import { ContestComboGroupBy } from "../../outputs/ContestComboGroupBy";

@TypeGraphQL.Resolver(_of => ContestCombo)
export class ContestComboCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateContestCombo, {
    nullable: false
  })
  async aggregateContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateContestComboArgs): Promise<AggregateContestCombo> {
    return getPrismaFromContext(ctx).contestCombos.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => ContestCombo, {
    nullable: true
  })
  async findFirstContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstContestComboArgs): Promise<ContestCombo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestCombos.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ContestCombo, {
    nullable: true
  })
  async findFirstContestComboOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstContestComboOrThrowArgs): Promise<ContestCombo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestCombos.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ContestCombo], {
    nullable: false
  })
  async contestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyContestComboArgs): Promise<ContestCombo[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestCombos.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ContestCombo, {
    nullable: true
  })
  async contestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueContestComboArgs): Promise<ContestCombo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestCombos.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ContestCombo, {
    nullable: true
  })
  async getContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueContestComboOrThrowArgs): Promise<ContestCombo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestCombos.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ContestComboGroupBy], {
    nullable: false
  })
  async groupByContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByContestComboArgs): Promise<ContestComboGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestCombos.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}