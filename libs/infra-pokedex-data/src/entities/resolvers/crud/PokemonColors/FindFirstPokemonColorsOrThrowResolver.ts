import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonColorsOrThrowArgs } from "./args/FindFirstPokemonColorsOrThrowArgs";
import { PokemonColors } from "../../../models/PokemonColors";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonColors)
export class FindFirstPokemonColorsOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonColors, {
    nullable: true
  })
  async findFirstPokemonColorsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonColorsOrThrowArgs): Promise<PokemonColors | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonColors.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
