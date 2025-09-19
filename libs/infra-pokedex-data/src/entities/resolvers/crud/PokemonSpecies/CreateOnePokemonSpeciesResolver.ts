import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOnePokemonSpeciesArgs } from "./args/CreateOnePokemonSpeciesArgs";
import { PokemonSpecies } from "../../../models/PokemonSpecies";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonSpecies)
export class CreateOnePokemonSpeciesResolver {
  @TypeGraphQL.Mutation(_returns => PokemonSpecies, {
    nullable: false
  })
  async createOnePokemonSpecies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOnePokemonSpeciesArgs): Promise<PokemonSpecies> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
