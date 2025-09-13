import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByEvolutionChainsArgs } from "./args/GroupByEvolutionChainsArgs";
import { EvolutionChains } from "../../../models/EvolutionChains";
import { EvolutionChainsGroupBy } from "../../outputs/EvolutionChainsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionChains)
export class GroupByEvolutionChainsResolver {
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
