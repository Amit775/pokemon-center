import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPokemonSpeciesArgs } from "./args/CreateManyAndReturnPokemonSpeciesArgs";
import { PokemonSpecies } from "../../../models/PokemonSpecies";
import { CreateManyAndReturnPokemonSpecies } from "../../outputs/CreateManyAndReturnPokemonSpecies";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonSpecies)
export class CreateManyAndReturnPokemonSpeciesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPokemonSpecies], {
    nullable: false
  })
  async createManyAndReturnPokemonSpecies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPokemonSpeciesArgs): Promise<CreateManyAndReturnPokemonSpecies[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
