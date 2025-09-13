import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByLocationGameIndicesArgs } from "./args/GroupByLocationGameIndicesArgs";
import { LocationGameIndices } from "../../../models/LocationGameIndices";
import { LocationGameIndicesGroupBy } from "../../outputs/LocationGameIndicesGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LocationGameIndices)
export class GroupByLocationGameIndicesResolver {
  @TypeGraphQL.Query(_returns => [LocationGameIndicesGroupBy], {
    nullable: false
  })
  async groupByLocationGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLocationGameIndicesArgs): Promise<LocationGameIndicesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).locationGameIndices.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
