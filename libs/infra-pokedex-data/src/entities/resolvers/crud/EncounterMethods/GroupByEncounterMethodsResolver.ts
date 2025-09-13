import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByEncounterMethodsArgs } from "./args/GroupByEncounterMethodsArgs";
import { EncounterMethods } from "../../../models/EncounterMethods";
import { EncounterMethodsGroupBy } from "../../outputs/EncounterMethodsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterMethods)
export class GroupByEncounterMethodsResolver {
  @TypeGraphQL.Query(_returns => [EncounterMethodsGroupBy], {
    nullable: false
  })
  async groupByEncounterMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByEncounterMethodsArgs): Promise<EncounterMethodsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).encounterMethods.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
