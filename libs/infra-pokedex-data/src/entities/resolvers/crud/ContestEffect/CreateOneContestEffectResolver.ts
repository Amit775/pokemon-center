import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneContestEffectArgs } from "./args/CreateOneContestEffectArgs";
import { ContestEffect } from "../../../models/ContestEffect";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ContestEffect)
export class CreateOneContestEffectResolver {
  @TypeGraphQL.Mutation(_returns => ContestEffect, {
    nullable: false
  })
  async createOneContestEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneContestEffectArgs): Promise<ContestEffect> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).contestEffects.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
