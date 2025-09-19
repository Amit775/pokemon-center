import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonAbilityArgs } from "./args/FindUniquePokemonAbilityArgs";
import { PokemonAbility } from "../../../models/PokemonAbility";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonAbility)
export class FindUniquePokemonAbilityResolver {
  @TypeGraphQL.Query(_returns => PokemonAbility, {
    nullable: true
  })
  async pokemonAbility(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonAbilityArgs): Promise<PokemonAbility | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonAbilities.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
