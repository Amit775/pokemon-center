import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPokemonFormsArgs } from "./args/GroupByPokemonFormsArgs";
import { PokemonForms } from "../../../models/PokemonForms";
import { PokemonFormsGroupBy } from "../../outputs/PokemonFormsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonForms)
export class GroupByPokemonFormsResolver {
  @TypeGraphQL.Query(_returns => [PokemonFormsGroupBy], {
    nullable: false
  })
  async groupByPokemonForms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonFormsArgs): Promise<PokemonFormsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
