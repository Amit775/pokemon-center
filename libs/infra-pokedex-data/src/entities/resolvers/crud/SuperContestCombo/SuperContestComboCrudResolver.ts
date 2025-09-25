import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSuperContestComboArgs } from "./args/AggregateSuperContestComboArgs";
import { FindFirstSuperContestComboArgs } from "./args/FindFirstSuperContestComboArgs";
import { FindFirstSuperContestComboOrThrowArgs } from "./args/FindFirstSuperContestComboOrThrowArgs";
import { FindManySuperContestComboArgs } from "./args/FindManySuperContestComboArgs";
import { FindUniqueSuperContestComboArgs } from "./args/FindUniqueSuperContestComboArgs";
import { FindUniqueSuperContestComboOrThrowArgs } from "./args/FindUniqueSuperContestComboOrThrowArgs";
import { GroupBySuperContestComboArgs } from "./args/GroupBySuperContestComboArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { SuperContestCombo } from "../../../models/SuperContestCombo";
import { AggregateSuperContestCombo } from "../../outputs/AggregateSuperContestCombo";
import { SuperContestComboGroupBy } from "../../outputs/SuperContestComboGroupBy";

@TypeGraphQL.Resolver(_of => SuperContestCombo)
export class SuperContestComboCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateSuperContestCombo, {
    nullable: false
  })
  async aggregateSuperContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSuperContestComboArgs): Promise<AggregateSuperContestCombo> {
    return getPrismaFromContext(ctx).superContestCombos.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => SuperContestCombo, {
    nullable: true
  })
  async findFirstSuperContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSuperContestComboArgs): Promise<SuperContestCombo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SuperContestCombo, {
    nullable: true
  })
  async findFirstSuperContestComboOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSuperContestComboOrThrowArgs): Promise<SuperContestCombo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SuperContestCombo], {
    nullable: false
  })
  async superContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySuperContestComboArgs): Promise<SuperContestCombo[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SuperContestCombo, {
    nullable: true
  })
  async superContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSuperContestComboArgs): Promise<SuperContestCombo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SuperContestCombo, {
    nullable: true
  })
  async getSuperContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSuperContestComboOrThrowArgs): Promise<SuperContestCombo | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SuperContestComboGroupBy], {
    nullable: false
  })
  async groupBySuperContestCombo(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySuperContestComboArgs): Promise<SuperContestComboGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}