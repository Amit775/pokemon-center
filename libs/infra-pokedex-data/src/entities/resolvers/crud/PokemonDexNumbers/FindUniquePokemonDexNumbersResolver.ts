import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonDexNumbersArgs } from "./args/FindUniquePokemonDexNumbersArgs";
import { PokemonDexNumbers } from "../../../models/PokemonDexNumbers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonDexNumbers)
export class FindUniquePokemonDexNumbersResolver {
  @TypeGraphQL.Query(_returns => PokemonDexNumbers, {
    nullable: true
  })
  async findUniquePokemonDexNumbers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonDexNumbersArgs): Promise<PokemonDexNumbers | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
