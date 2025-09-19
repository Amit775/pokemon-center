import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPokemonShapeArgs } from "./args/GroupByPokemonShapeArgs";
import { PokemonShape } from "../../../models/PokemonShape";
import { PokemonShapeGroupBy } from "../../outputs/PokemonShapeGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonShape)
export class GroupByPokemonShapeResolver {
  @TypeGraphQL.Query(_returns => [PokemonShapeGroupBy], {
    nullable: false
  })
  async groupByPokemonShape(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonShapeArgs): Promise<PokemonShapeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonShapes.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
