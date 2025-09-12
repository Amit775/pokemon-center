import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonAbilitiesArgs } from "./args/AggregatePokemonAbilitiesArgs";
import { PokemonAbilities } from "../../../models/PokemonAbilities";
import { AggregatePokemonAbilities } from "../../outputs/AggregatePokemonAbilities";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonAbilities)
export class AggregatePokemonAbilitiesResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonAbilities, {
    nullable: false
  })
  async aggregatePokemonAbilities(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonAbilitiesArgs): Promise<AggregatePokemonAbilities> {
    return getPrismaFromContext(ctx).pokemonAbilities.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
