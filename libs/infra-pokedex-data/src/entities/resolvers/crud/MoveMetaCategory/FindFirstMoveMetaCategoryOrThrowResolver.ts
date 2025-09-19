import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMoveMetaCategoryOrThrowArgs } from "./args/FindFirstMoveMetaCategoryOrThrowArgs";
import { MoveMetaCategory } from "../../../models/MoveMetaCategory";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaCategory)
export class FindFirstMoveMetaCategoryOrThrowResolver {
  @TypeGraphQL.Query(_returns => MoveMetaCategory, {
    nullable: true
  })
  async findFirstMoveMetaCategoryOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMoveMetaCategoryOrThrowArgs): Promise<MoveMetaCategory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
