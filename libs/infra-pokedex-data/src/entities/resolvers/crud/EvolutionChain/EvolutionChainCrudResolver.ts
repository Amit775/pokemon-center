import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEvolutionChainArgs } from "./args/AggregateEvolutionChainArgs";
import { FindFirstEvolutionChainArgs } from "./args/FindFirstEvolutionChainArgs";
import { FindFirstEvolutionChainOrThrowArgs } from "./args/FindFirstEvolutionChainOrThrowArgs";
import { FindManyEvolutionChainArgs } from "./args/FindManyEvolutionChainArgs";
import { FindUniqueEvolutionChainArgs } from "./args/FindUniqueEvolutionChainArgs";
import { FindUniqueEvolutionChainOrThrowArgs } from "./args/FindUniqueEvolutionChainOrThrowArgs";
import { GroupByEvolutionChainArgs } from "./args/GroupByEvolutionChainArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { EvolutionChain } from "../../../models/EvolutionChain";
import { AggregateEvolutionChain } from "../../outputs/AggregateEvolutionChain";
import { EvolutionChainGroupBy } from "../../outputs/EvolutionChainGroupBy";

@TypeGraphQL.Resolver(_of => EvolutionChain)
export class EvolutionChainCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateEvolutionChain, {
    nullable: false
  })
  async aggregateEvolutionChain(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEvolutionChainArgs): Promise<AggregateEvolutionChain> {
    return getPrismaFromContext(ctx).evolutionChains.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => EvolutionChain, {
    nullable: true
  })
  async findFirstEvolutionChain(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEvolutionChainArgs): Promise<EvolutionChain | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EvolutionChain, {
    nullable: true
  })
  async findFirstEvolutionChainOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEvolutionChainOrThrowArgs): Promise<EvolutionChain | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EvolutionChain], {
    nullable: false
  })
  async evolutionChains(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyEvolutionChainArgs): Promise<EvolutionChain[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EvolutionChain, {
    nullable: true
  })
  async evolutionChain(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEvolutionChainArgs): Promise<EvolutionChain | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EvolutionChain, {
    nullable: true
  })
  async getEvolutionChain(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEvolutionChainOrThrowArgs): Promise<EvolutionChain | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EvolutionChainGroupBy], {
    nullable: false
  })
  async groupByEvolutionChain(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEvolutionChainArgs): Promise<EvolutionChainGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}