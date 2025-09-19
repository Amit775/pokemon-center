import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyPokemonGameIndexArgs } from "./args/FindManyPokemonGameIndexArgs";
import { PokemonGameIndex } from "../../../models/PokemonGameIndex";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonGameIndex)
export class FindManyPokemonGameIndexResolver {
  @TypeGraphQL.Query(_returns => [PokemonGameIndex], {
    nullable: false
  })
  async pokemonGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonGameIndexArgs): Promise<PokemonGameIndex[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonGameIndices.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
