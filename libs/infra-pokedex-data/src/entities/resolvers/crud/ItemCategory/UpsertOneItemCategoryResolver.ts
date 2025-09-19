import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneItemCategoryArgs } from "./args/UpsertOneItemCategoryArgs";
import { ItemCategory } from "../../../models/ItemCategory";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemCategory)
export class UpsertOneItemCategoryResolver {
  @TypeGraphQL.Mutation(_returns => ItemCategory, {
    nullable: false
  })
  async upsertOneItemCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneItemCategoryArgs): Promise<ItemCategory> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemCategories.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
