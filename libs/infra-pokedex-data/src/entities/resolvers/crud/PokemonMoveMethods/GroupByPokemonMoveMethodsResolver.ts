import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPokemonMoveMethodsArgs } from "./args/GroupByPokemonMoveMethodsArgs";
import { PokemonMoveMethods } from "../../../models/PokemonMoveMethods";
import { PokemonMoveMethodsGroupBy } from "../../outputs/PokemonMoveMethodsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMoveMethods)
export class GroupByPokemonMoveMethodsResolver {
  @TypeGraphQL.Query(_returns => [PokemonMoveMethodsGroupBy], {
    nullable: false
  })
  async groupByPokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonMoveMethodsArgs): Promise<PokemonMoveMethodsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoveMethods.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
