import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPokemonTypesArgs } from "./args/GroupByPokemonTypesArgs";
import { PokemonTypes } from "../../../models/PokemonTypes";
import { PokemonTypesGroupBy } from "../../outputs/PokemonTypesGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonTypes)
export class GroupByPokemonTypesResolver {
  @TypeGraphQL.Query(_returns => [PokemonTypesGroupBy], {
    nullable: false
  })
  async groupByPokemonTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonTypesArgs): Promise<PokemonTypesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonTypes.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
