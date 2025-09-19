import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyPokemonTypeArgs } from "./args/FindManyPokemonTypeArgs";
import { PokemonType } from "../../../models/PokemonType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonType)
export class FindManyPokemonTypeResolver {
  @TypeGraphQL.Query(_returns => [PokemonType], {
    nullable: false
  })
  async pokemonTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonTypeArgs): Promise<PokemonType[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonTypes.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
