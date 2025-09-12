import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByTypeGameIndicesArgs } from "./args/GroupByTypeGameIndicesArgs";
import { TypeGameIndices } from "../../../models/TypeGameIndices";
import { TypeGameIndicesGroupBy } from "../../outputs/TypeGameIndicesGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeGameIndices)
export class GroupByTypeGameIndicesResolver {
  @TypeGraphQL.Query(_returns => [TypeGameIndicesGroupBy], {
    nullable: false
  })
  async groupByTypeGameIndices(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTypeGameIndicesArgs): Promise<TypeGameIndicesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
