import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonItemsOrThrowArgs } from "./args/FindFirstPokemonItemsOrThrowArgs";
import { PokemonItems } from "../../../models/PokemonItems";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonItems)
export class FindFirstPokemonItemsOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonItems, {
    nullable: true
  })
  async findFirstPokemonItemsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonItemsOrThrowArgs): Promise<PokemonItems | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
