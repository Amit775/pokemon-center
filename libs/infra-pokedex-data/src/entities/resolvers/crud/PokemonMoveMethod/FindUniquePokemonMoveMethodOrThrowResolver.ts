import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonMoveMethodOrThrowArgs } from "./args/FindUniquePokemonMoveMethodOrThrowArgs";
import { PokemonMoveMethod } from "../../../models/PokemonMoveMethod";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMoveMethod)
export class FindUniquePokemonMoveMethodOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonMoveMethod, {
    nullable: true
  })
  async getPokemonMoveMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonMoveMethodOrThrowArgs): Promise<PokemonMoveMethod | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoveMethods.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
