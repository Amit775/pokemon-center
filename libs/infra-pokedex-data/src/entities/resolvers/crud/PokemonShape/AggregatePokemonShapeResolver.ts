import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonShapeArgs } from "./args/AggregatePokemonShapeArgs";
import { PokemonShape } from "../../../models/PokemonShape";
import { AggregatePokemonShape } from "../../outputs/AggregatePokemonShape";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonShape)
export class AggregatePokemonShapeResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonShape, {
    nullable: false
  })
  async aggregatePokemonShape(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonShapeArgs): Promise<AggregatePokemonShape> {
    return getPrismaFromContext(ctx).pokemonShapes.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
