import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEncountersArgs } from "./args/AggregateEncountersArgs";
import { Encounters } from "../../../models/Encounters";
import { AggregateEncounters } from "../../outputs/AggregateEncounters";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Encounters)
export class AggregateEncountersResolver {
  @TypeGraphQL.Query(_returns => AggregateEncounters, {
    nullable: false
  })
  async aggregateEncounters(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEncountersArgs): Promise<AggregateEncounters> {
    return getPrismaFromContext(ctx).encounters.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
