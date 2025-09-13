import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Abilities } from "../../../models/Abilities";
import { Generations } from "../../../models/Generations";
import { PokemonAbilities } from "../../../models/PokemonAbilities";
import { AbilitiesPokemonAbilitiesArgs } from "./args/AbilitiesPokemonAbilitiesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Abilities)
export class AbilitiesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Generations, {
    nullable: false
  })
  async generation(@TypeGraphQL.Root() abilities: Abilities, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Generations> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).abilities.findUniqueOrThrow({
      where: {
        id: abilities.id,
      },
    }).generation({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonAbilities], {
    nullable: false
  })
  async pokemonAbilities(@TypeGraphQL.Root() abilities: Abilities, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AbilitiesPokemonAbilitiesArgs): Promise<PokemonAbilities[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).abilities.findUniqueOrThrow({
      where: {
        id: abilities.id,
      },
    }).pokemonAbilities({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
