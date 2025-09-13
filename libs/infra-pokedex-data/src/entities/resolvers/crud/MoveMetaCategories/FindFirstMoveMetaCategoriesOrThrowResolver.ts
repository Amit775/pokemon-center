import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMoveMetaCategoriesOrThrowArgs } from "./args/FindFirstMoveMetaCategoriesOrThrowArgs";
import { MoveMetaCategories } from "../../../models/MoveMetaCategories";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaCategories)
export class FindFirstMoveMetaCategoriesOrThrowResolver {
  @TypeGraphQL.Query(_returns => MoveMetaCategories, {
    nullable: true
  })
  async findFirstMoveMetaCategoriesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveMetaCategoriesOrThrowArgs): Promise<MoveMetaCategories | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
