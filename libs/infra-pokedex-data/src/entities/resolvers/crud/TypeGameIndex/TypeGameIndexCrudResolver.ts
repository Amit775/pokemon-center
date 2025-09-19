import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTypeGameIndexArgs } from "./args/AggregateTypeGameIndexArgs";
import { CreateManyAndReturnTypeGameIndexArgs } from "./args/CreateManyAndReturnTypeGameIndexArgs";
import { CreateManyTypeGameIndexArgs } from "./args/CreateManyTypeGameIndexArgs";
import { CreateOneTypeGameIndexArgs } from "./args/CreateOneTypeGameIndexArgs";
import { DeleteManyTypeGameIndexArgs } from "./args/DeleteManyTypeGameIndexArgs";
import { DeleteOneTypeGameIndexArgs } from "./args/DeleteOneTypeGameIndexArgs";
import { FindFirstTypeGameIndexArgs } from "./args/FindFirstTypeGameIndexArgs";
import { FindFirstTypeGameIndexOrThrowArgs } from "./args/FindFirstTypeGameIndexOrThrowArgs";
import { FindManyTypeGameIndexArgs } from "./args/FindManyTypeGameIndexArgs";
import { FindUniqueTypeGameIndexArgs } from "./args/FindUniqueTypeGameIndexArgs";
import { FindUniqueTypeGameIndexOrThrowArgs } from "./args/FindUniqueTypeGameIndexOrThrowArgs";
import { GroupByTypeGameIndexArgs } from "./args/GroupByTypeGameIndexArgs";
import { UpdateManyTypeGameIndexArgs } from "./args/UpdateManyTypeGameIndexArgs";
import { UpdateOneTypeGameIndexArgs } from "./args/UpdateOneTypeGameIndexArgs";
import { UpsertOneTypeGameIndexArgs } from "./args/UpsertOneTypeGameIndexArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { TypeGameIndex } from "../../../models/TypeGameIndex";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTypeGameIndex } from "../../outputs/AggregateTypeGameIndex";
import { CreateManyAndReturnTypeGameIndex } from "../../outputs/CreateManyAndReturnTypeGameIndex";
import { TypeGameIndexGroupBy } from "../../outputs/TypeGameIndexGroupBy";

@TypeGraphQL.Resolver(_of => TypeGameIndex)
export class TypeGameIndexCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateTypeGameIndex, {
    nullable: false
  })
  async aggregateTypeGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTypeGameIndexArgs): Promise<AggregateTypeGameIndex> {
    return getPrismaFromContext(ctx).typeGameIndices.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyTypeGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyTypeGameIndexArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTypeGameIndex], {
    nullable: false
  })
  async createManyAndReturnTypeGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnTypeGameIndexArgs): Promise<CreateManyAndReturnTypeGameIndex[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TypeGameIndex, {
    nullable: false
  })
  async createOneTypeGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneTypeGameIndexArgs): Promise<TypeGameIndex> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTypeGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyTypeGameIndexArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TypeGameIndex, {
    nullable: true
  })
  async deleteOneTypeGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneTypeGameIndexArgs): Promise<TypeGameIndex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TypeGameIndex, {
    nullable: true
  })
  async findFirstTypeGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTypeGameIndexArgs): Promise<TypeGameIndex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TypeGameIndex, {
    nullable: true
  })
  async findFirstTypeGameIndexOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTypeGameIndexOrThrowArgs): Promise<TypeGameIndex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TypeGameIndex], {
    nullable: false
  })
  async typeGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTypeGameIndexArgs): Promise<TypeGameIndex[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TypeGameIndex, {
    nullable: true
  })
  async typeGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTypeGameIndexArgs): Promise<TypeGameIndex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TypeGameIndex, {
    nullable: true
  })
  async getTypeGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTypeGameIndexOrThrowArgs): Promise<TypeGameIndex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TypeGameIndexGroupBy], {
    nullable: false
  })
  async groupByTypeGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTypeGameIndexArgs): Promise<TypeGameIndexGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTypeGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyTypeGameIndexArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TypeGameIndex, {
    nullable: true
  })
  async updateOneTypeGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneTypeGameIndexArgs): Promise<TypeGameIndex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => TypeGameIndex, {
    nullable: false
  })
  async upsertOneTypeGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneTypeGameIndexArgs): Promise<TypeGameIndex> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
