import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EggGroup } from "../../../models/EggGroup";
import { PokemonEggGroup } from "../../../models/PokemonEggGroup";
import { PokemonSpecies } from "../../../models/PokemonSpecies";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonEggGroup)
export class PokemonEggGroupRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => PokemonSpecies, {
    nullable: false
  })
  async species(@TypeGraphQL.Root() pokemonEggGroup: PokemonEggGroup, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<PokemonSpecies> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.findUniqueOrThrow({
      where: {
        species_id_egg_group_id: {
          species_id: pokemonEggGroup.species_id,
          egg_group_id: pokemonEggGroup.egg_group_id,
        },
      },
    }).species({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => EggGroup, {
    nullable: false
  })
  async eggGroup(@TypeGraphQL.Root() pokemonEggGroup: PokemonEggGroup, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<EggGroup> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.findUniqueOrThrow({
      where: {
        species_id_egg_group_id: {
          species_id: pokemonEggGroup.species_id,
          egg_group_id: pokemonEggGroup.egg_group_id,
        },
      },
    }).eggGroup({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
