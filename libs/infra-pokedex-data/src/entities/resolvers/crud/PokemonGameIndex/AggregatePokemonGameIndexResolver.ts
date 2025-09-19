import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonGameIndexArgs } from "./args/AggregatePokemonGameIndexArgs";
import { PokemonGameIndex } from "../../../models/PokemonGameIndex";
import { AggregatePokemonGameIndex } from "../../outputs/AggregatePokemonGameIndex";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonGameIndex)
export class AggregatePokemonGameIndexResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonGameIndex, {
    nullable: false
  })
  async aggregatePokemonGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonGameIndexArgs): Promise<AggregatePokemonGameIndex> {
    return getPrismaFromContext(ctx).pokemonGameIndices.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
