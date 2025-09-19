import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneMoveMetaStatChangesArgs } from "./args/UpsertOneMoveMetaStatChangesArgs";
import { MoveMetaStatChanges } from "../../../models/MoveMetaStatChanges";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaStatChanges)
export class UpsertOneMoveMetaStatChangesResolver {
  @TypeGraphQL.Mutation(_returns => MoveMetaStatChanges, {
    nullable: false
  })
  async upsertOneMoveMetaStatChanges(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneMoveMetaStatChangesArgs): Promise<MoveMetaStatChanges> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaStatChanges.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
