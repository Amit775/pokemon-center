import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonFormsArgs } from "./args/AggregatePokemonFormsArgs";
import { PokemonForms } from "../../../models/PokemonForms";
import { AggregatePokemonForms } from "../../outputs/AggregatePokemonForms";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonForms)
export class AggregatePokemonFormsResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonForms, {
    nullable: false
  })
  async aggregatePokemonForms(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonFormsArgs): Promise<AggregatePokemonForms> {
    return getPrismaFromContext(ctx).pokemonForms.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
