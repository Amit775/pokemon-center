import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOnePokemonSpeciesArgs } from "./args/UpdateOnePokemonSpeciesArgs";
import { PokemonSpecies } from "../../../models/PokemonSpecies";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonSpecies)
export class UpdateOnePokemonSpeciesResolver {
  @TypeGraphQL.Mutation(_returns => PokemonSpecies, {
    nullable: true
  })
  async updateOnePokemonSpecies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOnePokemonSpeciesArgs): Promise<PokemonSpecies | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
