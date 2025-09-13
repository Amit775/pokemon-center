import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyNatureBattleStylePreferencesArgs } from "./args/FindManyNatureBattleStylePreferencesArgs";
import { NatureBattleStylePreferences } from "../../../models/NatureBattleStylePreferences";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NatureBattleStylePreferences)
export class FindManyNatureBattleStylePreferencesResolver {
  @TypeGraphQL.Query(_returns => [NatureBattleStylePreferences], {
    nullable: false
  })
  async findManyNatureBattleStylePreferences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyNatureBattleStylePreferencesArgs): Promise<NatureBattleStylePreferences[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
