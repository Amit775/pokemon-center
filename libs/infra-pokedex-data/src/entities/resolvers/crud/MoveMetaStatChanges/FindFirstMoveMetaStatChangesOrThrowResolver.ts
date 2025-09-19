import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMoveMetaStatChangesOrThrowArgs } from "./args/FindFirstMoveMetaStatChangesOrThrowArgs";
import { MoveMetaStatChanges } from "../../../models/MoveMetaStatChanges";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaStatChanges)
export class FindFirstMoveMetaStatChangesOrThrowResolver {
  @TypeGraphQL.Query(_returns => MoveMetaStatChanges, {
    nullable: true
  })
  async findFirstMoveMetaStatChangesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveMetaStatChangesOrThrowArgs): Promise<MoveMetaStatChanges | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaStatChanges.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
