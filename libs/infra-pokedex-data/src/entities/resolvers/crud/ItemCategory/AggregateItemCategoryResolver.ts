import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateItemCategoryArgs } from "./args/AggregateItemCategoryArgs";
import { ItemCategory } from "../../../models/ItemCategory";
import { AggregateItemCategory } from "../../outputs/AggregateItemCategory";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemCategory)
export class AggregateItemCategoryResolver {
  @TypeGraphQL.Query(_returns => AggregateItemCategory, {
    nullable: false
  })
  async aggregateItemCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateItemCategoryArgs): Promise<AggregateItemCategory> {
    return getPrismaFromContext(ctx).itemCategories.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
