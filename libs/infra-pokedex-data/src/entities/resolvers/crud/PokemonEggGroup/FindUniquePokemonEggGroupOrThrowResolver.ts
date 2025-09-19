import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonEggGroupOrThrowArgs } from "./args/FindUniquePokemonEggGroupOrThrowArgs";
import { PokemonEggGroup } from "../../../models/PokemonEggGroup";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonEggGroup)
export class FindUniquePokemonEggGroupOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonEggGroup, {
    nullable: true
  })
  async getPokemonEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonEggGroupOrThrowArgs): Promise<PokemonEggGroup | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonEggGroups.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
