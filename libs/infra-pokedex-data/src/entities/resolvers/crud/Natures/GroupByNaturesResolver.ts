import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByNaturesArgs } from "./args/GroupByNaturesArgs";
import { Natures } from "../../../models/Natures";
import { NaturesGroupBy } from "../../outputs/NaturesGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Natures)
export class GroupByNaturesResolver {
  @TypeGraphQL.Query(_returns => [NaturesGroupBy], {
    nullable: false
  })
  async groupByNatures(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByNaturesArgs): Promise<NaturesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).natures.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
