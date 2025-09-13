import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonFormGenerationsArgs } from "./args/FindFirstPokemonFormGenerationsArgs";
import { PokemonFormGenerations } from "../../../models/PokemonFormGenerations";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormGenerations)
export class FindFirstPokemonFormGenerationsResolver {
  @TypeGraphQL.Query(_returns => PokemonFormGenerations, {
    nullable: true
  })
  async findFirstPokemonFormGenerations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonFormGenerationsArgs): Promise<PokemonFormGenerations | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormGenerations.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
