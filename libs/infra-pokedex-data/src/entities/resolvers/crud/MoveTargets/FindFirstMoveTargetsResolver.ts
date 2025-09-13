import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMoveTargetsArgs } from "./args/FindFirstMoveTargetsArgs";
import { MoveTargets } from "../../../models/MoveTargets";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveTargets)
export class FindFirstMoveTargetsResolver {
  @TypeGraphQL.Query(_returns => MoveTargets, {
    nullable: true
  })
  async findFirstMoveTargets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveTargetsArgs): Promise<MoveTargets | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveTargets.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
