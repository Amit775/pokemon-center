import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateItemFlingEffectArgs } from "./args/AggregateItemFlingEffectArgs";
import { CreateManyAndReturnItemFlingEffectArgs } from "./args/CreateManyAndReturnItemFlingEffectArgs";
import { CreateManyItemFlingEffectArgs } from "./args/CreateManyItemFlingEffectArgs";
import { CreateOneItemFlingEffectArgs } from "./args/CreateOneItemFlingEffectArgs";
import { DeleteManyItemFlingEffectArgs } from "./args/DeleteManyItemFlingEffectArgs";
import { DeleteOneItemFlingEffectArgs } from "./args/DeleteOneItemFlingEffectArgs";
import { FindFirstItemFlingEffectArgs } from "./args/FindFirstItemFlingEffectArgs";
import { FindFirstItemFlingEffectOrThrowArgs } from "./args/FindFirstItemFlingEffectOrThrowArgs";
import { FindManyItemFlingEffectArgs } from "./args/FindManyItemFlingEffectArgs";
import { FindUniqueItemFlingEffectArgs } from "./args/FindUniqueItemFlingEffectArgs";
import { FindUniqueItemFlingEffectOrThrowArgs } from "./args/FindUniqueItemFlingEffectOrThrowArgs";
import { GroupByItemFlingEffectArgs } from "./args/GroupByItemFlingEffectArgs";
import { UpdateManyItemFlingEffectArgs } from "./args/UpdateManyItemFlingEffectArgs";
import { UpdateOneItemFlingEffectArgs } from "./args/UpdateOneItemFlingEffectArgs";
import { UpsertOneItemFlingEffectArgs } from "./args/UpsertOneItemFlingEffectArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ItemFlingEffect } from "../../../models/ItemFlingEffect";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateItemFlingEffect } from "../../outputs/AggregateItemFlingEffect";
import { CreateManyAndReturnItemFlingEffect } from "../../outputs/CreateManyAndReturnItemFlingEffect";
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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyItemFlingEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyItemFlingEffectArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnItemFlingEffect], {
    nullable: false
  })
  async createManyAndReturnItemFlingEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnItemFlingEffectArgs): Promise<CreateManyAndReturnItemFlingEffect[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ItemFlingEffect, {
    nullable: false
  })
  async createOneItemFlingEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneItemFlingEffectArgs): Promise<ItemFlingEffect> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyItemFlingEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyItemFlingEffectArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ItemFlingEffect, {
    nullable: true
  })
  async deleteOneItemFlingEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneItemFlingEffectArgs): Promise<ItemFlingEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyItemFlingEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyItemFlingEffectArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ItemFlingEffect, {
    nullable: true
  })
  async updateOneItemFlingEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneItemFlingEffectArgs): Promise<ItemFlingEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ItemFlingEffect, {
    nullable: false
  })
  async upsertOneItemFlingEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneItemFlingEffectArgs): Promise<ItemFlingEffect> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemFlingEffects.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
