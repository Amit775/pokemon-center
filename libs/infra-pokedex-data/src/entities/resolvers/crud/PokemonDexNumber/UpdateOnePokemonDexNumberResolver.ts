import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOnePokemonDexNumberArgs } from "./args/UpdateOnePokemonDexNumberArgs";
import { PokemonDexNumber } from "../../../models/PokemonDexNumber";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonDexNumber)
export class UpdateOnePokemonDexNumberResolver {
  @TypeGraphQL.Mutation(_returns => PokemonDexNumber, {
    nullable: true
  })
  async updateOnePokemonDexNumber(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOnePokemonDexNumberArgs): Promise<PokemonDexNumber | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
