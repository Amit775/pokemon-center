import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveDamageClassesArgs } from "./args/AggregateMoveDamageClassesArgs";
import { FindFirstMoveDamageClassesArgs } from "./args/FindFirstMoveDamageClassesArgs";
import { FindFirstMoveDamageClassesOrThrowArgs } from "./args/FindFirstMoveDamageClassesOrThrowArgs";
import { FindManyMoveDamageClassesArgs } from "./args/FindManyMoveDamageClassesArgs";
import { FindUniqueMoveDamageClassesArgs } from "./args/FindUniqueMoveDamageClassesArgs";
import { FindUniqueMoveDamageClassesOrThrowArgs } from "./args/FindUniqueMoveDamageClassesOrThrowArgs";
import { GroupByMoveDamageClassesArgs } from "./args/GroupByMoveDamageClassesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { MoveDamageClasses } from "../../../models/MoveDamageClasses";
import { AggregateMoveDamageClasses } from "../../outputs/AggregateMoveDamageClasses";
import { MoveDamageClassesGroupBy } from "../../outputs/MoveDamageClassesGroupBy";

@TypeGraphQL.Resolver(_of => MoveDamageClasses)
export class MoveDamageClassesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveDamageClasses, {
    nullable: false
  })
  async aggregateMoveDamageClasses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveDamageClassesArgs): Promise<AggregateMoveDamageClasses> {
    return getPrismaFromContext(ctx).moveDamageClasses.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => MoveDamageClasses, {
    nullable: true
  })
  async findFirstMoveDamageClasses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveDamageClassesArgs): Promise<MoveDamageClasses | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveDamageClasses, {
    nullable: true
  })
  async findFirstMoveDamageClassesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveDamageClassesOrThrowArgs): Promise<MoveDamageClasses | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveDamageClasses], {
    nullable: false
  })
  async findManyMoveDamageClasses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveDamageClassesArgs): Promise<MoveDamageClasses[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveDamageClasses, {
    nullable: true
  })
  async findUniqueMoveDamageClasses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveDamageClassesArgs): Promise<MoveDamageClasses | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => MoveDamageClasses, {
    nullable: true
  })
  async findUniqueMoveDamageClassesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveDamageClassesOrThrowArgs): Promise<MoveDamageClasses | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [MoveDamageClassesGroupBy], {
    nullable: false
  })
  async groupByMoveDamageClasses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMoveDamageClassesArgs): Promise<MoveDamageClassesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveDamageClasses.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}