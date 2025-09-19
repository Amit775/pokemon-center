import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonFormArgs } from "./args/FindFirstPokemonFormArgs";
import { PokemonForm } from "../../../models/PokemonForm";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonForm)
export class FindFirstPokemonFormResolver {
  @TypeGraphQL.Query(_returns => PokemonForm, {
    nullable: true
  })
  async findFirstPokemonForm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonFormArgs): Promise<PokemonForm | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
