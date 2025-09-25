import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateItemPocketArgs } from "./args/AggregateItemPocketArgs";
import { FindFirstItemPocketArgs } from "./args/FindFirstItemPocketArgs";
import { FindFirstItemPocketOrThrowArgs } from "./args/FindFirstItemPocketOrThrowArgs";
import { FindManyItemPocketArgs } from "./args/FindManyItemPocketArgs";
import { FindUniqueItemPocketArgs } from "./args/FindUniqueItemPocketArgs";
import { FindUniqueItemPocketOrThrowArgs } from "./args/FindUniqueItemPocketOrThrowArgs";
import { GroupByItemPocketArgs } from "./args/GroupByItemPocketArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ItemPocket } from "../../../models/ItemPocket";
import { AggregateItemPocket } from "../../outputs/AggregateItemPocket";
import { ItemPocketGroupBy } from "../../outputs/ItemPocketGroupBy";

@TypeGraphQL.Resolver(_of => ItemPocket)
export class ItemPocketCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateItemPocket, {
    nullable: false
  })
  async aggregateItemPocket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateItemPocketArgs): Promise<AggregateItemPocket> {
    return getPrismaFromContext(ctx).itemPockets.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => ItemPocket, {
    nullable: true
  })
  async findFirstItemPocket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstItemPocketArgs): Promise<ItemPocket | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemPockets.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ItemPocket, {
    nullable: true
  })
  async findFirstItemPocketOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstItemPocketOrThrowArgs): Promise<ItemPocket | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemPockets.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ItemPocket], {
    nullable: false
  })
  async itemPockets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyItemPocketArgs): Promise<ItemPocket[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemPockets.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ItemPocket, {
    nullable: true
  })
  async itemPocket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueItemPocketArgs): Promise<ItemPocket | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemPockets.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ItemPocket, {
    nullable: true
  })
  async getItemPocket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueItemPocketOrThrowArgs): Promise<ItemPocket | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemPockets.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ItemPocketGroupBy], {
    nullable: false
  })
  async groupByItemPocket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByItemPocketArgs): Promise<ItemPocketGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemPockets.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}