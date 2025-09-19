import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByEncounterMethodArgs } from "./args/GroupByEncounterMethodArgs";
import { EncounterMethod } from "../../../models/EncounterMethod";
import { EncounterMethodGroupBy } from "../../outputs/EncounterMethodGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterMethod)
export class GroupByEncounterMethodResolver {
  @TypeGraphQL.Query(_returns => [EncounterMethodGroupBy], {
    nullable: false
  })
  async groupByEncounterMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEncounterMethodArgs): Promise<EncounterMethodGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
