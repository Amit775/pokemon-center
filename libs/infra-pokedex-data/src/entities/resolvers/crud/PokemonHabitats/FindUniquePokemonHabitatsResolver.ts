import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonHabitatsArgs } from "./args/FindUniquePokemonHabitatsArgs";
import { PokemonHabitats } from "../../../models/PokemonHabitats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonHabitats)
export class FindUniquePokemonHabitatsResolver {
  @TypeGraphQL.Query(_returns => PokemonHabitats, {
    nullable: true
  })
  async findUniquePokemonHabitats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonHabitatsArgs): Promise<PokemonHabitats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonHabitats.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
