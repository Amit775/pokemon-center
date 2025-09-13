import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveEffectsArgs } from "./args/AggregateMoveEffectsArgs";
import { FindFirstMoveEffectsArgs } from "./args/FindFirstMoveEffectsArgs";
import { FindFirstMoveEffectsOrThrowArgs } from "./args/FindFirstMoveEffectsOrThrowArgs";
import { FindManyMoveEffectsArgs } from "./args/FindManyMoveEffectsArgs";
import { FindUniqueMoveEffectsArgs } from "./args/FindUniqueMoveEffectsArgs";
import { FindUniqueMoveEffectsOrThrowArgs } from "./args/FindUniqueMoveEffectsOrThrowArgs";
import { GroupByMoveEffectsArgs } from "./args/GroupByMoveEffectsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MoveEffects } from "../../../models/MoveEffects";
import { AggregateMoveEffects } from "../../outputs/AggregateMoveEffects";
import { MoveEffectsGroupBy } from "../../outputs/MoveEffectsGroupBy";

@TypeGraphQL.Resolver(_of => MoveEffects)
export class MoveEffectsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveEffects, {
    nullable: false
  })
  async aggregateMoveEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveEffectsArgs): Promise<AggregateMoveEffects> {
    return getPrismaFromContext(ctx).moveEffects.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => MoveEffects, {
    nullable: true
  })
  async findFirstMoveEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveEffectsArgs): Promise<MoveEffects | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveEffects.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveEffects, {
    nullable: true
  })
  async findFirstMoveEffectsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveEffectsOrThrowArgs): Promise<MoveEffects | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveEffects.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveEffects], {
    nullable: false
  })
  async findManyMoveEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveEffectsArgs): Promise<MoveEffects[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveEffects.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveEffects, {
    nullable: true
  })
  async findUniqueMoveEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveEffectsArgs): Promise<MoveEffects | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveEffects.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveEffects, {
    nullable: true
  })
  async findUniqueMoveEffectsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveEffectsOrThrowArgs): Promise<MoveEffects | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveEffects.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveEffectsGroupBy], {
    nullable: false
  })
  async groupByMoveEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveEffectsArgs): Promise<MoveEffectsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveEffects.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}