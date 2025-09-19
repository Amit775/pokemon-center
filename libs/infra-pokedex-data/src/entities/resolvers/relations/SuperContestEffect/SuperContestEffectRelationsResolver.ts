import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Move } from "../../../models/Move";
import { SuperContestEffect } from "../../../models/SuperContestEffect";
import { SuperContestEffectMovesArgs } from "./args/SuperContestEffectMovesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SuperContestEffect)
export class SuperContestEffectRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Move], {
    nullable: false
  })
  async moves(@TypeGraphQL.Root() superContestEffect: SuperContestEffect, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: SuperContestEffectMovesArgs): Promise<Move[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).superContestEffects.findUniqueOrThrow({
      where: {
        id: superContestEffect.id,
      },
    }).moves({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
