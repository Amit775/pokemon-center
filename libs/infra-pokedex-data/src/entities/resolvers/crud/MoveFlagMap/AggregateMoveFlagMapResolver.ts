import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMoveFlagMapArgs } from "./args/AggregateMoveFlagMapArgs";
import { MoveFlagMap } from "../../../models/MoveFlagMap";
import { AggregateMoveFlagMap } from "../../outputs/AggregateMoveFlagMap";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MoveFlagMap)
export class AggregateMoveFlagMapResolver {
  @TypeGraphQL.Query(_returns => AggregateMoveFlagMap, {
    nullable: false
  })
  async aggregateMoveFlagMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMoveFlagMapArgs): Promise<AggregateMoveFlagMap> {
    return getPrismaFromContext(ctx).moveFlagMap.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
