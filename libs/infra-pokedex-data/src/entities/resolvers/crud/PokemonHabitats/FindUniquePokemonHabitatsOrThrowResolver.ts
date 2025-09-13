import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonHabitatsOrThrowArgs } from "./args/FindUniquePokemonHabitatsOrThrowArgs";
import { PokemonHabitats } from "../../../models/PokemonHabitats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonHabitats)
export class FindUniquePokemonHabitatsOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonHabitats, {
    nullable: true
  })
  async findUniquePokemonHabitatsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonHabitatsOrThrowArgs): Promise<PokemonHabitats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonHabitats.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
