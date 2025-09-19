import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPokemonFormTypeArgs } from "./args/GroupByPokemonFormTypeArgs";
import { PokemonFormType } from "../../../models/PokemonFormType";
import { PokemonFormTypeGroupBy } from "../../outputs/PokemonFormTypeGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormType)
export class GroupByPokemonFormTypeResolver {
  @TypeGraphQL.Query(_returns => [PokemonFormTypeGroupBy], {
    nullable: false
  })
  async groupByPokemonFormType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonFormTypeArgs): Promise<PokemonFormTypeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonFormTypes.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
