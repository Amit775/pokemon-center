import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonStatArgs } from "./args/FindFirstPokemonStatArgs";
import { PokemonStat } from "../../../models/PokemonStat";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonStat)
export class FindFirstPokemonStatResolver {
  @TypeGraphQL.Query(_returns => PokemonStat, {
    nullable: true
  })
  async findFirstPokemonStat(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonStatArgs): Promise<PokemonStat | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonStats.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
