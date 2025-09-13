import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateNatureBattleStylePreferencesArgs } from "./args/AggregateNatureBattleStylePreferencesArgs";
import { NatureBattleStylePreferences } from "../../../models/NatureBattleStylePreferences";
import { AggregateNatureBattleStylePreferences } from "../../outputs/AggregateNatureBattleStylePreferences";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NatureBattleStylePreferences)
export class AggregateNatureBattleStylePreferencesResolver {
  @TypeGraphQL.Query(_returns => AggregateNatureBattleStylePreferences, {
    nullable: false
  })
  async aggregateNatureBattleStylePreferences(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateNatureBattleStylePreferencesArgs): Promise<AggregateNatureBattleStylePreferences> {
    return getPrismaFromContext(ctx).natureBattleStylePreferences.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
