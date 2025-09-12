import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonColorsArgs } from "./args/AggregatePokemonColorsArgs";
import { PokemonColors } from "../../../models/PokemonColors";
import { AggregatePokemonColors } from "../../outputs/AggregatePokemonColors";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonColors)
export class AggregatePokemonColorsResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonColors, {
    nullable: false
  })
  async aggregatePokemonColors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonColorsArgs): Promise<AggregatePokemonColors> {
    return getPrismaFromContext(ctx).pokemonColors.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
