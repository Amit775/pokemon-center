import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateItemsArgs } from "./args/AggregateItemsArgs";
import { Items } from "../../../models/Items";
import { AggregateItems } from "../../outputs/AggregateItems";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Items)
export class AggregateItemsResolver {
  @TypeGraphQL.Query(_returns => AggregateItems, {
    nullable: false
  })
  async aggregateItems(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateItemsArgs): Promise<AggregateItems> {
    return getPrismaFromContext(ctx).items.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
