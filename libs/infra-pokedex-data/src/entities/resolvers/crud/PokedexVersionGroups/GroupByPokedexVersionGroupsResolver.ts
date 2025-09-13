import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPokedexVersionGroupsArgs } from "./args/GroupByPokedexVersionGroupsArgs";
import { PokedexVersionGroups } from "../../../models/PokedexVersionGroups";
import { PokedexVersionGroupsGroupBy } from "../../outputs/PokedexVersionGroupsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokedexVersionGroups)
export class GroupByPokedexVersionGroupsResolver {
  @TypeGraphQL.Query(_returns => [PokedexVersionGroupsGroupBy], {
    nullable: false
  })
  async groupByPokedexVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokedexVersionGroupsArgs): Promise<PokedexVersionGroupsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokedexVersionGroups.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
