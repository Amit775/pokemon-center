import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { PokemonForm } from "../../../models/PokemonForm";
import { PokemonFormType } from "../../../models/PokemonFormType";
import { Type } from "../../../models/Type";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormType)
export class PokemonFormTypeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => PokemonForm, {
    nullable: false
  })
  async pokemonForm(@TypeGraphQL.Root() pokemonFormType: PokemonFormType, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<PokemonForm> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormTypes.findUniqueOrThrow({
      where: {
        pokemon_form_id_type_id: {
          pokemon_form_id: pokemonFormType.pokemon_form_id,
          type_id: pokemonFormType.type_id,
        },
      },
    }).pokemonForm({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Type, {
    nullable: false
  })
  async type(@TypeGraphQL.Root() pokemonFormType: PokemonFormType, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Type> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormTypes.findUniqueOrThrow({
      where: {
        pokemon_form_id_type_id: {
          pokemon_form_id: pokemonFormType.pokemon_form_id,
          type_id: pokemonFormType.type_id,
        },
      },
    }).type({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
