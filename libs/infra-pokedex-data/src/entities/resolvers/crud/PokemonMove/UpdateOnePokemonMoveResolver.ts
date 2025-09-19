import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOnePokemonMoveArgs } from "./args/UpdateOnePokemonMoveArgs";
import { PokemonMove } from "../../../models/PokemonMove";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMove)
export class UpdateOnePokemonMoveResolver {
  @TypeGraphQL.Mutation(_returns => PokemonMove, {
    nullable: true
  })
  async updateOnePokemonMove(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOnePokemonMoveArgs): Promise<PokemonMove | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoves.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
