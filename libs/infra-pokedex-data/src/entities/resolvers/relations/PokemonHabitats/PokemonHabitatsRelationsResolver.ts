import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { PokemonHabitats } from "../../../models/PokemonHabitats";
import { PokemonSpecies } from "../../../models/PokemonSpecies";
import { PokemonHabitatsSpeciesArgs } from "./args/PokemonHabitatsSpeciesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonHabitats)
export class PokemonHabitatsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [PokemonSpecies], {
    nullable: false
  })
  async species(@TypeGraphQL.Root() pokemonHabitats: PokemonHabitats, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PokemonHabitatsSpeciesArgs): Promise<PokemonSpecies[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonHabitats.findUniqueOrThrow({
      where: {
        id: pokemonHabitats.id,
      },
    }).species({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
