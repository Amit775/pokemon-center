import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOnePokemonStatArgs } from "./args/UpsertOnePokemonStatArgs";
import { PokemonStat } from "../../../models/PokemonStat";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonStat)
export class UpsertOnePokemonStatResolver {
  @TypeGraphQL.Mutation(_returns => PokemonStat, {
    nullable: false
  })
  async upsertOnePokemonStat(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePokemonStatArgs): Promise<PokemonStat> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonStats.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
