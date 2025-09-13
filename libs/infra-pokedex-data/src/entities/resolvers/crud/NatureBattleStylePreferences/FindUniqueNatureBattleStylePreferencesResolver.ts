import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueNatureBattleStylePreferencesArgs } from "./args/FindUniqueNatureBattleStylePreferencesArgs";
import { NatureBattleStylePreferences } from "../../../models/NatureBattleStylePreferences";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NatureBattleStylePreferences)
export class FindUniqueNatureBattleStylePreferencesResolver {
  @TypeGraphQL.Query(_returns => NatureBattleStylePreferences, {
    nullable: true
  })
  async findUniqueNatureBattleStylePreferences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueNatureBattleStylePreferencesArgs): Promise<NatureBattleStylePreferences | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
