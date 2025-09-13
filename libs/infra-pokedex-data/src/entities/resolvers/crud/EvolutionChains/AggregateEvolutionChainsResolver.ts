import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEvolutionChainsArgs } from "./args/AggregateEvolutionChainsArgs";
import { EvolutionChains } from "../../../models/EvolutionChains";
import { AggregateEvolutionChains } from "../../outputs/AggregateEvolutionChains";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EvolutionChains)
export class AggregateEvolutionChainsResolver {
  @TypeGraphQL.Query(_returns => AggregateEvolutionChains, {
    nullable: false
  })
  async aggregateEvolutionChains(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEvolutionChainsArgs): Promise<AggregateEvolutionChains> {
    return getPrismaFromContext(ctx).evolutionChains.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
