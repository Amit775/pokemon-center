import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonHabitatOrThrowArgs } from "./args/FindUniquePokemonHabitatOrThrowArgs";
import { PokemonHabitat } from "../../../models/PokemonHabitat";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonHabitat)
export class FindUniquePokemonHabitatOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonHabitat, {
    nullable: true
  })
  async getPokemonHabitat(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonHabitatOrThrowArgs): Promise<PokemonHabitat | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonHabitats.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
