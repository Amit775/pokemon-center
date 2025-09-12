import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateItemCategoriesArgs } from "./args/AggregateItemCategoriesArgs";
import { ItemCategories } from "../../../models/ItemCategories";
import { AggregateItemCategories } from "../../outputs/AggregateItemCategories";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemCategories)
export class AggregateItemCategoriesResolver {
  @TypeGraphQL.Query(_returns => AggregateItemCategories, {
    nullable: false
  })
  async aggregateItemCategories(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateItemCategoriesArgs): Promise<AggregateItemCategories> {
    return getPrismaFromContext(ctx).itemCategories.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
