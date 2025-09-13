import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMoveTargetsOrThrowArgs } from "./args/FindUniqueMoveTargetsOrThrowArgs";
import { MoveTargets } from "../../../models/MoveTargets";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveTargets)
export class FindUniqueMoveTargetsOrThrowResolver {
  @TypeGraphQL.Query(_returns => MoveTargets, {
    nullable: true
  })
  async findUniqueMoveTargetsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveTargetsOrThrowArgs): Promise<MoveTargets | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveTargets.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
