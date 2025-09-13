import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonFormsOrThrowArgs } from "./args/FindUniquePokemonFormsOrThrowArgs";
import { PokemonForms } from "../../../models/PokemonForms";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonForms)
export class FindUniquePokemonFormsOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonForms, {
    nullable: true
  })
  async findUniquePokemonFormsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonFormsOrThrowArgs): Promise<PokemonForms | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
