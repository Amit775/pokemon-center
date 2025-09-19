import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOnePokemonEvolutionArgs } from "./args/CreateOnePokemonEvolutionArgs";
import { PokemonEvolution } from "../../../models/PokemonEvolution";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonEvolution)
export class CreateOnePokemonEvolutionResolver {
  @TypeGraphQL.Mutation(_returns => PokemonEvolution, {
    nullable: false
  })
  async createOnePokemonEvolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOnePokemonEvolutionArgs): Promise<PokemonEvolution> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEvolution.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
