import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateBerriesArgs } from "./args/AggregateBerriesArgs";
import { Berries } from "../../../models/Berries";
import { AggregateBerries } from "../../outputs/AggregateBerries";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Berries)
export class AggregateBerriesResolver {
  @TypeGraphQL.Query(_returns => AggregateBerries, {
    nullable: false
  })
  async aggregateBerries(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBerriesArgs): Promise<AggregateBerries> {
    return getPrismaFromContext(ctx).berries.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
