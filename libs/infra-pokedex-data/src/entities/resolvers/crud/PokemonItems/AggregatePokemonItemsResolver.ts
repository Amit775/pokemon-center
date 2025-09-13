import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonItemsArgs } from "./args/AggregatePokemonItemsArgs";
import { PokemonItems } from "../../../models/PokemonItems";
import { AggregatePokemonItems } from "../../outputs/AggregatePokemonItems";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonItems)
export class AggregatePokemonItemsResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonItems, {
    nullable: false
  })
  async aggregatePokemonItems(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonItemsArgs): Promise<AggregatePokemonItems> {
    return getPrismaFromContext(ctx).pokemonItems.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
