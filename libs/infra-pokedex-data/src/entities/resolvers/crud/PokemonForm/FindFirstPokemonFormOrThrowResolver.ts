import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonFormOrThrowArgs } from "./args/FindFirstPokemonFormOrThrowArgs";
import { PokemonForm } from "../../../models/PokemonForm";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonForm)
export class FindFirstPokemonFormOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonForm, {
    nullable: true
  })
  async findFirstPokemonFormOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonFormOrThrowArgs): Promise<PokemonForm | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
