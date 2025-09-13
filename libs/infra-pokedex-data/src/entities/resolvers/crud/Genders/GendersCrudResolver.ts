import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateGendersArgs } from "./args/AggregateGendersArgs";
import { FindFirstGendersArgs } from "./args/FindFirstGendersArgs";
import { FindFirstGendersOrThrowArgs } from "./args/FindFirstGendersOrThrowArgs";
import { FindManyGendersArgs } from "./args/FindManyGendersArgs";
import { FindUniqueGendersArgs } from "./args/FindUniqueGendersArgs";
import { FindUniqueGendersOrThrowArgs } from "./args/FindUniqueGendersOrThrowArgs";
import { GroupByGendersArgs } from "./args/GroupByGendersArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Genders } from "../../../models/Genders";
import { AggregateGenders } from "../../outputs/AggregateGenders";
import { GendersGroupBy } from "../../outputs/GendersGroupBy";

@TypeGraphQL.Resolver(_of => Genders)
export class GendersCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateGenders, {
    nullable: false
  })
  async aggregateGenders(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGendersArgs): Promise<AggregateGenders> {
    return getPrismaFromContext(ctx).genders.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => Genders, {
    nullable: true
  })
  async findFirstGenders(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGendersArgs): Promise<Genders | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).genders.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Genders, {
    nullable: true
  })
  async findFirstGendersOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstGendersOrThrowArgs): Promise<Genders | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).genders.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Genders], {
    nullable: false
  })
  async findManyGenders(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyGendersArgs): Promise<Genders[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).genders.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Genders, {
    nullable: true
  })
  async findUniqueGenders(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGendersArgs): Promise<Genders | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).genders.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Genders, {
    nullable: true
  })
  async findUniqueGendersOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueGendersOrThrowArgs): Promise<Genders | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).genders.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [GendersGroupBy], {
    nullable: false
  })
  async groupByGenders(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByGendersArgs): Promise<GendersGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).genders.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}