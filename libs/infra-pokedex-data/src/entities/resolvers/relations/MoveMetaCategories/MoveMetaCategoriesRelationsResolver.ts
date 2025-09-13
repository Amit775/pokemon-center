import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MoveMeta } from "../../../models/MoveMeta";
import { MoveMetaCategories } from "../../../models/MoveMetaCategories";
import { MoveMetaCategoriesMetaArgs } from "./args/MoveMetaCategoriesMetaArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaCategories)
export class MoveMetaCategoriesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [MoveMeta], {
    nullable: false
  })
  async meta(@TypeGraphQL.Root() moveMetaCategories: MoveMetaCategories, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: MoveMetaCategoriesMetaArgs): Promise<MoveMeta[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.findUniqueOrThrow({
      where: {
        id: moveMetaCategories.id,
      },
    }).meta({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
