import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonMoveMethodsArgs } from "./args/AggregatePokemonMoveMethodsArgs";
import { PokemonMoveMethods } from "../../../models/PokemonMoveMethods";
import { AggregatePokemonMoveMethods } from "../../outputs/AggregatePokemonMoveMethods";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMoveMethods)
export class AggregatePokemonMoveMethodsResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonMoveMethods, {
    nullable: false
  })
  async aggregatePokemonMoveMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonMoveMethodsArgs): Promise<AggregatePokemonMoveMethods> {
    return getPrismaFromContext(ctx).pokemonMoveMethods.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
