import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonMovesArgs } from "./args/AggregatePokemonMovesArgs";
import { PokemonMoves } from "../../../models/PokemonMoves";
import { AggregatePokemonMoves } from "../../outputs/AggregatePokemonMoves";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMoves)
export class AggregatePokemonMovesResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonMoves, {
    nullable: false
  })
  async aggregatePokemonMoves(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonMovesArgs): Promise<AggregatePokemonMoves> {
    return getPrismaFromContext(ctx).pokemonMoves.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
