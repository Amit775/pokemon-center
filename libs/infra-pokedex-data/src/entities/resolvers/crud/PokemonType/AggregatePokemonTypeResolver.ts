import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonTypeArgs } from "./args/AggregatePokemonTypeArgs";
import { PokemonType } from "../../../models/PokemonType";
import { AggregatePokemonType } from "../../outputs/AggregatePokemonType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonType)
export class AggregatePokemonTypeResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonType, {
    nullable: false
  })
  async aggregatePokemonType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonTypeArgs): Promise<AggregatePokemonType> {
    return getPrismaFromContext(ctx).pokemonTypes.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
