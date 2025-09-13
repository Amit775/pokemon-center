import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonGameIndicesArgs } from "./args/AggregatePokemonGameIndicesArgs";
import { PokemonGameIndices } from "../../../models/PokemonGameIndices";
import { AggregatePokemonGameIndices } from "../../outputs/AggregatePokemonGameIndices";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonGameIndices)
export class AggregatePokemonGameIndicesResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonGameIndices, {
    nullable: false
  })
  async aggregatePokemonGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonGameIndicesArgs): Promise<AggregatePokemonGameIndices> {
    return getPrismaFromContext(ctx).pokemonGameIndices.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
