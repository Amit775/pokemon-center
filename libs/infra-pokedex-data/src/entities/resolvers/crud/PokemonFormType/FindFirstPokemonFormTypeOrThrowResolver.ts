import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonFormTypeOrThrowArgs } from "./args/FindFirstPokemonFormTypeOrThrowArgs";
import { PokemonFormType } from "../../../models/PokemonFormType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormType)
export class FindFirstPokemonFormTypeOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonFormType, {
    nullable: true
  })
  async findFirstPokemonFormTypeOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonFormTypeOrThrowArgs): Promise<PokemonFormType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormTypes.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
