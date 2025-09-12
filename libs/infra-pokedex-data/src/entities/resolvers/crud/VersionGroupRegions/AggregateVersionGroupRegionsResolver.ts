import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateVersionGroupRegionsArgs } from "./args/AggregateVersionGroupRegionsArgs";
import { VersionGroupRegions } from "../../../models/VersionGroupRegions";
import { AggregateVersionGroupRegions } from "../../outputs/AggregateVersionGroupRegions";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroupRegions)
export class AggregateVersionGroupRegionsResolver {
  @TypeGraphQL.Query(_returns => AggregateVersionGroupRegions, {
    nullable: false
  })
  async aggregateVersionGroupRegions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVersionGroupRegionsArgs): Promise<AggregateVersionGroupRegions> {
    return getPrismaFromContext(ctx).versionGroupRegions.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
