import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonFormArgs } from "./args/AggregatePokemonFormArgs";
import { PokemonForm } from "../../../models/PokemonForm";
import { AggregatePokemonForm } from "../../outputs/AggregatePokemonForm";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonForm)
export class AggregatePokemonFormResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonForm, {
    nullable: false
  })
  async aggregatePokemonForm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonFormArgs): Promise<AggregatePokemonForm> {
    return getPrismaFromContext(ctx).pokemonForms.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
