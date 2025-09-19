import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonEvolutionArgs } from "./args/CreateManyAndReturnPokemonEvolutionArgs";
import { PokemonEvolution } from "../../../models/PokemonEvolution";
import { CreateManyAndReturnPokemonEvolution } from "../../outputs/CreateManyAndReturnPokemonEvolution";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonEvolution)
export class CreateManyAndReturnPokemonEvolutionResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonEvolution], {
    nullable: false
  })
  async createManyAndReturnPokemonEvolution(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonEvolutionArgs): Promise<CreateManyAndReturnPokemonEvolution[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEvolution.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
