import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonEggGroupsArgs } from "./args/FindFirstPokemonEggGroupsArgs";
import { PokemonEggGroups } from "../../../models/PokemonEggGroups";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonEggGroups)
export class FindFirstPokemonEggGroupsResolver {
  @TypeGraphQL.Query(_returns => PokemonEggGroups, {
    nullable: true
  })
  async findFirstPokemonEggGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonEggGroupsArgs): Promise<PokemonEggGroups | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
