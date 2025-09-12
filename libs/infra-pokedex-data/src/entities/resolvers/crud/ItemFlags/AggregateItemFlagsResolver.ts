import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateItemFlagsArgs } from "./args/AggregateItemFlagsArgs";
import { ItemFlags } from "../../../models/ItemFlags";
import { AggregateItemFlags } from "../../outputs/AggregateItemFlags";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemFlags)
export class AggregateItemFlagsResolver {
  @TypeGraphQL.Query(_returns => AggregateItemFlags, {
    nullable: false
  })
  async aggregateItemFlags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateItemFlagsArgs): Promise<AggregateItemFlags> {
    return getPrismaFromContext(ctx).itemFlags.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
