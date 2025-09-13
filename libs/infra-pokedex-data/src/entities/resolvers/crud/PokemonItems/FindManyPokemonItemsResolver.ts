import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyPokemonItemsArgs } from "./args/FindManyPokemonItemsArgs";
import { PokemonItems } from "../../../models/PokemonItems";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonItems)
export class FindManyPokemonItemsResolver {
  @TypeGraphQL.Query(_returns => [PokemonItems], {
    nullable: false
  })
  async findManyPokemonItems(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPokemonItemsArgs): Promise<PokemonItems[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
