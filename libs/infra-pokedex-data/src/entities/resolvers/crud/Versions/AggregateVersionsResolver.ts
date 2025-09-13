import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateVersionsArgs } from "./args/AggregateVersionsArgs";
import { Versions } from "../../../models/Versions";
import { AggregateVersions } from "../../outputs/AggregateVersions";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Versions)
export class AggregateVersionsResolver {
  @TypeGraphQL.Query(_returns => AggregateVersions, {
    nullable: false
  })
  async aggregateVersions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVersionsArgs): Promise<AggregateVersions> {
    return getPrismaFromContext(ctx).versions.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
