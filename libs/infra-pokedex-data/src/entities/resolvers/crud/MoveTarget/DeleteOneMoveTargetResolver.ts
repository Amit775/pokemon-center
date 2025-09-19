import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneMoveTargetArgs } from "./args/DeleteOneMoveTargetArgs";
import { MoveTarget } from "../../../models/MoveTarget";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveTarget)
export class DeleteOneMoveTargetResolver {
  @TypeGraphQL.Mutation(_returns => MoveTarget, {
    nullable: true
  })
  async deleteOneMoveTarget(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneMoveTargetArgs): Promise<MoveTarget | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveTargets.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
