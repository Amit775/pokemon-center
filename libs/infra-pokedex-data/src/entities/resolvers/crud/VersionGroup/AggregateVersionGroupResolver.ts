import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateVersionGroupArgs } from "./args/AggregateVersionGroupArgs";
import { VersionGroup } from "../../../models/VersionGroup";
import { AggregateVersionGroup } from "../../outputs/AggregateVersionGroup";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VersionGroup)
export class AggregateVersionGroupResolver {
  @TypeGraphQL.Query(_returns => AggregateVersionGroup, {
    nullable: false
  })
  async aggregateVersionGroup(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVersionGroupArgs): Promise<AggregateVersionGroup> {
    return getPrismaFromContext(ctx).versionGroups.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
