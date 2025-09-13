import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTypeEfficacyArgs } from "./args/AggregateTypeEfficacyArgs";
import { FindFirstTypeEfficacyArgs } from "./args/FindFirstTypeEfficacyArgs";
import { FindFirstTypeEfficacyOrThrowArgs } from "./args/FindFirstTypeEfficacyOrThrowArgs";
import { FindManyTypeEfficacyArgs } from "./args/FindManyTypeEfficacyArgs";
import { FindUniqueTypeEfficacyArgs } from "./args/FindUniqueTypeEfficacyArgs";
import { FindUniqueTypeEfficacyOrThrowArgs } from "./args/FindUniqueTypeEfficacyOrThrowArgs";
import { GroupByTypeEfficacyArgs } from "./args/GroupByTypeEfficacyArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { TypeEfficacy } from "../../../models/TypeEfficacy";
import { AggregateTypeEfficacy } from "../../outputs/AggregateTypeEfficacy";
import { TypeEfficacyGroupBy } from "../../outputs/TypeEfficacyGroupBy";

@TypeGraphQL.Resolver(_of => TypeEfficacy)
export class TypeEfficacyCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateTypeEfficacy, {
    nullable: false
  })
  async aggregateTypeEfficacy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTypeEfficacyArgs): Promise<AggregateTypeEfficacy> {
    return getPrismaFromContext(ctx).typeEfficacy.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => TypeEfficacy, {
    nullable: true
  })
  async findFirstTypeEfficacy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTypeEfficacyArgs): Promise<TypeEfficacy | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeEfficacy.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TypeEfficacy, {
    nullable: true
  })
  async findFirstTypeEfficacyOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTypeEfficacyOrThrowArgs): Promise<TypeEfficacy | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeEfficacy.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TypeEfficacy], {
    nullable: false
  })
  async typeEfficacies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTypeEfficacyArgs): Promise<TypeEfficacy[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeEfficacy.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TypeEfficacy, {
    nullable: true
  })
  async typeEfficacy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTypeEfficacyArgs): Promise<TypeEfficacy | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeEfficacy.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => TypeEfficacy, {
    nullable: true
  })
  async getTypeEfficacy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTypeEfficacyOrThrowArgs): Promise<TypeEfficacy | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeEfficacy.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [TypeEfficacyGroupBy], {
    nullable: false
  })
  async groupByTypeEfficacy(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTypeEfficacyArgs): Promise<TypeEfficacyGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeEfficacy.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}