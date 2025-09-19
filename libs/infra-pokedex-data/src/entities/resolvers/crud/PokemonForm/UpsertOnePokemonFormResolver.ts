import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOnePokemonFormArgs } from "./args/UpsertOnePokemonFormArgs";
import { PokemonForm } from "../../../models/PokemonForm";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonForm)
export class UpsertOnePokemonFormResolver {
  @TypeGraphQL.Mutation(_returns => PokemonForm, {
    nullable: false
  })
  async upsertOnePokemonForm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePokemonFormArgs): Promise<PokemonForm> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonForms.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
