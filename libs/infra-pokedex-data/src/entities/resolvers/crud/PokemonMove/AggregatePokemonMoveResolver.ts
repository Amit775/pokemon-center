import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonMoveArgs } from "./args/AggregatePokemonMoveArgs";
import { PokemonMove } from "../../../models/PokemonMove";
import { AggregatePokemonMove } from "../../outputs/AggregatePokemonMove";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMove)
export class AggregatePokemonMoveResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonMove, {
    nullable: false
  })
  async aggregatePokemonMove(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonMoveArgs): Promise<AggregatePokemonMove> {
    return getPrismaFromContext(ctx).pokemonMoves.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
