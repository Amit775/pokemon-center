import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonShapesArgs } from "./args/AggregatePokemonShapesArgs";
import { PokemonShapes } from "../../../models/PokemonShapes";
import { AggregatePokemonShapes } from "../../outputs/AggregatePokemonShapes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonShapes)
export class AggregatePokemonShapesResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonShapes, {
    nullable: false
  })
  async aggregatePokemonShapes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonShapesArgs): Promise<AggregatePokemonShapes> {
    return getPrismaFromContext(ctx).pokemonShapes.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
