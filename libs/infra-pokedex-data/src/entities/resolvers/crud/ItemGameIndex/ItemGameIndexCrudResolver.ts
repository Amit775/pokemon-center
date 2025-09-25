import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateItemGameIndexArgs } from "./args/AggregateItemGameIndexArgs";
import { FindFirstItemGameIndexArgs } from "./args/FindFirstItemGameIndexArgs";
import { FindFirstItemGameIndexOrThrowArgs } from "./args/FindFirstItemGameIndexOrThrowArgs";
import { FindManyItemGameIndexArgs } from "./args/FindManyItemGameIndexArgs";
import { FindUniqueItemGameIndexArgs } from "./args/FindUniqueItemGameIndexArgs";
import { FindUniqueItemGameIndexOrThrowArgs } from "./args/FindUniqueItemGameIndexOrThrowArgs";
import { GroupByItemGameIndexArgs } from "./args/GroupByItemGameIndexArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ItemGameIndex } from "../../../models/ItemGameIndex";
import { AggregateItemGameIndex } from "../../outputs/AggregateItemGameIndex";
import { ItemGameIndexGroupBy } from "../../outputs/ItemGameIndexGroupBy";

@TypeGraphQL.Resolver(_of => ItemGameIndex)
export class ItemGameIndexCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateItemGameIndex, {
    nullable: false
  })
  async aggregateItemGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateItemGameIndexArgs): Promise<AggregateItemGameIndex> {
    return getPrismaFromContext(ctx).itemGameIndices.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => ItemGameIndex, {
    nullable: true
  })
  async findFirstItemGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstItemGameIndexArgs): Promise<ItemGameIndex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemGameIndices.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ItemGameIndex, {
    nullable: true
  })
  async findFirstItemGameIndexOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstItemGameIndexOrThrowArgs): Promise<ItemGameIndex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemGameIndices.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ItemGameIndex], {
    nullable: false
  })
  async itemGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyItemGameIndexArgs): Promise<ItemGameIndex[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemGameIndices.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ItemGameIndex, {
    nullable: true
  })
  async itemGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueItemGameIndexArgs): Promise<ItemGameIndex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemGameIndices.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ItemGameIndex, {
    nullable: true
  })
  async getItemGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueItemGameIndexOrThrowArgs): Promise<ItemGameIndex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemGameIndices.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ItemGameIndexGroupBy], {
    nullable: false
  })
  async groupByItemGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByItemGameIndexArgs): Promise<ItemGameIndexGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemGameIndices.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}