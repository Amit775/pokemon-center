import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Ability } from "../../../models/Ability";
import { Generation } from "../../../models/Generation";
import { PokemonAbility } from "../../../models/PokemonAbility";
import { AbilityPokemonAbilitiesArgs } from "./args/AbilityPokemonAbilitiesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Ability)
export class AbilityRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Generation, {
    nullable: false
  })
  async generation(@TypeGraphQL.Root() ability: Ability, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Generation> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).abilities.findUniqueOrThrow({
      where: {
        id: ability.id,
      },
    }).generation({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonAbility], {
    nullable: false
  })
  async pokemonAbilities(@TypeGraphQL.Root() ability: Ability, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AbilityPokemonAbilitiesArgs): Promise<PokemonAbility[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).abilities.findUniqueOrThrow({
      where: {
        id: ability.id,
      },
    }).pokemonAbilities({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
