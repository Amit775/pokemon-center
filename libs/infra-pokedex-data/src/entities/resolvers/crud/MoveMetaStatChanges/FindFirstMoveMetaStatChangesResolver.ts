import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMoveMetaStatChangesArgs } from "./args/FindFirstMoveMetaStatChangesArgs";
import { MoveMetaStatChanges } from "../../../models/MoveMetaStatChanges";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaStatChanges)
export class FindFirstMoveMetaStatChangesResolver {
  @TypeGraphQL.Query(_returns => MoveMetaStatChanges, {
    nullable: true
  })
  async findFirstMoveMetaStatChanges(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveMetaStatChangesArgs): Promise<MoveMetaStatChanges | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaStatChanges.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
