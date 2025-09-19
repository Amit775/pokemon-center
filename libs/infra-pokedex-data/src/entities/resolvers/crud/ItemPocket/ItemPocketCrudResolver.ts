import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateItemPocketArgs } from "./args/AggregateItemPocketArgs";
import { CreateManyAndReturnItemPocketArgs } from "./args/CreateManyAndReturnItemPocketArgs";
import { CreateManyItemPocketArgs } from "./args/CreateManyItemPocketArgs";
import { CreateOneItemPocketArgs } from "./args/CreateOneItemPocketArgs";
import { DeleteManyItemPocketArgs } from "./args/DeleteManyItemPocketArgs";
import { DeleteOneItemPocketArgs } from "./args/DeleteOneItemPocketArgs";
import { FindFirstItemPocketArgs } from "./args/FindFirstItemPocketArgs";
import { FindFirstItemPocketOrThrowArgs } from "./args/FindFirstItemPocketOrThrowArgs";
import { FindManyItemPocketArgs } from "./args/FindManyItemPocketArgs";
import { FindUniqueItemPocketArgs } from "./args/FindUniqueItemPocketArgs";
import { FindUniqueItemPocketOrThrowArgs } from "./args/FindUniqueItemPocketOrThrowArgs";
import { GroupByItemPocketArgs } from "./args/GroupByItemPocketArgs";
import { UpdateManyItemPocketArgs } from "./args/UpdateManyItemPocketArgs";
import { UpdateOneItemPocketArgs } from "./args/UpdateOneItemPocketArgs";
import { UpsertOneItemPocketArgs } from "./args/UpsertOneItemPocketArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ItemPocket } from "../../../models/ItemPocket";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateItemPocket } from "../../outputs/AggregateItemPocket";
import { CreateManyAndReturnItemPocket } from "../../outputs/CreateManyAndReturnItemPocket";
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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyItemPocket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyItemPocketArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemPockets.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnItemPocket], {
    nullable: false
  })
  async createManyAndReturnItemPocket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnItemPocketArgs): Promise<CreateManyAndReturnItemPocket[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemPockets.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ItemPocket, {
    nullable: false
  })
  async createOneItemPocket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneItemPocketArgs): Promise<ItemPocket> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemPockets.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyItemPocket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyItemPocketArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemPockets.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ItemPocket, {
    nullable: true
  })
  async deleteOneItemPocket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneItemPocketArgs): Promise<ItemPocket | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemPockets.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyItemPocket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyItemPocketArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemPockets.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ItemPocket, {
    nullable: true
  })
  async updateOneItemPocket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneItemPocketArgs): Promise<ItemPocket | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemPockets.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ItemPocket, {
    nullable: false
  })
  async upsertOneItemPocket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneItemPocketArgs): Promise<ItemPocket> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemPockets.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
