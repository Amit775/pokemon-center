import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateRegionsArgs } from "./args/AggregateRegionsArgs";
import { Regions } from "../../../models/Regions";
import { AggregateRegions } from "../../outputs/AggregateRegions";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Regions)
export class AggregateRegionsResolver {
  @TypeGraphQL.Query(_returns => AggregateRegions, {
    nullable: false
  })
  async aggregateRegions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRegionsArgs): Promise<AggregateRegions> {
    return getPrismaFromContext(ctx).regions.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
