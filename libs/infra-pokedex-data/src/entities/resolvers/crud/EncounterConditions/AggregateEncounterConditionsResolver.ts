import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEncounterConditionsArgs } from "./args/AggregateEncounterConditionsArgs";
import { EncounterConditions } from "../../../models/EncounterConditions";
import { AggregateEncounterConditions } from "../../outputs/AggregateEncounterConditions";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterConditions)
export class AggregateEncounterConditionsResolver {
  @TypeGraphQL.Query(_returns => AggregateEncounterConditions, {
    nullable: false
  })
  async aggregateEncounterConditions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEncounterConditionsArgs): Promise<AggregateEncounterConditions> {
    return getPrismaFromContext(ctx).encounterConditions.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
