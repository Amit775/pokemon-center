import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonMovesOrThrowArgs } from "./args/FindFirstPokemonMovesOrThrowArgs";
import { PokemonMoves } from "../../../models/PokemonMoves";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMoves)
export class FindFirstPokemonMovesOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonMoves, {
    nullable: true
  })
  async findFirstPokemonMovesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonMovesOrThrowArgs): Promise<PokemonMoves | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoves.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
