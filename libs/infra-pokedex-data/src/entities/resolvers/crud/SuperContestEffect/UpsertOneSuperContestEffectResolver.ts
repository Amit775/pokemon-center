import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneSuperContestEffectArgs } from "./args/UpsertOneSuperContestEffectArgs";
import { SuperContestEffect } from "../../../models/SuperContestEffect";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SuperContestEffect)
export class UpsertOneSuperContestEffectResolver {
  @TypeGraphQL.Mutation(_returns => SuperContestEffect, {
    nullable: false
  })
  async upsertOneSuperContestEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneSuperContestEffectArgs): Promise<SuperContestEffect> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
