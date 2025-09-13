import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateItemGameIndicesArgs } from "./args/AggregateItemGameIndicesArgs";
import { ItemGameIndices } from "../../../models/ItemGameIndices";
import { AggregateItemGameIndices } from "../../outputs/AggregateItemGameIndices";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemGameIndices)
export class AggregateItemGameIndicesResolver {
  @TypeGraphQL.Query(_returns => AggregateItemGameIndices, {
    nullable: false
  })
  async aggregateItemGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateItemGameIndicesArgs): Promise<AggregateItemGameIndices> {
    return getPrismaFromContext(ctx).itemGameIndices.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
