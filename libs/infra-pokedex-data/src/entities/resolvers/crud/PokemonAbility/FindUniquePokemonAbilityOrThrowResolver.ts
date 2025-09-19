import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonAbilityOrThrowArgs } from "./args/FindUniquePokemonAbilityOrThrowArgs";
import { PokemonAbility } from "../../../models/PokemonAbility";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonAbility)
export class FindUniquePokemonAbilityOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonAbility, {
    nullable: true
  })
  async getPokemonAbility(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonAbilityOrThrowArgs): Promise<PokemonAbility | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonAbilities.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
