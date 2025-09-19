import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateVersionArgs } from "./args/AggregateVersionArgs";
import { Version } from "../../../models/Version";
import { AggregateVersion } from "../../outputs/AggregateVersion";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Version)
export class AggregateVersionResolver {
  @TypeGraphQL.Query(_returns => AggregateVersion, {
    nullable: false
  })
  async aggregateVersion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVersionArgs): Promise<AggregateVersion> {
    return getPrismaFromContext(ctx).versions.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
