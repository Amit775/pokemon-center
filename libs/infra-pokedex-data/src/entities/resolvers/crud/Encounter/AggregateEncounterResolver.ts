import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEncounterArgs } from "./args/AggregateEncounterArgs";
import { Encounter } from "../../../models/Encounter";
import { AggregateEncounter } from "../../outputs/AggregateEncounter";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Encounter)
export class AggregateEncounterResolver {
  @TypeGraphQL.Query(_returns => AggregateEncounter, {
    nullable: false
  })
  async aggregateEncounter(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEncounterArgs): Promise<AggregateEncounter> {
    return getPrismaFromContext(ctx).encounters.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
