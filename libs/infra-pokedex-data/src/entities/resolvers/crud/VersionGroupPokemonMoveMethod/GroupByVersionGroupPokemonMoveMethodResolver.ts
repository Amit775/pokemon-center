import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByVersionGroupPokemonMoveMethodArgs } from "./args/GroupByVersionGroupPokemonMoveMethodArgs";
import { VersionGroupPokemonMoveMethod } from "../../../models/VersionGroupPokemonMoveMethod";
import { VersionGroupPokemonMoveMethodGroupBy } from "../../outputs/VersionGroupPokemonMoveMethodGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroupPokemonMoveMethod)
export class GroupByVersionGroupPokemonMoveMethodResolver {
  @TypeGraphQL.Query(_returns => [VersionGroupPokemonMoveMethodGroupBy], {
    nullable: false
  })
  async groupByVersionGroupPokemonMoveMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByVersionGroupPokemonMoveMethodArgs): Promise<VersionGroupPokemonMoveMethodGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
