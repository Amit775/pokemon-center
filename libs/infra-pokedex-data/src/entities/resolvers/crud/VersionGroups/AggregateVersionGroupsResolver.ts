import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateVersionGroupsArgs } from "./args/AggregateVersionGroupsArgs";
import { VersionGroups } from "../../../models/VersionGroups";
import { AggregateVersionGroups } from "../../outputs/AggregateVersionGroups";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroups)
export class AggregateVersionGroupsResolver {
  @TypeGraphQL.Query(_returns => AggregateVersionGroups, {
    nullable: false
  })
  async aggregateVersionGroups(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVersionGroupsArgs): Promise<AggregateVersionGroups> {
    return getPrismaFromContext(ctx).versionGroups.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
