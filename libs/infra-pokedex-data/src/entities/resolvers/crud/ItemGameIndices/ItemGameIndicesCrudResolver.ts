import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateItemGameIndicesArgs } from "./args/AggregateItemGameIndicesArgs";
import { FindFirstItemGameIndicesArgs } from "./args/FindFirstItemGameIndicesArgs";
import { FindFirstItemGameIndicesOrThrowArgs } from "./args/FindFirstItemGameIndicesOrThrowArgs";
import { FindManyItemGameIndicesArgs } from "./args/FindManyItemGameIndicesArgs";
import { FindUniqueItemGameIndicesArgs } from "./args/FindUniqueItemGameIndicesArgs";
import { FindUniqueItemGameIndicesOrThrowArgs } from "./args/FindUniqueItemGameIndicesOrThrowArgs";
import { GroupByItemGameIndicesArgs } from "./args/GroupByItemGameIndicesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ItemGameIndices } from "../../../models/ItemGameIndices";
import { AggregateItemGameIndices } from "../../outputs/AggregateItemGameIndices";
import { ItemGameIndicesGroupBy } from "../../outputs/ItemGameIndicesGroupBy";

@TypeGraphQL.Resolver(_of => ItemGameIndices)
export class ItemGameIndicesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateItemGameIndices, {
    nullable: false
  })
  async aggregateItemGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateItemGameIndicesArgs): Promise<AggregateItemGameIndices> {
    return getPrismaFromContext(ctx).itemGameIndices.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => ItemGameIndices, {
    nullable: true
  })
  async findFirstItemGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstItemGameIndicesArgs): Promise<ItemGameIndices | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemGameIndices.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ItemGameIndices, {
    nullable: true
  })
  async findFirstItemGameIndicesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstItemGameIndicesOrThrowArgs): Promise<ItemGameIndices | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemGameIndices.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ItemGameIndices], {
    nullable: false
  })
  async findManyItemGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyItemGameIndicesArgs): Promise<ItemGameIndices[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemGameIndices.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ItemGameIndices, {
    nullable: true
  })
  async findUniqueItemGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueItemGameIndicesArgs): Promise<ItemGameIndices | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemGameIndices.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ItemGameIndices, {
    nullable: true
  })
  async findUniqueItemGameIndicesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueItemGameIndicesOrThrowArgs): Promise<ItemGameIndices | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemGameIndices.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ItemGameIndicesGroupBy], {
    nullable: false
  })
  async groupByItemGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByItemGameIndicesArgs): Promise<ItemGameIndicesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemGameIndices.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}