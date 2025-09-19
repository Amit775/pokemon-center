import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonMoveArgs } from "./args/FindUniquePokemonMoveArgs";
import { PokemonMove } from "../../../models/PokemonMove";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMove)
export class FindUniquePokemonMoveResolver {
  @TypeGraphQL.Query(_returns => PokemonMove, {
    nullable: true
  })
  async pokemonMove(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonMoveArgs): Promise<PokemonMove | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoves.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
