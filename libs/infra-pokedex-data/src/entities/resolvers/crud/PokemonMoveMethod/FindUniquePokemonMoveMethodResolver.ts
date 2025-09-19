import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonMoveMethodArgs } from "./args/FindUniquePokemonMoveMethodArgs";
import { PokemonMoveMethod } from "../../../models/PokemonMoveMethod";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMoveMethod)
export class FindUniquePokemonMoveMethodResolver {
  @TypeGraphQL.Query(_returns => PokemonMoveMethod, {
    nullable: true
  })
  async pokemonMoveMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonMoveMethodArgs): Promise<PokemonMoveMethod | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoveMethods.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
