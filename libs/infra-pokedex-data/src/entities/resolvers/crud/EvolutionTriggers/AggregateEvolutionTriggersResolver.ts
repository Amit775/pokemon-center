import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEvolutionTriggersArgs } from "./args/AggregateEvolutionTriggersArgs";
import { EvolutionTriggers } from "../../../models/EvolutionTriggers";
import { AggregateEvolutionTriggers } from "../../outputs/AggregateEvolutionTriggers";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionTriggers)
export class AggregateEvolutionTriggersResolver {
  @TypeGraphQL.Query(_returns => AggregateEvolutionTriggers, {
    nullable: false
  })
  async aggregateEvolutionTriggers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEvolutionTriggersArgs): Promise<AggregateEvolutionTriggers> {
    return getPrismaFromContext(ctx).evolutionTriggers.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
