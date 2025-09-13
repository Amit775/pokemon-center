import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMoveTargetsArgs } from "./args/FindUniqueMoveTargetsArgs";
import { MoveTargets } from "../../../models/MoveTargets";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveTargets)
export class FindUniqueMoveTargetsResolver {
  @TypeGraphQL.Query(_returns => MoveTargets, {
    nullable: true
  })
  async findUniqueMoveTargets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveTargetsArgs): Promise<MoveTargets | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveTargets.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
