import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPokemonShapesArgs } from "./args/GroupByPokemonShapesArgs";
import { PokemonShapes } from "../../../models/PokemonShapes";
import { PokemonShapesGroupBy } from "../../outputs/PokemonShapesGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonShapes)
export class GroupByPokemonShapesResolver {
  @TypeGraphQL.Query(_returns => [PokemonShapesGroupBy], {
    nullable: false
  })
  async groupByPokemonShapes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonShapesArgs): Promise<PokemonShapesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonShapes.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
