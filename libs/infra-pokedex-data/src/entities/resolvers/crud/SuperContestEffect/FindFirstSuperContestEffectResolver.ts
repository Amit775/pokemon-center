import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSuperContestEffectArgs } from "./args/FindFirstSuperContestEffectArgs";
import { SuperContestEffect } from "../../../models/SuperContestEffect";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SuperContestEffect)
export class FindFirstSuperContestEffectResolver {
  @TypeGraphQL.Query(_returns => SuperContestEffect, {
    nullable: true
  })
  async findFirstSuperContestEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSuperContestEffectArgs): Promise<SuperContestEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
