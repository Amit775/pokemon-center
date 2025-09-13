import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonMovesArgs } from "./args/FindFirstPokemonMovesArgs";
import { PokemonMoves } from "../../../models/PokemonMoves";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMoves)
export class FindFirstPokemonMovesResolver {
  @TypeGraphQL.Query(_returns => PokemonMoves, {
    nullable: true
  })
  async findFirstPokemonMoves(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonMovesArgs): Promise<PokemonMoves | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoves.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
