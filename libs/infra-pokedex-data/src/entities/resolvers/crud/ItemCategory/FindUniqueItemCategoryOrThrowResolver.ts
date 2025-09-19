import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueItemCategoryOrThrowArgs } from "./args/FindUniqueItemCategoryOrThrowArgs";
import { ItemCategory } from "../../../models/ItemCategory";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemCategory)
export class FindUniqueItemCategoryOrThrowResolver {
  @TypeGraphQL.Query(_returns => ItemCategory, {
    nullable: true
  })
  async getItemCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueItemCategoryOrThrowArgs): Promise<ItemCategory | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemCategories.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
