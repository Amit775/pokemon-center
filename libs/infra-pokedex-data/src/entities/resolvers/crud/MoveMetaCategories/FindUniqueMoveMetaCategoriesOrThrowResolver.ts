import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMoveMetaCategoriesOrThrowArgs } from "./args/FindUniqueMoveMetaCategoriesOrThrowArgs";
import { MoveMetaCategories } from "../../../models/MoveMetaCategories";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaCategories)
export class FindUniqueMoveMetaCategoriesOrThrowResolver {
  @TypeGraphQL.Query(_returns => MoveMetaCategories, {
    nullable: true
  })
  async findUniqueMoveMetaCategoriesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMoveMetaCategoriesOrThrowArgs): Promise<MoveMetaCategories | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
