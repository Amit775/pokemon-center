import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonItemArgs } from "./args/FindFirstPokemonItemArgs";
import { PokemonItem } from "../../../models/PokemonItem";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonItem)
export class FindFirstPokemonItemResolver {
  @TypeGraphQL.Query(_returns => PokemonItem, {
    nullable: true
  })
  async findFirstPokemonItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonItemArgs): Promise<PokemonItem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
