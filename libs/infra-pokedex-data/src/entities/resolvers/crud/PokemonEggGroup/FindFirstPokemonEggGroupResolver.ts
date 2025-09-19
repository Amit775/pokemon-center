import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonEggGroupArgs } from "./args/FindFirstPokemonEggGroupArgs";
import { PokemonEggGroup } from "../../../models/PokemonEggGroup";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonEggGroup)
export class FindFirstPokemonEggGroupResolver {
  @TypeGraphQL.Query(_returns => PokemonEggGroup, {
    nullable: true
  })
  async findFirstPokemonEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonEggGroupArgs): Promise<PokemonEggGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
