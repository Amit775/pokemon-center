import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonColorArgs } from "./args/AggregatePokemonColorArgs";
import { PokemonColor } from "../../../models/PokemonColor";
import { AggregatePokemonColor } from "../../outputs/AggregatePokemonColor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonColor)
export class AggregatePokemonColorResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonColor, {
    nullable: false
  })
  async aggregatePokemonColor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonColorArgs): Promise<AggregatePokemonColor> {
    return getPrismaFromContext(ctx).pokemonColors.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
