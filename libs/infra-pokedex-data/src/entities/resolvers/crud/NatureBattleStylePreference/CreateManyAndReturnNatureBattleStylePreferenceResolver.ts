import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnNatureBattleStylePreferenceArgs } from "./args/CreateManyAndReturnNatureBattleStylePreferenceArgs";
import { NatureBattleStylePreference } from "../../../models/NatureBattleStylePreference";
import { CreateManyAndReturnNatureBattleStylePreference } from "../../outputs/CreateManyAndReturnNatureBattleStylePreference";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NatureBattleStylePreference)
export class CreateManyAndReturnNatureBattleStylePreferenceResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnNatureBattleStylePreference], {
    nullable: false
  })
  async createManyAndReturnNatureBattleStylePreference(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnNatureBattleStylePreferenceArgs): Promise<CreateManyAndReturnNatureBattleStylePreference[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
