import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMoveTargetArgs } from "./args/FindUniqueMoveTargetArgs";
import { MoveTarget } from "../../../models/MoveTarget";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveTarget)
export class FindUniqueMoveTargetResolver {
  @TypeGraphQL.Query(_returns => MoveTarget, {
    nullable: true
  })
  async moveTarget(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveTargetArgs): Promise<MoveTarget | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveTargets.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
