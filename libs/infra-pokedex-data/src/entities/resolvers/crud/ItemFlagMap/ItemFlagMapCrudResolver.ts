import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateItemFlagMapArgs } from "./args/AggregateItemFlagMapArgs";
import { FindFirstItemFlagMapArgs } from "./args/FindFirstItemFlagMapArgs";
import { FindFirstItemFlagMapOrThrowArgs } from "./args/FindFirstItemFlagMapOrThrowArgs";
import { FindManyItemFlagMapArgs } from "./args/FindManyItemFlagMapArgs";
import { FindUniqueItemFlagMapArgs } from "./args/FindUniqueItemFlagMapArgs";
import { FindUniqueItemFlagMapOrThrowArgs } from "./args/FindUniqueItemFlagMapOrThrowArgs";
import { GroupByItemFlagMapArgs } from "./args/GroupByItemFlagMapArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ItemFlagMap } from "../../../models/ItemFlagMap";
import { AggregateItemFlagMap } from "../../outputs/AggregateItemFlagMap";
import { ItemFlagMapGroupBy } from "../../outputs/ItemFlagMapGroupBy";

@TypeGraphQL.Resolver(_of => ItemFlagMap)
export class ItemFlagMapCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateItemFlagMap, {
    nullable: false
  })
  async aggregateItemFlagMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateItemFlagMapArgs): Promise<AggregateItemFlagMap> {
    return getPrismaFromContext(ctx).itemFlagMap.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => ItemFlagMap, {
    nullable: true
  })
  async findFirstItemFlagMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstItemFlagMapArgs): Promise<ItemFlagMap | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlagMap.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ItemFlagMap, {
    nullable: true
  })
  async findFirstItemFlagMapOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstItemFlagMapOrThrowArgs): Promise<ItemFlagMap | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlagMap.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ItemFlagMap], {
    nullable: false
  })
  async itemFlagMaps(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyItemFlagMapArgs): Promise<ItemFlagMap[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlagMap.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ItemFlagMap, {
    nullable: true
  })
  async itemFlagMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueItemFlagMapArgs): Promise<ItemFlagMap | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlagMap.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ItemFlagMap, {
    nullable: true
  })
  async getItemFlagMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueItemFlagMapOrThrowArgs): Promise<ItemFlagMap | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlagMap.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ItemFlagMapGroupBy], {
    nullable: false
  })
  async groupByItemFlagMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByItemFlagMapArgs): Promise<ItemFlagMapGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlagMap.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}