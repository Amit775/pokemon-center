import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueNatureBattleStylePreferencesOrThrowArgs } from "./args/FindUniqueNatureBattleStylePreferencesOrThrowArgs";
import { NatureBattleStylePreferences } from "../../../models/NatureBattleStylePreferences";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NatureBattleStylePreferences)
export class FindUniqueNatureBattleStylePreferencesOrThrowResolver {
  @TypeGraphQL.Query(_returns => NatureBattleStylePreferences, {
    nullable: true
  })
  async findUniqueNatureBattleStylePreferencesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueNatureBattleStylePreferencesOrThrowArgs): Promise<NatureBattleStylePreferences | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
