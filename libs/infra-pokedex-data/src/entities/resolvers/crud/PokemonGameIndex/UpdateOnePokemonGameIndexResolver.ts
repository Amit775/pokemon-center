import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOnePokemonGameIndexArgs } from "./args/UpdateOnePokemonGameIndexArgs";
import { PokemonGameIndex } from "../../../models/PokemonGameIndex";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonGameIndex)
export class UpdateOnePokemonGameIndexResolver {
  @TypeGraphQL.Mutation(_returns => PokemonGameIndex, {
    nullable: true
  })
  async updateOnePokemonGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOnePokemonGameIndexArgs): Promise<PokemonGameIndex | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonGameIndices.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
