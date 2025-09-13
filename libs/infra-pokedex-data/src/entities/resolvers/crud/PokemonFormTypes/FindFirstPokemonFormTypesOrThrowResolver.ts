import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonFormTypesOrThrowArgs } from "./args/FindFirstPokemonFormTypesOrThrowArgs";
import { PokemonFormTypes } from "../../../models/PokemonFormTypes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormTypes)
export class FindFirstPokemonFormTypesOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonFormTypes, {
    nullable: true
  })
  async findFirstPokemonFormTypesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonFormTypesOrThrowArgs): Promise<PokemonFormTypes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormTypes.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
