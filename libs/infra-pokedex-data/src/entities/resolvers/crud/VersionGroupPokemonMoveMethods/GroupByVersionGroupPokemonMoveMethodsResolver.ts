import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByVersionGroupPokemonMoveMethodsArgs } from "./args/GroupByVersionGroupPokemonMoveMethodsArgs";
import { VersionGroupPokemonMoveMethods } from "../../../models/VersionGroupPokemonMoveMethods";
import { VersionGroupPokemonMoveMethodsGroupBy } from "../../outputs/VersionGroupPokemonMoveMethodsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroupPokemonMoveMethods)
export class GroupByVersionGroupPokemonMoveMethodsResolver {
  @TypeGraphQL.Query(_returns => [VersionGroupPokemonMoveMethodsGroupBy], {
    nullable: false
  })
  async groupByVersionGroupPokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByVersionGroupPokemonMoveMethodsArgs): Promise<VersionGroupPokemonMoveMethodsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).versionGroupPokemonMoveMethods.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
