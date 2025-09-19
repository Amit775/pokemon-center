import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonMoveOrThrowArgs } from "./args/FindFirstPokemonMoveOrThrowArgs";
import { PokemonMove } from "../../../models/PokemonMove";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMove)
export class FindFirstPokemonMoveOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonMove, {
    nullable: true
  })
  async findFirstPokemonMoveOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonMoveOrThrowArgs): Promise<PokemonMove | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoves.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
