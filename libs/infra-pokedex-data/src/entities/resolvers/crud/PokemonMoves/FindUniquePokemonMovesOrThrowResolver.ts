import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonMovesOrThrowArgs } from "./args/FindUniquePokemonMovesOrThrowArgs";
import { PokemonMoves } from "../../../models/PokemonMoves";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMoves)
export class FindUniquePokemonMovesOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonMoves, {
    nullable: true
  })
  async findUniquePokemonMovesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonMovesOrThrowArgs): Promise<PokemonMoves | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoves.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
