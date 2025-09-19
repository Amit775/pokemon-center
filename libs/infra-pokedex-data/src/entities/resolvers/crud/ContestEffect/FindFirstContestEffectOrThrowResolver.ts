import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstContestEffectOrThrowArgs } from "./args/FindFirstContestEffectOrThrowArgs";
import { ContestEffect } from "../../../models/ContestEffect";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestEffect)
export class FindFirstContestEffectOrThrowResolver {
  @TypeGraphQL.Query(_returns => ContestEffect, {
    nullable: true
  })
  async findFirstContestEffectOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstContestEffectOrThrowArgs): Promise<ContestEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestEffects.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
