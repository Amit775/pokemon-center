import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateItemFlingEffectsArgs } from "./args/AggregateItemFlingEffectsArgs";
import { ItemFlingEffects } from "../../../models/ItemFlingEffects";
import { AggregateItemFlingEffects } from "../../outputs/AggregateItemFlingEffects";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlingEffects)
export class AggregateItemFlingEffectsResolver {
  @TypeGraphQL.Query(_returns => AggregateItemFlingEffects, {
    nullable: false
  })
  async aggregateItemFlingEffects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateItemFlingEffectsArgs): Promise<AggregateItemFlingEffects> {
    return getPrismaFromContext(ctx).itemFlingEffects.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
