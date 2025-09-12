import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonHabitatsArgs } from "./args/AggregatePokemonHabitatsArgs";
import { PokemonHabitats } from "../../../models/PokemonHabitats";
import { AggregatePokemonHabitats } from "../../outputs/AggregatePokemonHabitats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonHabitats)
export class AggregatePokemonHabitatsResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonHabitats, {
    nullable: false
  })
  async aggregatePokemonHabitats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonHabitatsArgs): Promise<AggregatePokemonHabitats> {
    return getPrismaFromContext(ctx).pokemonHabitats.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
