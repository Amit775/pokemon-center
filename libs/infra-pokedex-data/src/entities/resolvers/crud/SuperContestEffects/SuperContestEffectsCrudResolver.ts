import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSuperContestEffectsArgs } from "./args/AggregateSuperContestEffectsArgs";
import { FindFirstSuperContestEffectsArgs } from "./args/FindFirstSuperContestEffectsArgs";
import { FindFirstSuperContestEffectsOrThrowArgs } from "./args/FindFirstSuperContestEffectsOrThrowArgs";
import { FindManySuperContestEffectsArgs } from "./args/FindManySuperContestEffectsArgs";
import { FindUniqueSuperContestEffectsArgs } from "./args/FindUniqueSuperContestEffectsArgs";
import { FindUniqueSuperContestEffectsOrThrowArgs } from "./args/FindUniqueSuperContestEffectsOrThrowArgs";
import { GroupBySuperContestEffectsArgs } from "./args/GroupBySuperContestEffectsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { SuperContestEffects } from "../../../models/SuperContestEffects";
import { AggregateSuperContestEffects } from "../../outputs/AggregateSuperContestEffects";
import { SuperContestEffectsGroupBy } from "../../outputs/SuperContestEffectsGroupBy";

@TypeGraphQL.Resolver(_of => SuperContestEffects)
export class SuperContestEffectsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateSuperContestEffects, {
    nullable: false
  })
  async aggregateSuperContestEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSuperContestEffectsArgs): Promise<AggregateSuperContestEffects> {
    return getPrismaFromContext(ctx).superContestEffects.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => SuperContestEffects, {
    nullable: true
  })
  async findFirstSuperContestEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSuperContestEffectsArgs): Promise<SuperContestEffects | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SuperContestEffects, {
    nullable: true
  })
  async findFirstSuperContestEffectsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSuperContestEffectsOrThrowArgs): Promise<SuperContestEffects | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SuperContestEffects], {
    nullable: false
  })
  async findManySuperContestEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManySuperContestEffectsArgs): Promise<SuperContestEffects[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SuperContestEffects, {
    nullable: true
  })
  async findUniqueSuperContestEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSuperContestEffectsArgs): Promise<SuperContestEffects | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => SuperContestEffects, {
    nullable: true
  })
  async findUniqueSuperContestEffectsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSuperContestEffectsOrThrowArgs): Promise<SuperContestEffects | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [SuperContestEffectsGroupBy], {
    nullable: false
  })
  async groupBySuperContestEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySuperContestEffectsArgs): Promise<SuperContestEffectsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}