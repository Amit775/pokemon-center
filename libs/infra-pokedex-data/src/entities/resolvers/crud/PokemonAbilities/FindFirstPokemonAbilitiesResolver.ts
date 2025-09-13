import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonAbilitiesArgs } from "./args/FindFirstPokemonAbilitiesArgs";
import { PokemonAbilities } from "../../../models/PokemonAbilities";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonAbilities)
export class FindFirstPokemonAbilitiesResolver {
  @TypeGraphQL.Query(_returns => PokemonAbilities, {
    nullable: true
  })
  async findFirstPokemonAbilities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonAbilitiesArgs): Promise<PokemonAbilities | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonAbilities.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
