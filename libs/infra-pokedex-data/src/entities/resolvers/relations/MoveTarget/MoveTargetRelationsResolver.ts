import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Move } from "../../../models/Move";
import { MoveTarget } from "../../../models/MoveTarget";
import { MoveTargetMovesArgs } from "./args/MoveTargetMovesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveTarget)
export class MoveTargetRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Move], {
    nullable: false
  })
  async moves(@TypeGraphQL.Root() moveTarget: MoveTarget, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveTargetMovesArgs): Promise<Move[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveTargets.findUniqueOrThrow({
      where: {
        id: moveTarget.id,
      },
    }).moves({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
