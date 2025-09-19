import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEncounterConditionArgs } from "./args/AggregateEncounterConditionArgs";
import { EncounterCondition } from "../../../models/EncounterCondition";
import { AggregateEncounterCondition } from "../../outputs/AggregateEncounterCondition";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterCondition)
export class AggregateEncounterConditionResolver {
  @TypeGraphQL.Query(_returns => AggregateEncounterCondition, {
    nullable: false
  })
  async aggregateEncounterCondition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEncounterConditionArgs): Promise<AggregateEncounterCondition> {
    return getPrismaFromContext(ctx).encounterConditions.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
