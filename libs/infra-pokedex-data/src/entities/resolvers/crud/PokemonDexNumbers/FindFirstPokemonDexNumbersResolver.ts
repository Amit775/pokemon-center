import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonDexNumbersArgs } from "./args/FindFirstPokemonDexNumbersArgs";
import { PokemonDexNumbers } from "../../../models/PokemonDexNumbers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonDexNumbers)
export class FindFirstPokemonDexNumbersResolver {
  @TypeGraphQL.Query(_returns => PokemonDexNumbers, {
    nullable: true
  })
  async findFirstPokemonDexNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonDexNumbersArgs): Promise<PokemonDexNumbers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
