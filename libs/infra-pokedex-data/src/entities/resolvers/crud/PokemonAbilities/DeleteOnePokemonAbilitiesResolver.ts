import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOnePokemonAbilitiesArgs } from "./args/DeleteOnePokemonAbilitiesArgs";
import { PokemonAbilities } from "../../../models/PokemonAbilities";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonAbilities)
export class DeleteOnePokemonAbilitiesResolver {
  @TypeGraphQL.Mutation(_returns => PokemonAbilities, {
    nullable: true
  })
  async deleteOnePokemonAbilities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePokemonAbilitiesArgs): Promise<PokemonAbilities | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonAbilities.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
