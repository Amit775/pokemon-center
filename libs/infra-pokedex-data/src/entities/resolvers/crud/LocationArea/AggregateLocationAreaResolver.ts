import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLocationAreaArgs } from "./args/AggregateLocationAreaArgs";
import { LocationArea } from "../../../models/LocationArea";
import { AggregateLocationArea } from "../../outputs/AggregateLocationArea";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationArea)
export class AggregateLocationAreaResolver {
  @TypeGraphQL.Query(_returns => AggregateLocationArea, {
    nullable: false
  })
  async aggregateLocationArea(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLocationAreaArgs): Promise<AggregateLocationArea> {
    return getPrismaFromContext(ctx).locationAreas.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
