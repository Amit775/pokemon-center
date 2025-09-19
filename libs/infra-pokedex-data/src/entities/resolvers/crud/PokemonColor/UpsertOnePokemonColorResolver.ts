import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOnePokemonColorArgs } from "./args/UpsertOnePokemonColorArgs";
import { PokemonColor } from "../../../models/PokemonColor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonColor)
export class UpsertOnePokemonColorResolver {
  @TypeGraphQL.Mutation(_returns => PokemonColor, {
    nullable: false
  })
  async upsertOnePokemonColor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePokemonColorArgs): Promise<PokemonColor> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonColors.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
