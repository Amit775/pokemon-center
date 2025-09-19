import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneSuperContestEffectArgs } from "./args/CreateOneSuperContestEffectArgs";
import { SuperContestEffect } from "../../../models/SuperContestEffect";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SuperContestEffect)
export class CreateOneSuperContestEffectResolver {
  @TypeGraphQL.Mutation(_returns => SuperContestEffect, {
    nullable: false
  })
  async createOneSuperContestEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSuperContestEffectArgs): Promise<SuperContestEffect> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
