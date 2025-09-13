import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonColorsOrThrowArgs } from "./args/FindUniquePokemonColorsOrThrowArgs";
import { PokemonColors } from "../../../models/PokemonColors";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonColors)
export class FindUniquePokemonColorsOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonColors, {
    nullable: true
  })
  async findUniquePokemonColorsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonColorsOrThrowArgs): Promise<PokemonColors | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonColors.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
