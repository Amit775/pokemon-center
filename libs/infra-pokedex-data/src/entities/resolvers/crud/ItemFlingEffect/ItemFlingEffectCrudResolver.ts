import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateItemFlingEffectArgs } from "./args/AggregateItemFlingEffectArgs";
import { FindFirstItemFlingEffectArgs } from "./args/FindFirstItemFlingEffectArgs";
import { FindFirstItemFlingEffectOrThrowArgs } from "./args/FindFirstItemFlingEffectOrThrowArgs";
import { FindManyItemFlingEffectArgs } from "./args/FindManyItemFlingEffectArgs";
import { FindUniqueItemFlingEffectArgs } from "./args/FindUniqueItemFlingEffectArgs";
import { FindUniqueItemFlingEffectOrThrowArgs } from "./args/FindUniqueItemFlingEffectOrThrowArgs";
import { GroupByItemFlingEffectArgs } from "./args/GroupByItemFlingEffectArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ItemFlingEffect } from "../../../models/ItemFlingEffect";
import { AggregateItemFlingEffect } from "../../outputs/AggregateItemFlingEffect";
import { ItemFlingEffectGroupBy } from "../../outputs/ItemFlingEffectGroupBy";

@TypeGraphQL.Resolver(_of => ItemFlingEffect)
export class ItemFlingEffectCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateItemFlingEffect, {
    nullable: false
  })
  async aggregateItemFlingEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateItemFlingEffectArgs): Promise<AggregateItemFlingEffect> {
    return getPrismaFromContext(ctx).itemFlingEffects.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => ItemFlingEffect, {
    nullable: true
  })
  async findFirstItemFlingEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstItemFlingEffectArgs): Promise<ItemFlingEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ItemFlingEffect, {
    nullable: true
  })
  async findFirstItemFlingEffectOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstItemFlingEffectOrThrowArgs): Promise<ItemFlingEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ItemFlingEffect], {
    nullable: false
  })
  async itemFlingEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyItemFlingEffectArgs): Promise<ItemFlingEffect[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ItemFlingEffect, {
    nullable: true
  })
  async itemFlingEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueItemFlingEffectArgs): Promise<ItemFlingEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ItemFlingEffect, {
    nullable: true
  })
  async getItemFlingEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueItemFlingEffectOrThrowArgs): Promise<ItemFlingEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ItemFlingEffectGroupBy], {
    nullable: false
  })
  async groupByItemFlingEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByItemFlingEffectArgs): Promise<ItemFlingEffectGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}