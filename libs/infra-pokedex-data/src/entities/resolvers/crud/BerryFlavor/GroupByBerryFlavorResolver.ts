import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByBerryFlavorArgs } from "./args/GroupByBerryFlavorArgs";
import { BerryFlavor } from "../../../models/BerryFlavor";
import { BerryFlavorGroupBy } from "../../outputs/BerryFlavorGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BerryFlavor)
export class GroupByBerryFlavorResolver {
  @TypeGraphQL.Query(_returns => [BerryFlavorGroupBy], {
    nullable: false
  })
  async groupByBerryFlavor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByBerryFlavorArgs): Promise<BerryFlavorGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).berryFlavors.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
