import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonFormTypeOrThrowArgs } from "./args/FindUniquePokemonFormTypeOrThrowArgs";
import { PokemonFormType } from "../../../models/PokemonFormType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormType)
export class FindUniquePokemonFormTypeOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonFormType, {
    nullable: true
  })
  async getPokemonFormType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonFormTypeOrThrowArgs): Promise<PokemonFormType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormTypes.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
