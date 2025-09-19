import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEvolutionTriggerArgs } from "./args/AggregateEvolutionTriggerArgs";
import { EvolutionTrigger } from "../../../models/EvolutionTrigger";
import { AggregateEvolutionTrigger } from "../../outputs/AggregateEvolutionTrigger";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionTrigger)
export class AggregateEvolutionTriggerResolver {
  @TypeGraphQL.Query(_returns => AggregateEvolutionTrigger, {
    nullable: false
  })
  async aggregateEvolutionTrigger(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEvolutionTriggerArgs): Promise<AggregateEvolutionTrigger> {
    return getPrismaFromContext(ctx).evolutionTriggers.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
