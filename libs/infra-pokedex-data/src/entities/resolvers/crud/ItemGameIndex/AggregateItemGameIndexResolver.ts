import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateItemGameIndexArgs } from "./args/AggregateItemGameIndexArgs";
import { ItemGameIndex } from "../../../models/ItemGameIndex";
import { AggregateItemGameIndex } from "../../outputs/AggregateItemGameIndex";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ItemGameIndex)
export class AggregateItemGameIndexResolver {
  @TypeGraphQL.Query(_returns => AggregateItemGameIndex, {
    nullable: false
  })
  async aggregateItemGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateItemGameIndexArgs): Promise<AggregateItemGameIndex> {
    return getPrismaFromContext(ctx).itemGameIndices.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
