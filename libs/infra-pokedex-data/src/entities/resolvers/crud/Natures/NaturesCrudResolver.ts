import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateNaturesArgs } from "./args/AggregateNaturesArgs";
import { FindFirstNaturesArgs } from "./args/FindFirstNaturesArgs";
import { FindFirstNaturesOrThrowArgs } from "./args/FindFirstNaturesOrThrowArgs";
import { FindManyNaturesArgs } from "./args/FindManyNaturesArgs";
import { FindUniqueNaturesArgs } from "./args/FindUniqueNaturesArgs";
import { FindUniqueNaturesOrThrowArgs } from "./args/FindUniqueNaturesOrThrowArgs";
import { GroupByNaturesArgs } from "./args/GroupByNaturesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Natures } from "../../../models/Natures";
import { AggregateNatures } from "../../outputs/AggregateNatures";
import { NaturesGroupBy } from "../../outputs/NaturesGroupBy";

@TypeGraphQL.Resolver(_of => Natures)
export class NaturesCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateNatures, {
    nullable: false
  })
  async aggregateNatures(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateNaturesArgs): Promise<AggregateNatures> {
    return getPrismaFromContext(ctx).natures.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => Natures, {
    nullable: true
  })
  async findFirstNatures(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstNaturesArgs): Promise<Natures | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natures.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Natures, {
    nullable: true
  })
  async findFirstNaturesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstNaturesOrThrowArgs): Promise<Natures | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natures.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Natures], {
    nullable: false
  })
  async findManyNatures(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyNaturesArgs): Promise<Natures[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natures.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Natures, {
    nullable: true
  })
  async findUniqueNatures(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueNaturesArgs): Promise<Natures | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natures.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Natures, {
    nullable: true
  })
  async findUniqueNaturesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueNaturesOrThrowArgs): Promise<Natures | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natures.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [NaturesGroupBy], {
    nullable: false
  })
  async groupByNatures(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByNaturesArgs): Promise<NaturesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natures.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}