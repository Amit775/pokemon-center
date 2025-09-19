import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEncounterConditionValueArgs } from "./args/AggregateEncounterConditionValueArgs";
import { EncounterConditionValue } from "../../../models/EncounterConditionValue";
import { AggregateEncounterConditionValue } from "../../outputs/AggregateEncounterConditionValue";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditionValue)
export class AggregateEncounterConditionValueResolver {
  @TypeGraphQL.Query(_returns => AggregateEncounterConditionValue, {
    nullable: false
  })
  async aggregateEncounterConditionValue(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEncounterConditionValueArgs): Promise<AggregateEncounterConditionValue> {
    return getPrismaFromContext(ctx).encounterConditionValues.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
