import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonFormTypesArgs } from "./args/FindFirstPokemonFormTypesArgs";
import { PokemonFormTypes } from "../../../models/PokemonFormTypes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormTypes)
export class FindFirstPokemonFormTypesResolver {
  @TypeGraphQL.Query(_returns => PokemonFormTypes, {
    nullable: true
  })
  async findFirstPokemonFormTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonFormTypesArgs): Promise<PokemonFormTypes | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormTypes.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
