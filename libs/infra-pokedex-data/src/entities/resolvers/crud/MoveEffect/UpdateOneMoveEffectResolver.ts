import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneMoveEffectArgs } from "./args/UpdateOneMoveEffectArgs";
import { MoveEffect } from "../../../models/MoveEffect";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveEffect)
export class UpdateOneMoveEffectResolver {
  @TypeGraphQL.Mutation(_returns => MoveEffect, {
    nullable: true
  })
  async updateOneMoveEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneMoveEffectArgs): Promise<MoveEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveEffects.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
