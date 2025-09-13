import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonEvolutionOrThrowArgs } from "./args/FindUniquePokemonEvolutionOrThrowArgs";
import { PokemonEvolution } from "../../../models/PokemonEvolution";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonEvolution)
export class FindUniquePokemonEvolutionOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonEvolution, {
    nullable: true
  })
  async getPokemonEvolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonEvolutionOrThrowArgs): Promise<PokemonEvolution | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEvolution.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
