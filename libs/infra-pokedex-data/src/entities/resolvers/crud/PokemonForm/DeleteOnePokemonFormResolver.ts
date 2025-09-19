import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOnePokemonFormArgs } from "./args/DeleteOnePokemonFormArgs";
import { PokemonForm } from "../../../models/PokemonForm";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonForm)
export class DeleteOnePokemonFormResolver {
  @TypeGraphQL.Mutation(_returns => PokemonForm, {
    nullable: true
  })
  async deleteOnePokemonForm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePokemonFormArgs): Promise<PokemonForm | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
