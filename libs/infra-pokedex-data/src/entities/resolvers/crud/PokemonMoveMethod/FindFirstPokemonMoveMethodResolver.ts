import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonMoveMethodArgs } from "./args/FindFirstPokemonMoveMethodArgs";
import { PokemonMoveMethod } from "../../../models/PokemonMoveMethod";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMoveMethod)
export class FindFirstPokemonMoveMethodResolver {
  @TypeGraphQL.Query(_returns => PokemonMoveMethod, {
    nullable: true
  })
  async findFirstPokemonMoveMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonMoveMethodArgs): Promise<PokemonMoveMethod | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoveMethods.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
