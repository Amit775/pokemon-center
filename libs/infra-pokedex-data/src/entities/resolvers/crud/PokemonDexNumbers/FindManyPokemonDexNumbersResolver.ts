import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyPokemonDexNumbersArgs } from "./args/FindManyPokemonDexNumbersArgs";
import { PokemonDexNumbers } from "../../../models/PokemonDexNumbers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonDexNumbers)
export class FindManyPokemonDexNumbersResolver {
  @TypeGraphQL.Query(_returns => [PokemonDexNumbers], {
    nullable: false
  })
  async findManyPokemonDexNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonDexNumbersArgs): Promise<PokemonDexNumbers[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
