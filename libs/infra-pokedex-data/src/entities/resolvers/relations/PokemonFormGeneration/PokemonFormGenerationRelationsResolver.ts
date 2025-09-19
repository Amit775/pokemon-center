import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Generation } from "../../../models/Generation";
import { PokemonForm } from "../../../models/PokemonForm";
import { PokemonFormGeneration } from "../../../models/PokemonFormGeneration";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormGeneration)
export class PokemonFormGenerationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => PokemonForm, {
    nullable: false
  })
  async pokemonForm(@TypeGraphQL.Root() pokemonFormGeneration: PokemonFormGeneration, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<PokemonForm> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormGenerations.findUniqueOrThrow({
      where: {
        pokemon_form_id_generation_id: {
          pokemon_form_id: pokemonFormGeneration.pokemon_form_id,
          generation_id: pokemonFormGeneration.generation_id,
        },
      },
    }).pokemonForm({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Generation, {
    nullable: false
  })
  async generation(@TypeGraphQL.Root() pokemonFormGeneration: PokemonFormGeneration, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Generation> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormGenerations.findUniqueOrThrow({
      where: {
        pokemon_form_id_generation_id: {
          pokemon_form_id: pokemonFormGeneration.pokemon_form_id,
          generation_id: pokemonFormGeneration.generation_id,
        },
      },
    }).generation({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
