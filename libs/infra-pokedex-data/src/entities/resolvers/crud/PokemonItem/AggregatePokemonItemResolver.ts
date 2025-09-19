import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonItemArgs } from "./args/AggregatePokemonItemArgs";
import { PokemonItem } from "../../../models/PokemonItem";
import { AggregatePokemonItem } from "../../outputs/AggregatePokemonItem";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonItem)
export class AggregatePokemonItemResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonItem, {
    nullable: false
  })
  async aggregatePokemonItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonItemArgs): Promise<AggregatePokemonItem> {
    return getPrismaFromContext(ctx).pokemonItems.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
