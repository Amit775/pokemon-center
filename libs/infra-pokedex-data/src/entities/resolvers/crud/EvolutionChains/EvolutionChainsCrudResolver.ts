import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEvolutionChainsArgs } from "./args/AggregateEvolutionChainsArgs";
import { FindFirstEvolutionChainsArgs } from "./args/FindFirstEvolutionChainsArgs";
import { FindFirstEvolutionChainsOrThrowArgs } from "./args/FindFirstEvolutionChainsOrThrowArgs";
import { FindManyEvolutionChainsArgs } from "./args/FindManyEvolutionChainsArgs";
import { FindUniqueEvolutionChainsArgs } from "./args/FindUniqueEvolutionChainsArgs";
import { FindUniqueEvolutionChainsOrThrowArgs } from "./args/FindUniqueEvolutionChainsOrThrowArgs";
import { GroupByEvolutionChainsArgs } from "./args/GroupByEvolutionChainsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { EvolutionChains } from "../../../models/EvolutionChains";
import { AggregateEvolutionChains } from "../../outputs/AggregateEvolutionChains";
import { EvolutionChainsGroupBy } from "../../outputs/EvolutionChainsGroupBy";

@TypeGraphQL.Resolver(_of => EvolutionChains)
export class EvolutionChainsCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateEvolutionChains, {
    nullable: false
  })
  async aggregateEvolutionChains(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEvolutionChainsArgs): Promise<AggregateEvolutionChains> {
    return getPrismaFromContext(ctx).evolutionChains.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Query(_returns => EvolutionChains, {
    nullable: true
  })
  async findFirstEvolutionChains(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEvolutionChainsArgs): Promise<EvolutionChains | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EvolutionChains, {
    nullable: true
  })
  async findFirstEvolutionChainsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEvolutionChainsOrThrowArgs): Promise<EvolutionChains | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EvolutionChains], {
    nullable: false
  })
  async findManyEvolutionChains(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyEvolutionChainsArgs): Promise<EvolutionChains[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EvolutionChains, {
    nullable: true
  })
  async findUniqueEvolutionChains(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEvolutionChainsArgs): Promise<EvolutionChains | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => EvolutionChains, {
    nullable: true
  })
  async findUniqueEvolutionChainsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueEvolutionChainsOrThrowArgs): Promise<EvolutionChains | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [EvolutionChainsGroupBy], {
    nullable: false
  })
  async groupByEvolutionChains(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEvolutionChainsArgs): Promise<EvolutionChainsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionChains.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

}