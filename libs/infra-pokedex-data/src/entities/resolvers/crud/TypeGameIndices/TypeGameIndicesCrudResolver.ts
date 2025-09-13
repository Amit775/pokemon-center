import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTypeGameIndicesArgs } from "./args/AggregateTypeGameIndicesArgs";
import { FindFirstTypeGameIndicesArgs } from "./args/FindFirstTypeGameIndicesArgs";
import { FindFirstTypeGameIndicesOrThrowArgs } from "./args/FindFirstTypeGameIndicesOrThrowArgs";
import { FindManyTypeGameIndicesArgs } from "./args/FindManyTypeGameIndicesArgs";
import { FindUniqueTypeGameIndicesArgs } from "./args/FindUniqueTypeGameIndicesArgs";
import { FindUniqueTypeGameIndicesOrThrowArgs } from "./args/FindUniqueTypeGameIndicesOrThrowArgs";
import { GroupByTypeGameIndicesArgs } from "./args/GroupByTypeGameIndicesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { TypeGameIndices } from "../../../models/TypeGameIndices";
import { AggregateTypeGameIndices } from "../../outputs/AggregateTypeGameIndices";
import { TypeGameIndicesGroupBy } from "../../outputs/TypeGameIndicesGroupBy";

@TypeGraphQL.Resolver(_of => TypeGameIndices)
export class TypeGameIndicesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateTypeGameIndices, {
    nullable: false
  })
  async aggregateTypeGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTypeGameIndicesArgs): Promise<AggregateTypeGameIndices> {
    return getPrismaFromContext(ctx).typeGameIndices.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => TypeGameIndices, {
    nullable: true
  })
  async findFirstTypeGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTypeGameIndicesArgs): Promise<TypeGameIndices | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TypeGameIndices, {
    nullable: true
  })
  async findFirstTypeGameIndicesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTypeGameIndicesOrThrowArgs): Promise<TypeGameIndices | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TypeGameIndices], {
    nullable: false
  })
  async findManyTypeGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTypeGameIndicesArgs): Promise<TypeGameIndices[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TypeGameIndices, {
    nullable: true
  })
  async findUniqueTypeGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTypeGameIndicesArgs): Promise<TypeGameIndices | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TypeGameIndices, {
    nullable: true
  })
  async findUniqueTypeGameIndicesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTypeGameIndicesOrThrowArgs): Promise<TypeGameIndices | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TypeGameIndicesGroupBy], {
    nullable: false
  })
  async groupByTypeGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTypeGameIndicesArgs): Promise<TypeGameIndicesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}