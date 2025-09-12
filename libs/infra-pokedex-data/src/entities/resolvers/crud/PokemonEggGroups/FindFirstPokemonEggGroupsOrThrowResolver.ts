import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonEggGroupsOrThrowArgs } from "./args/FindFirstPokemonEggGroupsOrThrowArgs";
import { PokemonEggGroups } from "../../../models/PokemonEggGroups";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonEggGroups)
export class FindFirstPokemonEggGroupsOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonEggGroups, {
    nullable: true
  })
  async findFirstPokemonEggGroupsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonEggGroupsOrThrowArgs): Promise<PokemonEggGroups | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
