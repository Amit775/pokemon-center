import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByEvolutionTriggersArgs } from "./args/GroupByEvolutionTriggersArgs";
import { EvolutionTriggers } from "../../../models/EvolutionTriggers";
import { EvolutionTriggersGroupBy } from "../../outputs/EvolutionTriggersGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionTriggers)
export class GroupByEvolutionTriggersResolver {
  @TypeGraphQL.Query(_returns => [EvolutionTriggersGroupBy], {
    nullable: false
  })
  async groupByEvolutionTriggers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEvolutionTriggersArgs): Promise<EvolutionTriggersGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
