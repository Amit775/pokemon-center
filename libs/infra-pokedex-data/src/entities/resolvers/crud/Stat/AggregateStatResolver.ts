import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateStatArgs } from "./args/AggregateStatArgs";
import { Stat } from "../../../models/Stat";
import { AggregateStat } from "../../outputs/AggregateStat";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Stat)
export class AggregateStatResolver {
  @TypeGraphQL.Query(_returns => AggregateStat, {
    nullable: false
  })
  async aggregateStat(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStatArgs): Promise<AggregateStat> {
    return getPrismaFromContext(ctx).stats.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
