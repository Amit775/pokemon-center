import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByEvolutionTriggerArgs } from "./args/GroupByEvolutionTriggerArgs";
import { EvolutionTrigger } from "../../../models/EvolutionTrigger";
import { EvolutionTriggerGroupBy } from "../../outputs/EvolutionTriggerGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionTrigger)
export class GroupByEvolutionTriggerResolver {
  @TypeGraphQL.Query(_returns => [EvolutionTriggerGroupBy], {
    nullable: false
  })
  async groupByEvolutionTrigger(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEvolutionTriggerArgs): Promise<EvolutionTriggerGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).evolutionTriggers.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
