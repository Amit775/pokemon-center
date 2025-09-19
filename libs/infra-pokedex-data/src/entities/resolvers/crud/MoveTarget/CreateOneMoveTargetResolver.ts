import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneMoveTargetArgs } from "./args/CreateOneMoveTargetArgs";
import { MoveTarget } from "../../../models/MoveTarget";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveTarget)
export class CreateOneMoveTargetResolver {
  @TypeGraphQL.Mutation(_returns => MoveTarget, {
    nullable: false
  })
  async createOneMoveTarget(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneMoveTargetArgs): Promise<MoveTarget> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveTargets.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
