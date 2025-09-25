import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTypeGameIndexArgs } from "./args/AggregateTypeGameIndexArgs";
import { FindFirstTypeGameIndexArgs } from "./args/FindFirstTypeGameIndexArgs";
import { FindFirstTypeGameIndexOrThrowArgs } from "./args/FindFirstTypeGameIndexOrThrowArgs";
import { FindManyTypeGameIndexArgs } from "./args/FindManyTypeGameIndexArgs";
import { FindUniqueTypeGameIndexArgs } from "./args/FindUniqueTypeGameIndexArgs";
import { FindUniqueTypeGameIndexOrThrowArgs } from "./args/FindUniqueTypeGameIndexOrThrowArgs";
import { GroupByTypeGameIndexArgs } from "./args/GroupByTypeGameIndexArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { TypeGameIndex } from "../../../models/TypeGameIndex";
import { AggregateTypeGameIndex } from "../../outputs/AggregateTypeGameIndex";
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

}