import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonGameIndicesArgs } from "./args/FindUniquePokemonGameIndicesArgs";
import { PokemonGameIndices } from "../../../models/PokemonGameIndices";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonGameIndices)
export class FindUniquePokemonGameIndicesResolver {
  @TypeGraphQL.Query(_returns => PokemonGameIndices, {
    nullable: true
  })
  async findUniquePokemonGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonGameIndicesArgs): Promise<PokemonGameIndices | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonGameIndices.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
