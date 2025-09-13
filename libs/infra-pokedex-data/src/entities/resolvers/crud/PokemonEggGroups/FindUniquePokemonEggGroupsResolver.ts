import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonEggGroupsArgs } from "./args/FindUniquePokemonEggGroupsArgs";
import { PokemonEggGroups } from "../../../models/PokemonEggGroups";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonEggGroups)
export class FindUniquePokemonEggGroupsResolver {
  @TypeGraphQL.Query(_returns => PokemonEggGroups, {
    nullable: true
  })
  async findUniquePokemonEggGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonEggGroupsArgs): Promise<PokemonEggGroups | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
