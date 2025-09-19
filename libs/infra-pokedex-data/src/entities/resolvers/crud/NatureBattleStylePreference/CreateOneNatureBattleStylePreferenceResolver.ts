import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneNatureBattleStylePreferenceArgs } from "./args/CreateOneNatureBattleStylePreferenceArgs";
import { NatureBattleStylePreference } from "../../../models/NatureBattleStylePreference";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NatureBattleStylePreference)
export class CreateOneNatureBattleStylePreferenceResolver {
  @TypeGraphQL.Mutation(_returns => NatureBattleStylePreference, {
    nullable: false
  })
  async createOneNatureBattleStylePreference(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneNatureBattleStylePreferenceArgs): Promise<NatureBattleStylePreference> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
