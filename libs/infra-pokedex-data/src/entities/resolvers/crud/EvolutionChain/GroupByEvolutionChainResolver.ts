import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByEvolutionChainArgs } from "./args/GroupByEvolutionChainArgs";
import { EvolutionChain } from "../../../models/EvolutionChain";
import { EvolutionChainGroupBy } from "../../outputs/EvolutionChainGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionChain)
export class GroupByEvolutionChainResolver {
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
