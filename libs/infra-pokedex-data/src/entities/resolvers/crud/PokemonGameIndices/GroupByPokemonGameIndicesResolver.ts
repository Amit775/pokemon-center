import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPokemonGameIndicesArgs } from "./args/GroupByPokemonGameIndicesArgs";
import { PokemonGameIndices } from "../../../models/PokemonGameIndices";
import { PokemonGameIndicesGroupBy } from "../../outputs/PokemonGameIndicesGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonGameIndices)
export class GroupByPokemonGameIndicesResolver {
  @TypeGraphQL.Query(_returns => [PokemonGameIndicesGroupBy], {
    nullable: false
  })
  async groupByPokemonGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonGameIndicesArgs): Promise<PokemonGameIndicesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonGameIndices.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
