import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueItemCategoriesOrThrowArgs } from "./args/FindUniqueItemCategoriesOrThrowArgs";
import { ItemCategories } from "../../../models/ItemCategories";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemCategories)
export class FindUniqueItemCategoriesOrThrowResolver {
  @TypeGraphQL.Query(_returns => ItemCategories, {
    nullable: true
  })
  async findUniqueItemCategoriesOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueItemCategoriesOrThrowArgs): Promise<ItemCategories | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).itemCategories.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
