import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyPokemonColorsArgs } from "./args/FindManyPokemonColorsArgs";
import { PokemonColors } from "../../../models/PokemonColors";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonColors)
export class FindManyPokemonColorsResolver {
  @TypeGraphQL.Query(_returns => [PokemonColors], {
    nullable: false
  })
  async findManyPokemonColors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonColorsArgs): Promise<PokemonColors[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonColors.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
