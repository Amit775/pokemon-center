import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonMoveMethodsOrThrowArgs } from "./args/FindFirstPokemonMoveMethodsOrThrowArgs";
import { PokemonMoveMethods } from "../../../models/PokemonMoveMethods";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMoveMethods)
export class FindFirstPokemonMoveMethodsOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonMoveMethods, {
    nullable: true
  })
  async findFirstPokemonMoveMethodsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonMoveMethodsOrThrowArgs): Promise<PokemonMoveMethods | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoveMethods.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
