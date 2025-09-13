import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyPokemonMoveMethodsArgs } from "./args/FindManyPokemonMoveMethodsArgs";
import { PokemonMoveMethods } from "../../../models/PokemonMoveMethods";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMoveMethods)
export class FindManyPokemonMoveMethodsResolver {
  @TypeGraphQL.Query(_returns => [PokemonMoveMethods], {
    nullable: false
  })
  async findManyPokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonMoveMethodsArgs): Promise<PokemonMoveMethods[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMoveMethods.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
