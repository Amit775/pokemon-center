import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSuperContestEffectOrThrowArgs } from "./args/FindFirstSuperContestEffectOrThrowArgs";
import { SuperContestEffect } from "../../../models/SuperContestEffect";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SuperContestEffect)
export class FindFirstSuperContestEffectOrThrowResolver {
  @TypeGraphQL.Query(_returns => SuperContestEffect, {
    nullable: true
  })
  async findFirstSuperContestEffectOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSuperContestEffectOrThrowArgs): Promise<SuperContestEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
