import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOnePokemonAbilityArgs } from "./args/DeleteOnePokemonAbilityArgs";
import { PokemonAbility } from "../../../models/PokemonAbility";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonAbility)
export class DeleteOnePokemonAbilityResolver {
  @TypeGraphQL.Mutation(_returns => PokemonAbility, {
    nullable: true
  })
  async deleteOnePokemonAbility(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePokemonAbilityArgs): Promise<PokemonAbility | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonAbilities.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
