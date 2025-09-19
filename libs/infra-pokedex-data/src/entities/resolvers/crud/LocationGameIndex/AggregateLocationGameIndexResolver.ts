import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLocationGameIndexArgs } from "./args/AggregateLocationGameIndexArgs";
import { LocationGameIndex } from "../../../models/LocationGameIndex";
import { AggregateLocationGameIndex } from "../../outputs/AggregateLocationGameIndex";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationGameIndex)
export class AggregateLocationGameIndexResolver {
  @TypeGraphQL.Query(_returns => AggregateLocationGameIndex, {
    nullable: false
  })
  async aggregateLocationGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLocationGameIndexArgs): Promise<AggregateLocationGameIndex> {
    return getPrismaFromContext(ctx).locationGameIndices.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
