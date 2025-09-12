import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Generations } from "../../../models/Generations";
import { PokemonFormGenerations } from "../../../models/PokemonFormGenerations";
import { PokemonForms } from "../../../models/PokemonForms";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormGenerations)
export class PokemonFormGenerationsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => PokemonForms, {
    nullable: false
  })
  async pokemonForm(@TypeGraphQL.Root() pokemonFormGenerations: PokemonFormGenerations, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<PokemonForms> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormGenerations.findUniqueOrThrow({
      where: {
        pokemon_form_id_generation_id: {
          pokemon_form_id: pokemonFormGenerations.pokemon_form_id,
          generation_id: pokemonFormGenerations.generation_id,
        },
      },
    }).pokemonForm({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Generations, {
    nullable: false
  })
  async generation(@TypeGraphQL.Root() pokemonFormGenerations: PokemonFormGenerations, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Generations> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormGenerations.findUniqueOrThrow({
      where: {
        pokemon_form_id_generation_id: {
          pokemon_form_id: pokemonFormGenerations.pokemon_form_id,
          generation_id: pokemonFormGenerations.generation_id,
        },
      },
    }).generation({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
