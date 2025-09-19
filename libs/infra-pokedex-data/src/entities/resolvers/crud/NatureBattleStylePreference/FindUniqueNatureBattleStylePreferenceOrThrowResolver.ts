import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueNatureBattleStylePreferenceOrThrowArgs } from "./args/FindUniqueNatureBattleStylePreferenceOrThrowArgs";
import { NatureBattleStylePreference } from "../../../models/NatureBattleStylePreference";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NatureBattleStylePreference)
export class FindUniqueNatureBattleStylePreferenceOrThrowResolver {
  @TypeGraphQL.Query(_returns => NatureBattleStylePreference, {
    nullable: true
  })
  async getNatureBattleStylePreference(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueNatureBattleStylePreferenceOrThrowArgs): Promise<NatureBattleStylePreference | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
