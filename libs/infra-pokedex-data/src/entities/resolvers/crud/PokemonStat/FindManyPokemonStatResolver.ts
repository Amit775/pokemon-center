import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyPokemonStatArgs } from "./args/FindManyPokemonStatArgs";
import { PokemonStat } from "../../../models/PokemonStat";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonStat)
export class FindManyPokemonStatResolver {
  @TypeGraphQL.Query(_returns => [PokemonStat], {
    nullable: false
  })
  async pokemonStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonStatArgs): Promise<PokemonStat[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonStats.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
