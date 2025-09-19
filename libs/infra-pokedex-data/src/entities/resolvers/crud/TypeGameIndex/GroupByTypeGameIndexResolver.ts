import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByTypeGameIndexArgs } from "./args/GroupByTypeGameIndexArgs";
import { TypeGameIndex } from "../../../models/TypeGameIndex";
import { TypeGameIndexGroupBy } from "../../outputs/TypeGameIndexGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeGameIndex)
export class GroupByTypeGameIndexResolver {
  @TypeGraphQL.Query(_returns => [TypeGameIndexGroupBy], {
    nullable: false
  })
  async groupByTypeGameIndex(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTypeGameIndexArgs): Promise<TypeGameIndexGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeGameIndices.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
