import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonFormGenerationsOrThrowArgs } from "./args/FindFirstPokemonFormGenerationsOrThrowArgs";
import { PokemonFormGenerations } from "../../../models/PokemonFormGenerations";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormGenerations)
export class FindFirstPokemonFormGenerationsOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonFormGenerations, {
    nullable: true
  })
  async findFirstPokemonFormGenerationsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonFormGenerationsOrThrowArgs): Promise<PokemonFormGenerations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormGenerations.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
