import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByBerryFlavorsArgs } from "./args/GroupByBerryFlavorsArgs";
import { BerryFlavors } from "../../../models/BerryFlavors";
import { BerryFlavorsGroupBy } from "../../outputs/BerryFlavorsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BerryFlavors)
export class GroupByBerryFlavorsResolver {
  @TypeGraphQL.Query(_returns => [BerryFlavorsGroupBy], {
    nullable: false
  })
  async groupByBerryFlavors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByBerryFlavorsArgs): Promise<BerryFlavorsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
