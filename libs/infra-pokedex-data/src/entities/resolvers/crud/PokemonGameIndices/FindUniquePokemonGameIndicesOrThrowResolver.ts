import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonGameIndicesOrThrowArgs } from "./args/FindUniquePokemonGameIndicesOrThrowArgs";
import { PokemonGameIndices } from "../../../models/PokemonGameIndices";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonGameIndices)
export class FindUniquePokemonGameIndicesOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonGameIndices, {
    nullable: true
  })
  async findUniquePokemonGameIndicesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonGameIndicesOrThrowArgs): Promise<PokemonGameIndices | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonGameIndices.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
