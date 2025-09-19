import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonDexNumberOrThrowArgs } from "./args/FindFirstPokemonDexNumberOrThrowArgs";
import { PokemonDexNumber } from "../../../models/PokemonDexNumber";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonDexNumber)
export class FindFirstPokemonDexNumberOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonDexNumber, {
    nullable: true
  })
  async findFirstPokemonDexNumberOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonDexNumberOrThrowArgs): Promise<PokemonDexNumber | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
