import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MoveMeta } from "../../../models/MoveMeta";
import { MoveMetaCategory } from "../../../models/MoveMetaCategory";
import { MoveMetaCategoryMetaArgs } from "./args/MoveMetaCategoryMetaArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaCategory)
export class MoveMetaCategoryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [MoveMeta], {
    nullable: false
  })
  async meta(@TypeGraphQL.Root() moveMetaCategory: MoveMetaCategory, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveMetaCategoryMetaArgs): Promise<MoveMeta[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.findUniqueOrThrow({
      where: {
        id: moveMetaCategory.id,
      },
    }).meta({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
