import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstNatureBattleStylePreferenceOrThrowArgs } from "./args/FindFirstNatureBattleStylePreferenceOrThrowArgs";
import { NatureBattleStylePreference } from "../../../models/NatureBattleStylePreference";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NatureBattleStylePreference)
export class FindFirstNatureBattleStylePreferenceOrThrowResolver {
  @TypeGraphQL.Query(_returns => NatureBattleStylePreference, {
    nullable: true
  })
  async findFirstNatureBattleStylePreferenceOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstNatureBattleStylePreferenceOrThrowArgs): Promise<NatureBattleStylePreference | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
