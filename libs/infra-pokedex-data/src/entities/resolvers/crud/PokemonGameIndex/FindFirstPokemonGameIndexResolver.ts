import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonGameIndexArgs } from "./args/FindFirstPokemonGameIndexArgs";
import { PokemonGameIndex } from "../../../models/PokemonGameIndex";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonGameIndex)
export class FindFirstPokemonGameIndexResolver {
  @TypeGraphQL.Query(_returns => PokemonGameIndex, {
    nullable: true
  })
  async findFirstPokemonGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonGameIndexArgs): Promise<PokemonGameIndex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonGameIndices.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
