import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnMoveTargetArgs } from "./args/CreateManyAndReturnMoveTargetArgs";
import { MoveTarget } from "../../../models/MoveTarget";
import { CreateManyAndReturnMoveTarget } from "../../outputs/CreateManyAndReturnMoveTarget";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveTarget)
export class CreateManyAndReturnMoveTargetResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMoveTarget], {
    nullable: false
  })
  async createManyAndReturnMoveTarget(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMoveTargetArgs): Promise<CreateManyAndReturnMoveTarget[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveTargets.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
