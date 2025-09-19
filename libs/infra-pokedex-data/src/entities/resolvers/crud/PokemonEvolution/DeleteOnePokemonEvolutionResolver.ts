import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOnePokemonEvolutionArgs } from "./args/DeleteOnePokemonEvolutionArgs";
import { PokemonEvolution } from "../../../models/PokemonEvolution";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonEvolution)
export class DeleteOnePokemonEvolutionResolver {
  @TypeGraphQL.Mutation(_returns => PokemonEvolution, {
    nullable: true
  })
  async deleteOnePokemonEvolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePokemonEvolutionArgs): Promise<PokemonEvolution | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEvolution.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
