import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneMoveEffectArgs } from "./args/DeleteOneMoveEffectArgs";
import { MoveEffect } from "../../../models/MoveEffect";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveEffect)
export class DeleteOneMoveEffectResolver {
  @TypeGraphQL.Mutation(_returns => MoveEffect, {
    nullable: true
  })
  async deleteOneMoveEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneMoveEffectArgs): Promise<MoveEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveEffects.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
