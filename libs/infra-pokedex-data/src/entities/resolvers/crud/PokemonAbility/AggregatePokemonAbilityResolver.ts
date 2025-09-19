import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonAbilityArgs } from "./args/AggregatePokemonAbilityArgs";
import { PokemonAbility } from "../../../models/PokemonAbility";
import { AggregatePokemonAbility } from "../../outputs/AggregatePokemonAbility";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonAbility)
export class AggregatePokemonAbilityResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonAbility, {
    nullable: false
  })
  async aggregatePokemonAbility(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonAbilityArgs): Promise<AggregatePokemonAbility> {
    return getPrismaFromContext(ctx).pokemonAbilities.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
