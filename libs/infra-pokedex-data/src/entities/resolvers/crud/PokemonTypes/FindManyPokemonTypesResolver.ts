import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyPokemonTypesArgs } from "./args/FindManyPokemonTypesArgs";
import { PokemonTypes } from "../../../models/PokemonTypes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonTypes)
export class FindManyPokemonTypesResolver {
  @TypeGraphQL.Query(_returns => [PokemonTypes], {
    nullable: false
  })
  async findManyPokemonTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonTypesArgs): Promise<PokemonTypes[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonTypes.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
