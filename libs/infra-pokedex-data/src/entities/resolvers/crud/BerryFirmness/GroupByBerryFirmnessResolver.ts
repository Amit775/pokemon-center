import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByBerryFirmnessArgs } from "./args/GroupByBerryFirmnessArgs";
import { BerryFirmness } from "../../../models/BerryFirmness";
import { BerryFirmnessGroupBy } from "../../outputs/BerryFirmnessGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BerryFirmness)
export class GroupByBerryFirmnessResolver {
  @TypeGraphQL.Query(_returns => [BerryFirmnessGroupBy], {
    nullable: false
  })
  async groupByBerryFirmness(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByBerryFirmnessArgs): Promise<BerryFirmnessGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFirmness.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
