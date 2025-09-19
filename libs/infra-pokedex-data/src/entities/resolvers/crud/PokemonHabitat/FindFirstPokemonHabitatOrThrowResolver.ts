import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonHabitatOrThrowArgs } from "./args/FindFirstPokemonHabitatOrThrowArgs";
import { PokemonHabitat } from "../../../models/PokemonHabitat";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonHabitat)
export class FindFirstPokemonHabitatOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonHabitat, {
    nullable: true
  })
  async findFirstPokemonHabitatOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonHabitatOrThrowArgs): Promise<PokemonHabitat | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonHabitats.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
