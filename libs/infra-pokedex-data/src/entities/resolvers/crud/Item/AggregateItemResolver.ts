import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateItemArgs } from "./args/AggregateItemArgs";
import { Item } from "../../../models/Item";
import { AggregateItem } from "../../outputs/AggregateItem";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Item)
export class AggregateItemResolver {
  @TypeGraphQL.Query(_returns => AggregateItem, {
    nullable: false
  })
  async aggregateItem(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateItemArgs): Promise<AggregateItem> {
    return getPrismaFromContext(ctx).items.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
