import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEncounterMethodArgs } from "./args/AggregateEncounterMethodArgs";
import { EncounterMethod } from "../../../models/EncounterMethod";
import { AggregateEncounterMethod } from "../../outputs/AggregateEncounterMethod";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterMethod)
export class AggregateEncounterMethodResolver {
  @TypeGraphQL.Query(_returns => AggregateEncounterMethod, {
    nullable: false
  })
  async aggregateEncounterMethod(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEncounterMethodArgs): Promise<AggregateEncounterMethod> {
    return getPrismaFromContext(ctx).encounterMethods.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
