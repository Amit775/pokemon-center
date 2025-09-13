import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyPokemonEggGroupsArgs } from "./args/FindManyPokemonEggGroupsArgs";
import { PokemonEggGroups } from "../../../models/PokemonEggGroups";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonEggGroups)
export class FindManyPokemonEggGroupsResolver {
  @TypeGraphQL.Query(_returns => [PokemonEggGroups], {
    nullable: false
  })
  async findManyPokemonEggGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonEggGroupsArgs): Promise<PokemonEggGroups[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
