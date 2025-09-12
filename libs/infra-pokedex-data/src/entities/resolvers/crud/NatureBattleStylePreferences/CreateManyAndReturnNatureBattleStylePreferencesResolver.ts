import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnNatureBattleStylePreferencesArgs } from "./args/CreateManyAndReturnNatureBattleStylePreferencesArgs";
import { NatureBattleStylePreferences } from "../../../models/NatureBattleStylePreferences";
import { CreateManyAndReturnNatureBattleStylePreferences } from "../../outputs/CreateManyAndReturnNatureBattleStylePreferences";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NatureBattleStylePreferences)
export class CreateManyAndReturnNatureBattleStylePreferencesResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnNatureBattleStylePreferences], {
    nullable: false
  })
  async createManyAndReturnNatureBattleStylePreferences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnNatureBattleStylePreferencesArgs): Promise<CreateManyAndReturnNatureBattleStylePreferences[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natureBattleStylePreferences.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
