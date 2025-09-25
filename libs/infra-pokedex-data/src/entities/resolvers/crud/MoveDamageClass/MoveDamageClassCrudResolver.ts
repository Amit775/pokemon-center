import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveDamageClassArgs } from "./args/AggregateMoveDamageClassArgs";
import { FindFirstMoveDamageClassArgs } from "./args/FindFirstMoveDamageClassArgs";
import { FindFirstMoveDamageClassOrThrowArgs } from "./args/FindFirstMoveDamageClassOrThrowArgs";
import { FindManyMoveDamageClassArgs } from "./args/FindManyMoveDamageClassArgs";
import { FindUniqueMoveDamageClassArgs } from "./args/FindUniqueMoveDamageClassArgs";
import { FindUniqueMoveDamageClassOrThrowArgs } from "./args/FindUniqueMoveDamageClassOrThrowArgs";
import { GroupByMoveDamageClassArgs } from "./args/GroupByMoveDamageClassArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MoveDamageClass } from "../../../models/MoveDamageClass";
import { AggregateMoveDamageClass } from "../../outputs/AggregateMoveDamageClass";
import { MoveDamageClassGroupBy } from "../../outputs/MoveDamageClassGroupBy";

@TypeGraphQL.Resolver(_of => MoveDamageClass)
export class MoveDamageClassCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveDamageClass, {
    nullable: false
  })
  async aggregateMoveDamageClass(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveDamageClassArgs): Promise<AggregateMoveDamageClass> {
    return getPrismaFromContext(ctx).moveDamageClasses.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => MoveDamageClass, {
    nullable: true
  })
  async findFirstMoveDamageClass(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveDamageClassArgs): Promise<MoveDamageClass | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveDamageClass, {
    nullable: true
  })
  async findFirstMoveDamageClassOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveDamageClassOrThrowArgs): Promise<MoveDamageClass | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveDamageClass], {
    nullable: false
  })
  async moveDamageClasses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveDamageClassArgs): Promise<MoveDamageClass[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveDamageClass, {
    nullable: true
  })
  async moveDamageClass(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveDamageClassArgs): Promise<MoveDamageClass | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveDamageClass, {
    nullable: true
  })
  async getMoveDamageClass(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveDamageClassOrThrowArgs): Promise<MoveDamageClass | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveDamageClassGroupBy], {
    nullable: false
  })
  async groupByMoveDamageClass(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveDamageClassArgs): Promise<MoveDamageClassGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}