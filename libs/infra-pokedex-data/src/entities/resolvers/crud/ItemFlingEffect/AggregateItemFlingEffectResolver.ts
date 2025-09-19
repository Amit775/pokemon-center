import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateItemFlingEffectArgs } from "./args/AggregateItemFlingEffectArgs";
import { ItemFlingEffect } from "../../../models/ItemFlingEffect";
import { AggregateItemFlingEffect } from "../../outputs/AggregateItemFlingEffect";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlingEffect)
export class AggregateItemFlingEffectResolver {
  @TypeGraphQL.Query(_returns => AggregateItemFlingEffect, {
    nullable: false
  })
  async aggregateItemFlingEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateItemFlingEffectArgs): Promise<AggregateItemFlingEffect> {
    return getPrismaFromContext(ctx).itemFlingEffects.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
