import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneItemCategoryArgs } from "./args/UpdateOneItemCategoryArgs";
import { ItemCategory } from "../../../models/ItemCategory";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemCategory)
export class UpdateOneItemCategoryResolver {
  @TypeGraphQL.Mutation(_returns => ItemCategory, {
    nullable: true
  })
  async updateOneItemCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneItemCategoryArgs): Promise<ItemCategory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemCategories.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
