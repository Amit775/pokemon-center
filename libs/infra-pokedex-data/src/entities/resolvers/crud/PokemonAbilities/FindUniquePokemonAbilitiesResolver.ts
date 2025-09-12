import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonAbilitiesArgs } from "./args/FindUniquePokemonAbilitiesArgs";
import { PokemonAbilities } from "../../../models/PokemonAbilities";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonAbilities)
export class FindUniquePokemonAbilitiesResolver {
  @TypeGraphQL.Query(_returns => PokemonAbilities, {
    nullable: true
  })
  async findUniquePokemonAbilities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonAbilitiesArgs): Promise<PokemonAbilities | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonAbilities.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
