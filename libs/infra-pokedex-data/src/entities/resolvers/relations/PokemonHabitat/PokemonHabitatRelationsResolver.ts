import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { PokemonHabitat } from "../../../models/PokemonHabitat";
import { PokemonSpecies } from "../../../models/PokemonSpecies";
import { PokemonHabitatSpeciesArgs } from "./args/PokemonHabitatSpeciesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonHabitat)
export class PokemonHabitatRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [PokemonSpecies], {
    nullable: false
  })
  async species(@TypeGraphQL.Root() pokemonHabitat: PokemonHabitat, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonHabitatSpeciesArgs): Promise<PokemonSpecies[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonHabitats.findUniqueOrThrow({
      where: {
        id: pokemonHabitat.id,
      },
    }).species({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
