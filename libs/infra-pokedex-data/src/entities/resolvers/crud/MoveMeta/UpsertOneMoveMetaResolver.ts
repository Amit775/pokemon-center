import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneMoveMetaArgs } from "./args/UpsertOneMoveMetaArgs";
import { MoveMeta } from "../../../models/MoveMeta";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMeta)
export class UpsertOneMoveMetaResolver {
  @TypeGraphQL.Mutation(_returns => MoveMeta, {
    nullable: false
  })
  async upsertOneMoveMeta(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneMoveMetaArgs): Promise<MoveMeta> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMeta.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
