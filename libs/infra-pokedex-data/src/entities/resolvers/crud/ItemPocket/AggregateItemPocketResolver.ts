import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateItemPocketArgs } from "./args/AggregateItemPocketArgs";
import { ItemPocket } from "../../../models/ItemPocket";
import { AggregateItemPocket } from "../../outputs/AggregateItemPocket";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemPocket)
export class AggregateItemPocketResolver {
  @TypeGraphQL.Query(_returns => AggregateItemPocket, {
    nullable: false
  })
  async aggregateItemPocket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateItemPocketArgs): Promise<AggregateItemPocket> {
    return getPrismaFromContext(ctx).itemPockets.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
