import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEncounterConditionValuesArgs } from "./args/AggregateEncounterConditionValuesArgs";
import { EncounterConditionValues } from "../../../models/EncounterConditionValues";
import { AggregateEncounterConditionValues } from "../../outputs/AggregateEncounterConditionValues";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditionValues)
export class AggregateEncounterConditionValuesResolver {
  @TypeGraphQL.Query(_returns => AggregateEncounterConditionValues, {
    nullable: false
  })
  async aggregateEncounterConditionValues(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEncounterConditionValuesArgs): Promise<AggregateEncounterConditionValues> {
    return getPrismaFromContext(ctx).encounterConditionValues.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
