import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyMoveMetaStatChangesArgs } from "./args/FindManyMoveMetaStatChangesArgs";
import { MoveMetaStatChanges } from "../../../models/MoveMetaStatChanges";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaStatChanges)
export class FindManyMoveMetaStatChangesResolver {
  @TypeGraphQL.Query(_returns => [MoveMetaStatChanges], {
    nullable: false
  })
  async findManyMoveMetaStatChanges(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveMetaStatChangesArgs): Promise<MoveMetaStatChanges[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaStatChanges.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
