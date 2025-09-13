import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonMoveMethodsArgs } from "./args/FindFirstPokemonMoveMethodsArgs";
import { PokemonMoveMethods } from "../../../models/PokemonMoveMethods";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMoveMethods)
export class FindFirstPokemonMoveMethodsResolver {
  @TypeGraphQL.Query(_returns => PokemonMoveMethods, {
    nullable: true
  })
  async findFirstPokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonMoveMethodsArgs): Promise<PokemonMoveMethods | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoveMethods.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
