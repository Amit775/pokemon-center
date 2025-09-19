import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonMoveOrThrowArgs } from "./args/FindUniquePokemonMoveOrThrowArgs";
import { PokemonMove } from "../../../models/PokemonMove";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMove)
export class FindUniquePokemonMoveOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonMove, {
    nullable: true
  })
  async getPokemonMove(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonMoveOrThrowArgs): Promise<PokemonMove | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoves.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
