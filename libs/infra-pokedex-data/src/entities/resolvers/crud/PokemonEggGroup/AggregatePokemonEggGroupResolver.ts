import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonEggGroupArgs } from "./args/AggregatePokemonEggGroupArgs";
import { PokemonEggGroup } from "../../../models/PokemonEggGroup";
import { AggregatePokemonEggGroup } from "../../outputs/AggregatePokemonEggGroup";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonEggGroup)
export class AggregatePokemonEggGroupResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonEggGroup, {
    nullable: false
  })
  async aggregatePokemonEggGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonEggGroupArgs): Promise<AggregatePokemonEggGroup> {
    return getPrismaFromContext(ctx).pokemonEggGroups.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
