import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { PokemonFormTypes } from "../../../models/PokemonFormTypes";
import { PokemonForms } from "../../../models/PokemonForms";
import { Types } from "../../../models/Types";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormTypes)
export class PokemonFormTypesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => PokemonForms, {
    nullable: false
  })
  async pokemonForm(@TypeGraphQL.Root() pokemonFormTypes: PokemonFormTypes, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<PokemonForms> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormTypes.findUniqueOrThrow({
      where: {
        pokemon_form_id_type_id: {
          pokemon_form_id: pokemonFormTypes.pokemon_form_id,
          type_id: pokemonFormTypes.type_id,
        },
      },
    }).pokemonForm({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Types, {
    nullable: false
  })
  async type(@TypeGraphQL.Root() pokemonFormTypes: PokemonFormTypes, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Types> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormTypes.findUniqueOrThrow({
      where: {
        pokemon_form_id_type_id: {
          pokemon_form_id: pokemonFormTypes.pokemon_form_id,
          type_id: pokemonFormTypes.type_id,
        },
      },
    }).type({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
