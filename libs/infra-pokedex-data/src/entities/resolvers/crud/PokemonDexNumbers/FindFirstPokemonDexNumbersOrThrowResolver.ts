import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonDexNumbersOrThrowArgs } from "./args/FindFirstPokemonDexNumbersOrThrowArgs";
import { PokemonDexNumbers } from "../../../models/PokemonDexNumbers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonDexNumbers)
export class FindFirstPokemonDexNumbersOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonDexNumbers, {
    nullable: true
  })
  async findFirstPokemonDexNumbersOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonDexNumbersOrThrowArgs): Promise<PokemonDexNumbers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
