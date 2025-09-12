import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnMoveTargetsArgs } from "./args/CreateManyAndReturnMoveTargetsArgs";
import { MoveTargets } from "../../../models/MoveTargets";
import { CreateManyAndReturnMoveTargets } from "../../outputs/CreateManyAndReturnMoveTargets";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveTargets)
export class CreateManyAndReturnMoveTargetsResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnMoveTargets], {
    nullable: false
  })
  async createManyAndReturnMoveTargets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnMoveTargetsArgs): Promise<CreateManyAndReturnMoveTargets[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveTargets.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
