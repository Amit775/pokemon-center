import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEncounterConditionValueMapArgs } from "./args/AggregateEncounterConditionValueMapArgs";
import { EncounterConditionValueMap } from "../../../models/EncounterConditionValueMap";
import { AggregateEncounterConditionValueMap } from "../../outputs/AggregateEncounterConditionValueMap";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditionValueMap)
export class AggregateEncounterConditionValueMapResolver {
  @TypeGraphQL.Query(_returns => AggregateEncounterConditionValueMap, {
    nullable: false
  })
  async aggregateEncounterConditionValueMap(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEncounterConditionValueMapArgs): Promise<AggregateEncounterConditionValueMap> {
    return getPrismaFromContext(ctx).encounterConditionValueMap.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
