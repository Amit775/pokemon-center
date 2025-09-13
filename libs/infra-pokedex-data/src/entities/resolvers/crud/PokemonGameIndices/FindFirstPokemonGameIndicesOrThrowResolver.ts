import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonGameIndicesOrThrowArgs } from "./args/FindFirstPokemonGameIndicesOrThrowArgs";
import { PokemonGameIndices } from "../../../models/PokemonGameIndices";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonGameIndices)
export class FindFirstPokemonGameIndicesOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonGameIndices, {
    nullable: true
  })
  async findFirstPokemonGameIndicesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonGameIndicesOrThrowArgs): Promise<PokemonGameIndices | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonGameIndices.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
