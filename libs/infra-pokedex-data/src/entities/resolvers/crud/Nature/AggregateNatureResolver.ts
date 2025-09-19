import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateNatureArgs } from "./args/AggregateNatureArgs";
import { Nature } from "../../../models/Nature";
import { AggregateNature } from "../../outputs/AggregateNature";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Nature)
export class AggregateNatureResolver {
  @TypeGraphQL.Query(_returns => AggregateNature, {
    nullable: false
  })
  async aggregateNature(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateNatureArgs): Promise<AggregateNature> {
    return getPrismaFromContext(ctx).natures.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
