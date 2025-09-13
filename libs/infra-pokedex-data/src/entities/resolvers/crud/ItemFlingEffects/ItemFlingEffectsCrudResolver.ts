import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateItemFlingEffectsArgs } from "./args/AggregateItemFlingEffectsArgs";
import { FindFirstItemFlingEffectsArgs } from "./args/FindFirstItemFlingEffectsArgs";
import { FindFirstItemFlingEffectsOrThrowArgs } from "./args/FindFirstItemFlingEffectsOrThrowArgs";
import { FindManyItemFlingEffectsArgs } from "./args/FindManyItemFlingEffectsArgs";
import { FindUniqueItemFlingEffectsArgs } from "./args/FindUniqueItemFlingEffectsArgs";
import { FindUniqueItemFlingEffectsOrThrowArgs } from "./args/FindUniqueItemFlingEffectsOrThrowArgs";
import { GroupByItemFlingEffectsArgs } from "./args/GroupByItemFlingEffectsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ItemFlingEffects } from "../../../models/ItemFlingEffects";
import { AggregateItemFlingEffects } from "../../outputs/AggregateItemFlingEffects";
import { ItemFlingEffectsGroupBy } from "../../outputs/ItemFlingEffectsGroupBy";

@TypeGraphQL.Resolver(_of => ItemFlingEffects)
export class ItemFlingEffectsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateItemFlingEffects, {
    nullable: false
  })
  async aggregateItemFlingEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateItemFlingEffectsArgs): Promise<AggregateItemFlingEffects> {
    return getPrismaFromContext(ctx).itemFlingEffects.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => ItemFlingEffects, {
    nullable: true
  })
  async findFirstItemFlingEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstItemFlingEffectsArgs): Promise<ItemFlingEffects | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ItemFlingEffects, {
    nullable: true
  })
  async findFirstItemFlingEffectsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstItemFlingEffectsOrThrowArgs): Promise<ItemFlingEffects | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ItemFlingEffects], {
    nullable: false
  })
  async findManyItemFlingEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyItemFlingEffectsArgs): Promise<ItemFlingEffects[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ItemFlingEffects, {
    nullable: true
  })
  async findUniqueItemFlingEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueItemFlingEffectsArgs): Promise<ItemFlingEffects | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ItemFlingEffects, {
    nullable: true
  })
  async findUniqueItemFlingEffectsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueItemFlingEffectsOrThrowArgs): Promise<ItemFlingEffects | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ItemFlingEffectsGroupBy], {
    nullable: false
  })
  async groupByItemFlingEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByItemFlingEffectsArgs): Promise<ItemFlingEffectsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}