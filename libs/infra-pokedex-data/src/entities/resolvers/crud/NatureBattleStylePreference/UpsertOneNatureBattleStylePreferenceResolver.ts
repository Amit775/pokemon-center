import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneNatureBattleStylePreferenceArgs } from "./args/UpsertOneNatureBattleStylePreferenceArgs";
import { NatureBattleStylePreference } from "../../../models/NatureBattleStylePreference";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NatureBattleStylePreference)
export class UpsertOneNatureBattleStylePreferenceResolver {
  @TypeGraphQL.Mutation(_returns => NatureBattleStylePreference, {
    nullable: false
  })
  async upsertOneNatureBattleStylePreference(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneNatureBattleStylePreferenceArgs): Promise<NatureBattleStylePreference> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
