import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueContestEffectOrThrowArgs } from "./args/FindUniqueContestEffectOrThrowArgs";
import { ContestEffect } from "../../../models/ContestEffect";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestEffect)
export class FindUniqueContestEffectOrThrowResolver {
  @TypeGraphQL.Query(_returns => ContestEffect, {
    nullable: true
  })
  async getContestEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueContestEffectOrThrowArgs): Promise<ContestEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestEffects.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
