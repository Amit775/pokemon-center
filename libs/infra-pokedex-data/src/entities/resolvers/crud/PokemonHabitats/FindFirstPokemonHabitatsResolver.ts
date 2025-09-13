import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonHabitatsArgs } from "./args/FindFirstPokemonHabitatsArgs";
import { PokemonHabitats } from "../../../models/PokemonHabitats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonHabitats)
export class FindFirstPokemonHabitatsResolver {
  @TypeGraphQL.Query(_returns => PokemonHabitats, {
    nullable: true
  })
  async findFirstPokemonHabitats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonHabitatsArgs): Promise<PokemonHabitats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonHabitats.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
