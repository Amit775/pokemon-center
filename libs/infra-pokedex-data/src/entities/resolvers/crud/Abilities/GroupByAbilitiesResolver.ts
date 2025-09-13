import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByAbilitiesArgs } from "./args/GroupByAbilitiesArgs";
import { Abilities } from "../../../models/Abilities";
import { AbilitiesGroupBy } from "../../outputs/AbilitiesGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Abilities)
export class GroupByAbilitiesResolver {
  @TypeGraphQL.Query(_returns => [AbilitiesGroupBy], {
    nullable: false
  })
  async groupByAbilities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAbilitiesArgs): Promise<AbilitiesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).abilities.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
