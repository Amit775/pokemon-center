import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonFormTypeArgs } from "./args/AggregatePokemonFormTypeArgs";
import { PokemonFormType } from "../../../models/PokemonFormType";
import { AggregatePokemonFormType } from "../../outputs/AggregatePokemonFormType";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonFormType)
export class AggregatePokemonFormTypeResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonFormType, {
    nullable: false
  })
  async aggregatePokemonFormType(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonFormTypeArgs): Promise<AggregatePokemonFormType> {
    return getPrismaFromContext(ctx).pokemonFormTypes.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
