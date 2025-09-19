import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonItemOrThrowArgs } from "./args/FindFirstPokemonItemOrThrowArgs";
import { PokemonItem } from "../../../models/PokemonItem";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonItem)
export class FindFirstPokemonItemOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonItem, {
    nullable: true
  })
  async findFirstPokemonItemOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonItemOrThrowArgs): Promise<PokemonItem | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonItems.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
