import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMoveTargetsOrThrowArgs } from "./args/FindFirstMoveTargetsOrThrowArgs";
import { MoveTargets } from "../../../models/MoveTargets";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveTargets)
export class FindFirstMoveTargetsOrThrowResolver {
  @TypeGraphQL.Query(_returns => MoveTargets, {
    nullable: true
  })
  async findFirstMoveTargetsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveTargetsOrThrowArgs): Promise<MoveTargets | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveTargets.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
