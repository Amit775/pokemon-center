import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOnePokemonAbilityArgs } from "./args/UpdateOnePokemonAbilityArgs";
import { PokemonAbility } from "../../../models/PokemonAbility";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonAbility)
export class UpdateOnePokemonAbilityResolver {
  @TypeGraphQL.Mutation(_returns => PokemonAbility, {
    nullable: true
  })
  async updateOnePokemonAbility(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOnePokemonAbilityArgs): Promise<PokemonAbility | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonAbilities.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
