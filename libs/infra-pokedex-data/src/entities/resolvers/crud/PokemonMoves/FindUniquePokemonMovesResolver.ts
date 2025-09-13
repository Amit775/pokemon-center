import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonMovesArgs } from "./args/FindUniquePokemonMovesArgs";
import { PokemonMoves } from "../../../models/PokemonMoves";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMoves)
export class FindUniquePokemonMovesResolver {
  @TypeGraphQL.Query(_returns => PokemonMoves, {
    nullable: true
  })
  async findUniquePokemonMoves(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonMovesArgs): Promise<PokemonMoves | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoves.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
