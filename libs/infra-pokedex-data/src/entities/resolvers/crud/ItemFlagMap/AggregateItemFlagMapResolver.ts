import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateItemFlagMapArgs } from "./args/AggregateItemFlagMapArgs";
import { ItemFlagMap } from "../../../models/ItemFlagMap";
import { AggregateItemFlagMap } from "../../outputs/AggregateItemFlagMap";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlagMap)
export class AggregateItemFlagMapResolver {
  @TypeGraphQL.Query(_returns => AggregateItemFlagMap, {
    nullable: false
  })
  async aggregateItemFlagMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateItemFlagMapArgs): Promise<AggregateItemFlagMap> {
    return getPrismaFromContext(ctx).itemFlagMap.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
