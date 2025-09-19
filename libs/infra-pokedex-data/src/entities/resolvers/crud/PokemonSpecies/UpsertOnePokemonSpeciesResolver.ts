import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOnePokemonSpeciesArgs } from "./args/UpsertOnePokemonSpeciesArgs";
import { PokemonSpecies } from "../../../models/PokemonSpecies";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonSpecies)
export class UpsertOnePokemonSpeciesResolver {
  @TypeGraphQL.Mutation(_returns => PokemonSpecies, {
    nullable: false
  })
  async upsertOnePokemonSpecies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePokemonSpeciesArgs): Promise<PokemonSpecies> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonSpecies.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
