import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyMoveMetaCategoriesArgs } from "./args/FindManyMoveMetaCategoriesArgs";
import { MoveMetaCategories } from "../../../models/MoveMetaCategories";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveMetaCategories)
export class FindManyMoveMetaCategoriesResolver {
  @TypeGraphQL.Query(_returns => [MoveMetaCategories], {
    nullable: false
  })
  async findManyMoveMetaCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMoveMetaCategoriesArgs): Promise<MoveMetaCategories[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).moveMetaCategories.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
