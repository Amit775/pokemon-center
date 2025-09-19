import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonMoveMethodArgs } from "./args/AggregatePokemonMoveMethodArgs";
import { PokemonMoveMethod } from "../../../models/PokemonMoveMethod";
import { AggregatePokemonMoveMethod } from "../../outputs/AggregatePokemonMoveMethod";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMoveMethod)
export class AggregatePokemonMoveMethodResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonMoveMethod, {
    nullable: false
  })
  async aggregatePokemonMoveMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonMoveMethodArgs): Promise<AggregatePokemonMoveMethod> {
    return getPrismaFromContext(ctx).pokemonMoveMethods.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
