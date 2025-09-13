import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTypeGameIndicesArgs } from "./args/AggregateTypeGameIndicesArgs";
import { TypeGameIndices } from "../../../models/TypeGameIndices";
import { AggregateTypeGameIndices } from "../../outputs/AggregateTypeGameIndices";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeGameIndices)
export class AggregateTypeGameIndicesResolver {
  @TypeGraphQL.Query(_returns => AggregateTypeGameIndices, {
    nullable: false
  })
  async aggregateTypeGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTypeGameIndicesArgs): Promise<AggregateTypeGameIndices> {
    return getPrismaFromContext(ctx).typeGameIndices.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
