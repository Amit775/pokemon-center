import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonMoveMethodsOrThrowArgs } from "./args/FindUniquePokemonMoveMethodsOrThrowArgs";
import { PokemonMoveMethods } from "../../../models/PokemonMoveMethods";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMoveMethods)
export class FindUniquePokemonMoveMethodsOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonMoveMethods, {
    nullable: true
  })
  async findUniquePokemonMoveMethodsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonMoveMethodsOrThrowArgs): Promise<PokemonMoveMethods | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoveMethods.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
