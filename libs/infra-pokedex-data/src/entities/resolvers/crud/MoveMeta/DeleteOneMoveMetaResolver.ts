import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneMoveMetaArgs } from "./args/DeleteOneMoveMetaArgs";
import { MoveMeta } from "../../../models/MoveMeta";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMeta)
export class DeleteOneMoveMetaResolver {
  @TypeGraphQL.Mutation(_returns => MoveMeta, {
    nullable: true
  })
  async deleteOneMoveMeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneMoveMetaArgs): Promise<MoveMeta | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMeta.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
