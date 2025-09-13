import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyPokemonFormTypesArgs } from "./args/FindManyPokemonFormTypesArgs";
import { PokemonFormTypes } from "../../../models/PokemonFormTypes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormTypes)
export class FindManyPokemonFormTypesResolver {
  @TypeGraphQL.Query(_returns => [PokemonFormTypes], {
    nullable: false
  })
  async findManyPokemonFormTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonFormTypesArgs): Promise<PokemonFormTypes[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormTypes.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
