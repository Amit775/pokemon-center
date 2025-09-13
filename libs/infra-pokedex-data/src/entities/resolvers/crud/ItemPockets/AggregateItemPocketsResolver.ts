import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateItemPocketsArgs } from "./args/AggregateItemPocketsArgs";
import { ItemPockets } from "../../../models/ItemPockets";
import { AggregateItemPockets } from "../../outputs/AggregateItemPockets";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemPockets)
export class AggregateItemPocketsResolver {
  @TypeGraphQL.Query(_returns => AggregateItemPockets, {
    nullable: false
  })
  async aggregateItemPockets(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateItemPocketsArgs): Promise<AggregateItemPockets> {
    return getPrismaFromContext(ctx).itemPockets.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
