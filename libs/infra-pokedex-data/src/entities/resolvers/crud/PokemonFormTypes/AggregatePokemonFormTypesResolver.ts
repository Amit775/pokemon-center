import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonFormTypesArgs } from "./args/AggregatePokemonFormTypesArgs";
import { PokemonFormTypes } from "../../../models/PokemonFormTypes";
import { AggregatePokemonFormTypes } from "../../outputs/AggregatePokemonFormTypes";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormTypes)
export class AggregatePokemonFormTypesResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonFormTypes, {
    nullable: false
  })
  async aggregatePokemonFormTypes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonFormTypesArgs): Promise<AggregatePokemonFormTypes> {
    return getPrismaFromContext(ctx).pokemonFormTypes.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
