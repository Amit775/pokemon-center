import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEncounterMethodsArgs } from "./args/AggregateEncounterMethodsArgs";
import { EncounterMethods } from "../../../models/EncounterMethods";
import { AggregateEncounterMethods } from "../../outputs/AggregateEncounterMethods";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EncounterMethods)
export class AggregateEncounterMethodsResolver {
  @TypeGraphQL.Query(_returns => AggregateEncounterMethods, {
    nullable: false
  })
  async aggregateEncounterMethods(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEncounterMethodsArgs): Promise<AggregateEncounterMethods> {
    return getPrismaFromContext(ctx).encounterMethods.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
