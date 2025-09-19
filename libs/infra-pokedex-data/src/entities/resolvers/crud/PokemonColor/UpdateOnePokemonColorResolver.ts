import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOnePokemonColorArgs } from "./args/UpdateOnePokemonColorArgs";
import { PokemonColor } from "../../../models/PokemonColor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonColor)
export class UpdateOnePokemonColorResolver {
  @TypeGraphQL.Mutation(_returns => PokemonColor, {
    nullable: true
  })
  async updateOnePokemonColor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOnePokemonColorArgs): Promise<PokemonColor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonColors.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
