import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMoveMetaCategoryArgs } from "./args/FindFirstMoveMetaCategoryArgs";
import { MoveMetaCategory } from "../../../models/MoveMetaCategory";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaCategory)
export class FindFirstMoveMetaCategoryResolver {
  @TypeGraphQL.Query(_returns => MoveMetaCategory, {
    nullable: true
  })
  async findFirstMoveMetaCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveMetaCategoryArgs): Promise<MoveMetaCategory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
