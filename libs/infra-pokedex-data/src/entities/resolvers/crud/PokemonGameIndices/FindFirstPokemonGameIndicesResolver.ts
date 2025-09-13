import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonGameIndicesArgs } from "./args/FindFirstPokemonGameIndicesArgs";
import { PokemonGameIndices } from "../../../models/PokemonGameIndices";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonGameIndices)
export class FindFirstPokemonGameIndicesResolver {
  @TypeGraphQL.Query(_returns => PokemonGameIndices, {
    nullable: true
  })
  async findFirstPokemonGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonGameIndicesArgs): Promise<PokemonGameIndices | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonGameIndices.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
