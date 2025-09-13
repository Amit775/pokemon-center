import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMoveMetaCategoriesArgs } from "./args/FindFirstMoveMetaCategoriesArgs";
import { MoveMetaCategories } from "../../../models/MoveMetaCategories";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaCategories)
export class FindFirstMoveMetaCategoriesResolver {
  @TypeGraphQL.Query(_returns => MoveMetaCategories, {
    nullable: true
  })
  async findFirstMoveMetaCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveMetaCategoriesArgs): Promise<MoveMetaCategories | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
