import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonFormGenerationOrThrowArgs } from "./args/FindUniquePokemonFormGenerationOrThrowArgs";
import { PokemonFormGeneration } from "../../../models/PokemonFormGeneration";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormGeneration)
export class FindUniquePokemonFormGenerationOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonFormGeneration, {
    nullable: true
  })
  async getPokemonFormGeneration(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonFormGenerationOrThrowArgs): Promise<PokemonFormGeneration | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormGenerations.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
