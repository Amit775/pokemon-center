import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByLocationAreasArgs } from "./args/GroupByLocationAreasArgs";
import { LocationAreas } from "../../../models/LocationAreas";
import { LocationAreasGroupBy } from "../../outputs/LocationAreasGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationAreas)
export class GroupByLocationAreasResolver {
  @TypeGraphQL.Query(_returns => [LocationAreasGroupBy], {
    nullable: false
  })
  async groupByLocationAreas(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLocationAreasArgs): Promise<LocationAreasGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationAreas.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
