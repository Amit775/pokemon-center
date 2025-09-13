import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyPokemonGameIndicesArgs } from "./args/FindManyPokemonGameIndicesArgs";
import { PokemonGameIndices } from "../../../models/PokemonGameIndices";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonGameIndices)
export class FindManyPokemonGameIndicesResolver {
  @TypeGraphQL.Query(_returns => [PokemonGameIndices], {
    nullable: false
  })
  async findManyPokemonGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonGameIndicesArgs): Promise<PokemonGameIndices[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonGameIndices.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
