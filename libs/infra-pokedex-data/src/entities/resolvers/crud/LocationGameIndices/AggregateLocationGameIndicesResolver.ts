import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLocationGameIndicesArgs } from "./args/AggregateLocationGameIndicesArgs";
import { LocationGameIndices } from "../../../models/LocationGameIndices";
import { AggregateLocationGameIndices } from "../../outputs/AggregateLocationGameIndices";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationGameIndices)
export class AggregateLocationGameIndicesResolver {
  @TypeGraphQL.Query(_returns => AggregateLocationGameIndices, {
    nullable: false
  })
  async aggregateLocationGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLocationGameIndicesArgs): Promise<AggregateLocationGameIndices> {
    return getPrismaFromContext(ctx).locationGameIndices.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
