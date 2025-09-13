import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonEggGroupsArgs } from "./args/AggregatePokemonEggGroupsArgs";
import { PokemonEggGroups } from "../../../models/PokemonEggGroups";
import { AggregatePokemonEggGroups } from "../../outputs/AggregatePokemonEggGroups";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonEggGroups)
export class AggregatePokemonEggGroupsResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonEggGroups, {
    nullable: false
  })
  async aggregatePokemonEggGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonEggGroupsArgs): Promise<AggregatePokemonEggGroups> {
    return getPrismaFromContext(ctx).pokemonEggGroups.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
