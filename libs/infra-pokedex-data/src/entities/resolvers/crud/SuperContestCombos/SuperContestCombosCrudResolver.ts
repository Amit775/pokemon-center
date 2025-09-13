import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSuperContestCombosArgs } from "./args/AggregateSuperContestCombosArgs";
import { FindFirstSuperContestCombosArgs } from "./args/FindFirstSuperContestCombosArgs";
import { FindFirstSuperContestCombosOrThrowArgs } from "./args/FindFirstSuperContestCombosOrThrowArgs";
import { FindManySuperContestCombosArgs } from "./args/FindManySuperContestCombosArgs";
import { FindUniqueSuperContestCombosArgs } from "./args/FindUniqueSuperContestCombosArgs";
import { FindUniqueSuperContestCombosOrThrowArgs } from "./args/FindUniqueSuperContestCombosOrThrowArgs";
import { GroupBySuperContestCombosArgs } from "./args/GroupBySuperContestCombosArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { SuperContestCombos } from "../../../models/SuperContestCombos";
import { AggregateSuperContestCombos } from "../../outputs/AggregateSuperContestCombos";
import { SuperContestCombosGroupBy } from "../../outputs/SuperContestCombosGroupBy";

@TypeGraphQL.Resolver(_of => SuperContestCombos)
export class SuperContestCombosCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateSuperContestCombos, {
    nullable: false
  })
  async aggregateSuperContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSuperContestCombosArgs): Promise<AggregateSuperContestCombos> {
    return getPrismaFromContext(ctx).superContestCombos.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => SuperContestCombos, {
    nullable: true
  })
  async findFirstSuperContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSuperContestCombosArgs): Promise<SuperContestCombos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SuperContestCombos, {
    nullable: true
  })
  async findFirstSuperContestCombosOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSuperContestCombosOrThrowArgs): Promise<SuperContestCombos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SuperContestCombos], {
    nullable: false
  })
  async findManySuperContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySuperContestCombosArgs): Promise<SuperContestCombos[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SuperContestCombos, {
    nullable: true
  })
  async findUniqueSuperContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSuperContestCombosArgs): Promise<SuperContestCombos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SuperContestCombos, {
    nullable: true
  })
  async findUniqueSuperContestCombosOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSuperContestCombosOrThrowArgs): Promise<SuperContestCombos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SuperContestCombosGroupBy], {
    nullable: false
  })
  async groupBySuperContestCombos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySuperContestCombosArgs): Promise<SuperContestCombosGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestCombos.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}