import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOnePokemonDexNumberArgs } from "./args/DeleteOnePokemonDexNumberArgs";
import { PokemonDexNumber } from "../../../models/PokemonDexNumber";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonDexNumber)
export class DeleteOnePokemonDexNumberResolver {
  @TypeGraphQL.Mutation(_returns => PokemonDexNumber, {
    nullable: true
  })
  async deleteOnePokemonDexNumber(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePokemonDexNumberArgs): Promise<PokemonDexNumber | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonDexNumbers.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
