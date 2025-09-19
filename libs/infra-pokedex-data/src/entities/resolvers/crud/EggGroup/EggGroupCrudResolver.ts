import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEggGroupArgs } from "./args/AggregateEggGroupArgs";
import { CreateManyAndReturnEggGroupArgs } from "./args/CreateManyAndReturnEggGroupArgs";
import { CreateManyEggGroupArgs } from "./args/CreateManyEggGroupArgs";
import { CreateOneEggGroupArgs } from "./args/CreateOneEggGroupArgs";
import { DeleteManyEggGroupArgs } from "./args/DeleteManyEggGroupArgs";
import { DeleteOneEggGroupArgs } from "./args/DeleteOneEggGroupArgs";
import { FindFirstEggGroupArgs } from "./args/FindFirstEggGroupArgs";
import { FindFirstEggGroupOrThrowArgs } from "./args/FindFirstEggGroupOrThrowArgs";
import { FindManyEggGroupArgs } from "./args/FindManyEggGroupArgs";
import { FindUniqueEggGroupArgs } from "./args/FindUniqueEggGroupArgs";
import { FindUniqueEggGroupOrThrowArgs } from "./args/FindUniqueEggGroupOrThrowArgs";
import { GroupByEggGroupArgs } from "./args/GroupByEggGroupArgs";
import { UpdateManyEggGroupArgs } from "./args/UpdateManyEggGroupArgs";
import { UpdateOneEggGroupArgs } from "./args/UpdateOneEggGroupArgs";
import { UpsertOneEggGroupArgs } from "./args/UpsertOneEggGroupArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { EggGroup } from "../../../models/EggGroup";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateEggGroup } from "../../outputs/AggregateEggGroup";
import { CreateManyAndReturnEggGroup } from "../../outputs/CreateManyAndReturnEggGroup";
import { EggGroupGroupBy } from "../../outputs/EggGroupGroupBy";

@TypeGraphQL.Resolver(_of => EggGroup)
export class EggGroupCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateEggGroup, {
    nullable: false
  })
  async aggregateEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEggGroupArgs): Promise<AggregateEggGroup> {
    return getPrismaFromContext(ctx).eggGroups.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyEggGroupArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).eggGroups.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnEggGroup], {
    nullable: false
  })
  async createManyAndReturnEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnEggGroupArgs): Promise<CreateManyAndReturnEggGroup[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).eggGroups.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EggGroup, {
    nullable: false
  })
  async createOneEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneEggGroupArgs): Promise<EggGroup> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).eggGroups.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyEggGroupArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).eggGroups.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EggGroup, {
    nullable: true
  })
  async deleteOneEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneEggGroupArgs): Promise<EggGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).eggGroups.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EggGroup, {
    nullable: true
  })
  async findFirstEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEggGroupArgs): Promise<EggGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).eggGroups.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EggGroup, {
    nullable: true
  })
  async findFirstEggGroupOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEggGroupOrThrowArgs): Promise<EggGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).eggGroups.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EggGroup], {
    nullable: false
  })
  async eggGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyEggGroupArgs): Promise<EggGroup[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).eggGroups.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EggGroup, {
    nullable: true
  })
  async eggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEggGroupArgs): Promise<EggGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).eggGroups.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EggGroup, {
    nullable: true
  })
  async getEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEggGroupOrThrowArgs): Promise<EggGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).eggGroups.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EggGroupGroupBy], {
    nullable: false
  })
  async groupByEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEggGroupArgs): Promise<EggGroupGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).eggGroups.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyEggGroupArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).eggGroups.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EggGroup, {
    nullable: true
  })
  async updateOneEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneEggGroupArgs): Promise<EggGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).eggGroups.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => EggGroup, {
    nullable: false
  })
  async upsertOneEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneEggGroupArgs): Promise<EggGroup> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).eggGroups.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
