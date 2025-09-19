import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneMoveMetaStatChangesArgs } from "./args/UpdateOneMoveMetaStatChangesArgs";
import { MoveMetaStatChanges } from "../../../models/MoveMetaStatChanges";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaStatChanges)
export class UpdateOneMoveMetaStatChangesResolver {
  @TypeGraphQL.Mutation(_returns => MoveMetaStatChanges, {
    nullable: true
  })
  async updateOneMoveMetaStatChanges(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneMoveMetaStatChangesArgs): Promise<MoveMetaStatChanges | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaStatChanges.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
