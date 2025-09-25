import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateNatureArgs } from "./args/AggregateNatureArgs";
import { FindFirstNatureArgs } from "./args/FindFirstNatureArgs";
import { FindFirstNatureOrThrowArgs } from "./args/FindFirstNatureOrThrowArgs";
import { FindManyNatureArgs } from "./args/FindManyNatureArgs";
import { FindUniqueNatureArgs } from "./args/FindUniqueNatureArgs";
import { FindUniqueNatureOrThrowArgs } from "./args/FindUniqueNatureOrThrowArgs";
import { GroupByNatureArgs } from "./args/GroupByNatureArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Nature } from "../../../models/Nature";
import { AggregateNature } from "../../outputs/AggregateNature";
import { NatureGroupBy } from "../../outputs/NatureGroupBy";

@TypeGraphQL.Resolver(_of => Nature)
export class NatureCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateNature, {
    nullable: false
  })
  async aggregateNature(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateNatureArgs): Promise<AggregateNature> {
    return getPrismaFromContext(ctx).natures.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => Nature, {
    nullable: true
  })
  async findFirstNature(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstNatureArgs): Promise<Nature | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natures.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Nature, {
    nullable: true
  })
  async findFirstNatureOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstNatureOrThrowArgs): Promise<Nature | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natures.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Nature], {
    nullable: false
  })
  async natures(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyNatureArgs): Promise<Nature[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natures.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Nature, {
    nullable: true
  })
  async nature(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueNatureArgs): Promise<Nature | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natures.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Nature, {
    nullable: true
  })
  async getNature(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueNatureOrThrowArgs): Promise<Nature | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natures.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [NatureGroupBy], {
    nullable: false
  })
  async groupByNature(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByNatureArgs): Promise<NatureGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natures.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}