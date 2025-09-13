import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLocationAreasArgs } from "./args/AggregateLocationAreasArgs";
import { LocationAreas } from "../../../models/LocationAreas";
import { AggregateLocationAreas } from "../../outputs/AggregateLocationAreas";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationAreas)
export class AggregateLocationAreasResolver {
  @TypeGraphQL.Query(_returns => AggregateLocationAreas, {
    nullable: false
  })
  async aggregateLocationAreas(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLocationAreasArgs): Promise<AggregateLocationAreas> {
    return getPrismaFromContext(ctx).locationAreas.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
