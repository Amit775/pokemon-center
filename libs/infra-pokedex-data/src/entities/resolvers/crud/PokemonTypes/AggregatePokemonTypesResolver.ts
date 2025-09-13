import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonTypesArgs } from "./args/AggregatePokemonTypesArgs";
import { PokemonTypes } from "../../../models/PokemonTypes";
import { AggregatePokemonTypes } from "../../outputs/AggregatePokemonTypes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonTypes)
export class AggregatePokemonTypesResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonTypes, {
    nullable: false
  })
  async aggregatePokemonTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonTypesArgs): Promise<AggregatePokemonTypes> {
    return getPrismaFromContext(ctx).pokemonTypes.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
