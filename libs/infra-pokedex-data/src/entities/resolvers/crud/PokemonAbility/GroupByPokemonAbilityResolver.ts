import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPokemonAbilityArgs } from "./args/GroupByPokemonAbilityArgs";
import { PokemonAbility } from "../../../models/PokemonAbility";
import { PokemonAbilityGroupBy } from "../../outputs/PokemonAbilityGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonAbility)
export class GroupByPokemonAbilityResolver {
  @TypeGraphQL.Query(_returns => [PokemonAbilityGroupBy], {
    nullable: false
  })
  async groupByPokemonAbility(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonAbilityArgs): Promise<PokemonAbilityGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonAbilities.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
