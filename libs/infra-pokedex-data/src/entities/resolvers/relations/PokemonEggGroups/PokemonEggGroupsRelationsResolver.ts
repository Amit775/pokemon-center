import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EggGroups } from "../../../models/EggGroups";
import { PokemonEggGroups } from "../../../models/PokemonEggGroups";
import { PokemonSpecies } from "../../../models/PokemonSpecies";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonEggGroups)
export class PokemonEggGroupsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => PokemonSpecies, {
    nullable: false
  })
  async species(@TypeGraphQL.Root() pokemonEggGroups: PokemonEggGroups, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<PokemonSpecies> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.findUniqueOrThrow({
      where: {
        species_id_egg_group_id: {
          species_id: pokemonEggGroups.species_id,
          egg_group_id: pokemonEggGroups.egg_group_id,
        },
      },
    }).species({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => EggGroups, {
    nullable: false
  })
  async eggGroup(@TypeGraphQL.Root() pokemonEggGroups: PokemonEggGroups, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<EggGroups> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.findUniqueOrThrow({
      where: {
        species_id_egg_group_id: {
          species_id: pokemonEggGroups.species_id,
          egg_group_id: pokemonEggGroups.egg_group_id,
        },
      },
    }).eggGroup({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
